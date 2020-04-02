/*
* Environment variables
* */
const ENV_VARIABLES = {
    "APP_PORT": "APP_PORT"
}

class Env {

    constructor(){
        this.settings = {};
    }

    init(){
        if(ENV_VARIABLES.APP_PORT in process.env) {
            this.settings.port = process.env[ENV_VARIABLES.APP_PORT];
        }
    }
}

const instance = new Env();
instance.init();

module.exports = instance;


