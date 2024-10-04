const express = require('express')
// import mysql from 'mysql2'
// import cors from 'cors'
// import bcrypt from 'bcrypt'

const app = express()
const port = 3000

app.use(express.json())

// app.use(cors())

app.get('/', (req, res) => {
    res.send('Bienvenido')
})

app.get('/users', (req, res) => {
    res.send([
        { email: 'useruno@mail.com', password: "123123123", coord: { lat: 4.67, lng: -74.05 }},
        { email: 'userdos@mail.com', password: "123123123", coord: { lat: 5.67, lng: -74.05 }},
        { email: 'usertres@mail.com', password: "123123123", coord: { lat: 6.67, lng: -74.05 }},
    ])
})

app.listen(port, () => {
    console.log('listening')
})