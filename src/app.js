const express = require('express'),
    app = express(),
    bP = require('body-parser'),
    cors = require('cors'),
    db = require('./database/MongoDb').connect(),
    morgan = require('morgan')

app.use(morgan('combined'))
app.use(bP.json())
app.use(cors())

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server running on 127.0.0.1:${process.env.PORT || 8000}`)
})