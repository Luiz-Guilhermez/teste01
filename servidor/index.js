const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const conectarBanco = require('./config/database')
const usuarioRoutes = require('./routes/usuarioRoutes')
dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

conectarBanco()

app.use('/usuarios', usuarioRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})