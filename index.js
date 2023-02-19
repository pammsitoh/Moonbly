const { Entity, Build, Component } = require("./src/Moonbly");

const Example = new Entity("example:example", "1.19.2");

Example.addComponent(Component.instant_despawn);
Example.addComponent(Component.physics);
Example.on("spawn", ent => {
    ent.explode(3);
},1000);

//Build Section...
Build({
    elements: [
        Example
    ],
    manifest:{
        name: "Addon Epico",
        description: "An example addon",
        version: "1.0.0"
    },
    onlyServer: true
});

console.log(JSON.stringify(Example.baseFile, null, 4));