const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const path = require('path')
const cors = require("cors")

const app = express()
const port = 3000

// setup the ability to see into response bodies
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// setup the express assets path
app.use('/', express.static(path.join(__dirname, '../client')))

// API calls ------------------------------------------------------------------------------------
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/home.html'));
})

app.get('/race', async (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/race.html'));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
