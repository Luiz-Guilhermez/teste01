import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    async function fazerLogin(e) {
        e.preventDefault()

        if (!email || !senha) {
            alert('Preencha todos os campos.')
            return
        }

        try {
            const resposta = await axios.post(
                'http://localhost:3000/usuarios/login',
                {
                    email,
                    senha
                }
            )
            console.log(resposta.data)

            alert('Login realizado com sucesso!')

            navigate('/feed')
        } catch (erro) {
            console.error(erro)

            alert(
                erro.response?.data?.mensagem ||
                'Erro ao realizar login.'
            )
        }
    }

    return (
        <main className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-6">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <Link to="/">
                        <h1 className="text-3xl font-bold text-black">
                            Integra<span className="text-[#a10b00]">+</span>
                        </h1>
                    </Link>

                    <p className="mt-2 text-gray-500">
                        Entre na sua conta
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Bem-vindo de volta!
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Entre para continuar no Integra+.
                    </p>

                    <form
                        onSubmit={fazerLogin}
                        className="mt-8 space-y-5"
                    >
                        <div>
                            <label className="block mb-2 text-sm font-semibold text-gray-700">
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
                            <label className="block mb-2 text-sm font-semibold text-gray-700">
                                Senha
                            </label>

                            <input
                                type="password"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#a10b00]"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="text-sm font-semibold text-[#a10b00] hover:underline"
                            >
                                Esqueci minha senha
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-[#a10b00] py-3.5 font-bold text-white transition hover:bg-[#850900]"
                        >
                            Entrar
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        Ainda não possui uma conta?{' '}

                        <Link
                            to="/cadastro"
                            className="font-bold text-[#a10b00] hover:underline"
                        >
                            Cadastre-se
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

export default Login