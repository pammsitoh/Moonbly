const { Entity, Build, Component, Templates, Item } = require("./src/Moonbly");

const Example = new Entity("example:example", "1.19.2");

Example.isSpawnable(false);
Example.isSummonable(false);
Example.joinTemplate(Templates.basicAI);
Example.joinTemplate(Templates.likeNpc);
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