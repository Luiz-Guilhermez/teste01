// function Posts(){
//     return(
//         <>
//             <div>
//                 <h2>Feed</h2>
//                 <p>Veja o que está sendo compartilhado pela comunidade.</p>
//                 <div>
//                     <input type="text" placeholder='Compartilhe uma ideia, dúvida ou projeto...'/>
//                     <button>Enviar</button>
//                 </div>
//                 <div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default Posts

function Posts() {

    return (
        <div className="mx-auto max-w-3xl">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                    Feed
                </h1>

                <p className="mt-1 text-gray-500">
                    Veja o que está sendo compartilhado pela comunidade.
                </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#a10b00] font-bold text-white">
                        U
                    </div>

                    <div className="flex-1">
                        <textarea
                            placeholder="Compartilhe uma ideia, dúvida ou projeto..."
                            className="min-h-[90px] w-full resize-none rounded-xl border border-gray-200 p-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#a10b00]"
                        />

                        <div className="mt-3 flex justify-end">
                            <button className="rounded-full bg-[#a10b00] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#850900]">
                                Publicar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-white px-6 py-12 text-center shadow-sm">
                    <h2 className="mt-4 font-bold text-gray-800">
                        Ainda não há postagens
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Seja o primeiro a compartilhar alguma coisa com a comunidade.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Posts