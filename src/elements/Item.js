class Item{
    constructor(identifier, format_version){
        this.identifier = identifier;
        this.format_version = format_version;
        this.typeFile = "item";

        this.baseFile = {}
    }

    //Item Name
    setName(name){

    }
    
    //Item Duration...
    setDuration(duration){
        
    }

    on(event, callback = (instance) => {}){
        let instance = {
            runCommand: () => {
                
            },
            Player: {
                say: () => {
                    
                }
            }
        }
        //Code...
        

        callback(instance);
    }
}

module.exports = Item;