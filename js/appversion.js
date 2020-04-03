const fs = require("fs");
const VERSION_FILE = "VERSION.TXT";

class AppVersion {

    init(){
        this.version = this.getVersion();
    }
    getVersion=  () => {
        return this.getVersionFromFile(VERSION_FILE);
    }

    getVersionFromFile = (filename) => {
        const path = process.cwd() + "/" + filename;
        let version = "";
        try {
            version = fs.readFileSync(path, 'utf8').toString().trim();
        } catch (e) {
        }
        return version;
    }
}

const appversion = new AppVersion();
appversion.init();
module.exports = appversion;


