const os = require('os');

class ConfigurationImpl{
    contructor(){

    }

    init(){
        this.pid = process.pid;
        this.hostname = os.hostname();
    }
}
module.exports = ConfigurationImpl;