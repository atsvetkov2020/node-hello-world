const express = require('express');
const moment = require('moment');
const env = require('./js/env');
const appversion = require('./js/appversion');
const configuration = require('./js/configuration');

const app = express();

const appStartTime = moment();

const APP_DEFAULTS = {
    port: 4000
}
console.log('Application start time:' + appStartTime.format('YYYY-MM-DDTHH:mm:ss.SSS'));
const settings = {...APP_DEFAULTS, ...env.settings};

app.get('/', (req, res) => res.send('Hello World! ' + appversion.version))

app.get('/info', function (req, res) {
    res.json({
        "version": appversion.version,
        "pid": configuration.pid,
        "hostname": configuration.hostname,
        "started": appStartTime
    });
});


app.listen(settings.port, () => console.log(`Example app listening on port ${settings.port}!`))



