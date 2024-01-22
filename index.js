require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    }),
)
app.use(express.json())

//rotas da api
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

//conexao com o BD
const DB_USER = process.env.DB_USER
const BD_PASSWORD = encodeURIComponent(process.env.BD_PASSWORD)

mongoose
    .connect(
    `mongodb+srv://${DB_USER}:${BD_PASSWORD}@cluster0.dso2afx.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
    .then(() =>{
        console.log('Conectamos ao mongodb')
        app.listen(3000)
    })
    .catch((err) => console.log(err))



