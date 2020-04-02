const express = require('express')
const env = require('./js/env')
const app = express()

const APP_DEFAULTS = {
    port: 4000
}

const settings = {...APP_DEFAULTS, ...env.settings};

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(settings.port, () => console.log(`Example app listening on port ${settings.port}!`))



