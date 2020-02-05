const express = require('express')
const app = express()

// added line for heroku redirect to https
const sslRedirect = require('heroku-ssl-redirect')
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
// added this line below for deployment
const path = require('path')
// const expressJwt = require('express-jwt')
const { mongoURI, options } = require("./utils/app.js")
const PORT = process.env.PORT || 6350

app.use(sslRedirect())
app.use(express.json())
app.use(morgan('dev'))
// added this line below for deployment
app.use(express.static(path.join(__dirname, "client", "build")))

const conn = mongoose.connect(process.env.MONGODB_URI || mongoURI, options)
conn.then(() => console.log('[o] Connected to the DB'), (err) => console.log(err))

// client create contact message
app.use('/contactMessage', require('./routes/contactMessageRoutes.js'))

app.use('/portfolioAccess',require('./routes/portfolioRoutes.js'))

app.use((err, req, res, next) => {
    console.log('Caught Error')
    console.log(err)
    if (err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})
// added this line below for deployment
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html") )
})

app.listen(PORT, () => {
    console.log(`[+] Server is running on PORT ${PORT}`)
})