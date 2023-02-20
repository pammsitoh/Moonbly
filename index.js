const { Entity, Build, Component } = require("./src/Moonbly");
const Item = require("./src/elements/Item");

const Example = new Entity("example:example", "1.19.2");

Example.isSpawnable(false);
Example.isSummonable(false);
Example.addComponent(Component.instant_despawn);
Example.addComponent(Component.physics);
Example.addComponent(Component.health);
Example.on("spawn", ent => {
    ent.explode(3);
},1000);

const myItem = new Item("example:item","1.16.100");

myItem.on("spawn", ent => {
    ent.Player.say();
});

myItem.setName("Ejemplo");

//Build Section...
Build({
    elements: [
        Example,
        myItem
    ],
    manifest:{
        name: "Example",
        description: "An example addon",
        version: "1.0.0"
    },
    onlyServer: true
});

console.log(JSON.stringify(Example.baseFile, null, 4));