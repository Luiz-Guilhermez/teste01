const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')

async function cadastrarUsuario(req, res) {
    try {
        const { nome, rm, email, senha } = req.body

        if (!nome || !rm || !email || !senha) {
            return res.status(400).json({
                mensagem: 'Preencha todos os campos.'
            })
        }

        const usuarioExistente = await Usuario.findOne({
            $or: [
                { rm: rm },
                { email: email }
            ]
        })

        if (usuarioExistente) {
            return res.status(400).json({
                mensagem: 'RM ou e-mail já cadastrado.'
            })
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10)
        const usuario = await Usuario.create({
            nome,
            rm,
            email,
            senha: senhaCriptografada
        })

        res.status(201).json({
            mensagem: 'Usuário cadastrado com sucesso.',
            usuario: {
                id: usuario._id,
                nome: usuario.nome,
                rm: usuario.rm,
                email: usuario.email
            }
        })
    } catch (erro) {
        console.error(erro)

        res.status(500).json({
            mensagem: 'Erro ao cadastrar usuário.'
        })
    }
}

async function fazerLogin(req, res) {
    try {
        const { email, senha } = req.body

        if (!email || !senha) {
            return res.status(400).json({
                mensagem: 'Preencha o e-mail e a senha.'
            })
        }

        const usuario = await Usuario.findOne({ email })

        if (!usuario) {
            return res.status(401).json({
                mensagem: 'E-mail ou senha incorretos.'
            })
        }

        const senhaCorreta = await bcrypt.compare(
            senha,
            usuario.senha
        )

        if (!senhaCorreta) {
            return res.status(401).json({
                mensagem: 'E-mail ou senha incorretos.'
            })
        }

        res.status(200).json({
            mensagem: 'Login realizado com sucesso.',
            usuario: {
                id: usuario._id,
                nome: usuario.nome,
                rm: usuario.rm,
                email: usuario.email
            }
        })
    } catch (erro) {
        console.error(erro)

        res.status(500).json({
            mensagem: 'Erro ao realizar login.'
        })
    }
}

module.exports = {
    cadastrarUsuario,
    fazerLogin
}