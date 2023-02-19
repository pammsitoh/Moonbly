const colors = require('colors');

/**
* @param {array} build_data
*/

const Build = (build_data) => {

    build_data.elements.forEach((element) => {
        
        let _type = element.typeFile;

        if(_type == "entity"){
            
        }

        console.log("[√]".green + ` Elemento con id: "${element.identifier}" de tipo "${element.typeFile} %% Creado!"\n`.magenta);

    })

    //console.log("[√]".green + ` Elemento con id: "${element.identifier}" de tipo "${element.typeFile} %% Creado!"\n\n`.green);

}

module.exports = Build;