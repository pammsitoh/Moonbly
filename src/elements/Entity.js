const { v4 } = require("uuid");

class Entity {
    constructor(id, format_version){
        this.identifier = id;
        this.format_version = format_version;
        this.typeFile = "entity";

        this.cmd_runners = [];
        this.event_listeners = {
            "spawn": "minecraft:entity_spawned",
            "jump": "moonbly:jump"
        };

        //JsonCode...
        this.baseFile = {
            "format_version": this.format_version,
            "minecraft:entity": {
                "description": {
                    "identifier": this.identifier,
                    "is_spawnable": true,
                    "is_summonable": true
                },
                "component_groups": {},
                "components": {},
                "events": {}
            }
        };

        this.properties = {};
    }

    //Description...

    isSpawnable(option) {
        this.baseFile["minecraft:entity"].description.is_spawnable = option;
    }

    isSummonable(option) {
        this.baseFile["minecraft:entity"].description.is_summonable = option;
    }

    //Basic Properties...
    setProperties(properties) {
        this.properties = properties;
    }

    //Set Inmortal...
    setInvulnerable(){
        this.baseFile["minecraft:entity"].components["minecraft:damage_sensor"].triggers = [].push({
            "cause": "all",
            "deals_damage": false
        });
    }

    //Add Vanilla Component
    addComponent(component) {
        this.baseFile["minecraft:entity"].components[component.name] = component.data;
    }

    //Add Vanilla Component Group
    addComponentGroup(component_group, data) {
        this.baseFile["minecraft:entity"].component_groups[component_group] = data;
    }

    //Add Vanilla Event
    addEvent(event, data) {
        this.baseFile["minecraft:entity"].events[event] = data;
    }

    //Add a template...
    joinTemplate(TemplateObj){
        //Join the template to the baseFile...
        this.baseFile["minecraft:entity"].components = {
            ...this.baseFile["minecraft:entity"].components,
            ...TemplateObj
        }
    }

    //Event Listener...
    /**
     * @param {string} event
     * @param {function} callback
     * @returns {void}
     */
    on( event, callback = ( ev ) => {}) {

        let ev;

        if( event == "spawn" ){
            ev = {
                identifier: this.identifier,
                explode: (power) => {
                    let eventId = "moon:explosion";
                    this.addComponentGroup(eventId,{
                        "minecraft:explode": {
                            "breaks_blocks": true,
                            "causes_fire": false,
                            "destroy_affected_by_griefing": false,
                            "fire_affected_by_griefing": false,
                            "fuse_lit": true,
                            "max_resistance": 0,
                            "power": power
                        }
                    }),
                    this.baseFile["minecraft:entity"].events[this.event_listeners[event]] = {
                        add: {
                            component_groups: [
                                eventId
                            ]
                        }
                    }
                },
                say: (msg) => {}
            }
        }else if( event == "stepBlock" ){

        }

        callback(ev);
    }

    repeat(callback = ( entity ) => {}, ms ) {
        let entity = {
            say: (msg) => {}
        }
        callback(entity);
    }

    /*

        ==> 

    */
}

module.exports = Entity;