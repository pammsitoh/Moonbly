const Templates = {
    //Basic AI like Movement, LookAround, Random Stroll...
    basicAI: {
        "minecraft:physics": {},
        "minecraft:movement": {
            "value": 0.3
        },
        "minecraft:movement.basic": {
            "max_turn": 30
        },
        "minecraft:navigation.walk": {},
        "minecraft:behavior.random_stroll": {
            "interval": 120,
            "xz_dist": 10,
            "y_dist": 7
        },
        "minecraft:behavior.random_look_around": {
            "look_distance": 0
        },
        "minecraft:behavior.look_at_player": {
            "angle_of_view_vertical": 360,
            "angle_of_view_horizontal": 360,
            "look_distance": 8,
            "probability": 0.02,
            "look_time": [],
            "target_distance": 6
        }
    },

    //Zombie Behaviour...
    likeZombie:{
        
    },

    //Basic Npc Behaviour...
    likeNpc:{
        "minecraft:physics": {},
        "minecraft:npc": {
            "npc_data": {}
        },
        "minecraft:behavior.look_at_player": {
            "angle_of_view_vertical": 360,
            "angle_of_view_horizontal": 360,
            "look_distance": 8,
            "probability": 0.02,
            "look_time": [],
            "target_distance": 6
        }
    },

    //Just the movement basics...
    movementBasic:{}
}

module.exports = Templates;