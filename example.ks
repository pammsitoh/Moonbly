const { Entity, Build, Component } = require("./src/Moonbly");

const Example = new Entity("example:example", "1.19.2");

Example.isSpawnable(false);
Example.isSummonable(false);
Example.addComponent(Component.instant_despawn);
Example.addComponent(Component.physics);
Example.addComponent(Component.health);
Example.on("spawn", ent => {
    ent.explode(3);
},1000);

//Build Section...
Build({
    elements: [
        Example
    ],
    manifest:{
        name: "Example",
        description: "An example addon",
        version: "1.0.0"
    },
    onlyServer: true
});

console.log(JSON.stringify(Example.baseFile, null, 4));