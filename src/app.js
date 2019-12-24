const express = require('express'),
    app = express(),
    bP = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    { mongoUri } = require('./config/db.config')

app.use(bP.json())
app.use(cors())

// MongoDB database connection
mongoose.connect(mongoUri, {
    useNewUrlParser: true
}).then(() => {
    console.log(`Database connected successfuly: ${mongoUri}`)
}).catch(err => {
    console.log(`Unable to connect to the database: ${err}`)
})

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server running on 127.0.0.1:${process.env.PORT || 8000}`)
})