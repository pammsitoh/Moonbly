const { v4 } = require("uuid");

class Entity {
    constructor(id, format_version){
        this.identifier = id;
        this.format_version = format_version;
        this.is_spawnable = true;
        this.is_summonable = true;
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
                    "is_spawnable": this.is_spawnable,
                    "is_summonable": this.is_summonable
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
        this.is_spawnable = option;
    }

    isSummonable(option) {
        this.is_spawnable = option;
    }

    //Basic Properties...
    setProperties(properties) {
        this.properties = properties;
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

    //Event Listener...
    on( event, callback = ( ev ) => {}) {

        let ev = {
            identifier: this.identifier,
            runCommand: (cmd) => {
                let eventId = v4();
                this.addEvent(eventId, {
                    add: {
                        component_groups:[
                            eventId
                        ]
                    }
                });
                this.addComponentGroup(eventId,{
                    
                })
                this.cmd_runners.push(eventId);
            },
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
        };
        
        if( event == "spawn" ){
            
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