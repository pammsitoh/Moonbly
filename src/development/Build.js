const colors = require('colors');
const fs = require('fs');
const path = require('path');

/**
* @param {array} build_data
*/

const Build = (build_data) => {

    let BaseDir = `/exports/${build_data.manifest.name} - BP`;

    if (!fs.existsSync(__dirname + BaseDir)){
        fs.mkdirSync(path.join(__dirname, '..', '..', BaseDir));
    }

    fs.mkdirSync(path.join(__dirname, '..', '..', BaseDir, 'entities'));

    build_data.elements.forEach((element) => {

        let _type = element.typeFile;

        if(_type == "entity"){
            //Create entity file...
            let FilePath = path.join(__dirname, '..', '..', BaseDir, 'entities',`${element.identifier.replace(":","-")}.json`);
            fs.writeFileSync(FilePath, JSON.stringify(element.baseFile, null, 4));
        }

        console.log("[√]".green + ` Elemento con id: "${element.identifier}" de tipo "${element.typeFile} %% Creado!"\n`.magenta);

    })

    //console.log("[√]".green + ` Elemento con id: "${element.identifier}" de tipo "${element.typeFile} %% Creado!"\n\n`.green);

}

module.exports = Build;