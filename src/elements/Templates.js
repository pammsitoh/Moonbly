const Templates = {
    //Basic AI like Movement, LookAround, Random Stroll...
    basicAI: {
        
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