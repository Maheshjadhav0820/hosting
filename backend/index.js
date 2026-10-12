const express = require("express")
require("dotenv").config({ path: "./.env" })
const mongoose = require("mongoose")
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors({
    origin: process.env.NODE_ENV === "development"
        ? process.env.LOCAL_URL
        : process.env.LIVE_URL
}))

app.use("/blog", require("./routes/blog.routes"))

mongoose.connect(process.env.DATABASE_URL)
mongoose.connection.once('open', () => {
    console.log("database connected")
    app.listen(process.env.PORT, () => {
        console.log(`server running on http://localhost:${process.env.PORT}`)
    })
})

module.exports = app


