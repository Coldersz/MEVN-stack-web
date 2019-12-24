const mongoose = require('mongoose')
const { mongoUri } = require('../config/db.config')

module.exports.connect = () => {
    mongoose.connect(mongoUri, { useNewUrlParser: true })
    const db = mongoose.connection
    db.on("error", console.error.bind(console, "Error connecting to database"))
    db.once("open", () => {
        console.log(`Connected successfuly to MongoDB database : ${mongoUri}`)
    })
    return db
}