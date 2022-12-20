const express = require("express")




const server = express()
const env = require('dotenv')
env.config()
server.use(express.json())

const PORT = process.env.PORT || 3002
server.listen(PORT, () => {
    console.log("I'm listening on port", PORT)
})