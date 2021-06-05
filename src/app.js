const express = require("express")
const cors = require("cors")
const db = require("./data/database")
const index = require("./routes/index")
const stores = require("./routes/stores.routes")

const app = express()
db.connect()

app.use(express.json())
app.use(cors())


app.use('/', index)
app.use('/stores', stores)

module.exports = app