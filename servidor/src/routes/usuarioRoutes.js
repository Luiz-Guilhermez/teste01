const express = require('express')

const {
    cadastrarUsuario,
    fazerLogin
} = require('../controllers/UsuarioController')

const router = express.Router()

router.post('/cadastro', cadastrarUsuario)

router.post('/login', fazerLogin)

module.exports = router