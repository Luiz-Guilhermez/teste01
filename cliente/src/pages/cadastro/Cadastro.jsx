import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Cadastro() {
    const [nome, setNome] = useState('')
    const [rm, setRm] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const navigate = useNavigate()

    async function fazerCadastro(e) {
        e.preventDefault()
        
        if (!nome || !rm || !email || !senha || !confirmarSenha) {
            alert('Preencha todos os campos.')
            return
        }

        if (senha !== confirmarSenha) {
            alert('As senhas não são iguais.')
            return
        }

        try {
            const resposta = await axios.post(
                'http://localhost:3000/usuarios/cadastro',
                {
                    nome,
                    rm,
                    email,
                    senha
                }
            )
            console.log(resposta.data)

            alert('Cadastro realizado com sucesso!')

            navigate('/login')
        } catch (erro) {
            console.error(erro)

            alert(
                erro.response?.data?.mensagem ||
                'Erro ao realizar cadastro.'
            )
        }
    }

    return (
        <main className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-6 py-10">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <Link to="/">
                        <h1 className="text-3xl font-bold text-black">
                            Integra<span className="text-[#a10b00]">+</span>
                        </h1>
                    </Link>

                    <p className="mt-2 text-gray-500">
                        Crie sua conta no Integra+
                    </p>
                </div>

                <div className="rounded-3xl bg-white p-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Criar conta
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Preencha seus dados para começar.
                    </p>

                    <form
                        onSubmit={fazerCadastro}
                        className="mt-8 space-y-5"
                    >
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Nome completo
                            </label>

                            <input
                                type="text"
                                placeholder="Digite seu nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#a10b00]"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                RM
                            </label>

                            <input
                                type="text"
                                placeholder="Digite seu RM"
                                value={rm}
                                onChange={(e) => setRm(e.target.value)}
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#a10b00]"
                            />

                            <p className="mt-2 text-xs text-gray-400">
                                Seu RM será utilizado para verificar seu vínculo com o SENAI.
                            </p>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                E-mail
                            </label>

                            <input
                                type="email"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#a10b00]"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Senha
                            </label>

                            <input
                                type="password"
                                placeholder="Crie uma senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#a10b00]"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Confirmar senha
                            </label>

                            <input
                                type="password"
                                placeholder="Digite a senha novamente"
                                value={confirmarSenha}
                                onChange={(e) => setConfirmarSenha(e.target.value)}
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#a10b00]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-[#a10b00] py-3.5 font-bold text-white transition hover:bg-[#850900]"
                        >
                            Criar conta
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        Já possui uma conta?{' '}

                        <Link
                            to="/login"
                            className="font-bold text-[#a10b00] hover:underline"
                        >
                            Entrar
                        </Link>
                    </p>
                </div>

                <div className="mt-6 text-center">
                    <Link
                        to="/"
                        className="text-sm text-gray-500 hover:text-[#a10b00]"
                    >
                        ← Voltar para o início
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Cadastro