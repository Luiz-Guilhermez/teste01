// import { Link } from 'react-router-dom'

// function NavFeed() {
//     return (
//         <nav className="relative z-30 flex h-24 items-center justify-between bg-white px-10 lg:px-16">
//             <Link to="/">
//                 <h2 className="text-2xl font-bold text-black">
//                     Integra<span className="text-[#a10b00]">+</span>
//                 </h2>
//             </Link>

//             <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
//                 <Link
//                     to="/feed"
//                     className="text-lg text-black transition hover:text-[#a10b00]"
//                 >
//                     Feed
//                 </Link>

//                 <Link
//                     to="/minhas-postagens"
//                     className="text-lg text-black transition hover:text-[#a10b00]"
//                 >
//                     Minhas postagens
//                 </Link>

//                 <Link
//                     to="/perfil"
//                     className="text-lg text-black transition hover:text-[#a10b00]"
//                 >
//                     Perfil
//                 </Link>
//             </div>

//             <div className="flex items-center gap-6">
//                 <Link
//                     to="/perfil"
//                     className="font-bold text-[#a10b00]"
//                 >
//                     Meu perfil
//                 </Link>

//                 <button
//                     className="rounded-full bg-[#a10b00] px-7 py-3.5 font-bold text-white transition hover:bg-[#850900]"
//                 >
//                     Sair
//                 </button>
//             </div>
//         </nav>
//     )
// }

// export default NavFeed

import { Link } from 'react-router-dom'

function NavFeed() {
    return (
        <nav className="relative z-30 flex h-24 items-center justify-between bg-white px-10 lg:px-16">
            <Link to="/">
                <h2 className="text-2xl font-bold text-black">
                    Integra<span className="text-[#a10b00]">+</span>
                </h2>
            </Link>

            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
                <Link
                    to="/feed"
                    className="text-lg text-black transition hover:text-[#a10b00]"
                >
                    Feed
                </Link>

                <Link
                    to="/chat"
                    className="text-lg text-black transition hover:text-[#a10b00]"
                >
                    Chat
                </Link>
            </div>

            <div className="flex items-center gap-6">
                <Link
                    to="/perfil"
                    className="font-bold text-[#a10b00]"
                >
                    Meu perfil
                </Link>

                <button
                    className="rounded-full bg-[#a10b00] px-7 py-3.5 font-bold text-white transition hover:bg-[#850900]"
                >
                    Sair
                </button>
            </div>
        </nav>
    )
}

export default NavFeed