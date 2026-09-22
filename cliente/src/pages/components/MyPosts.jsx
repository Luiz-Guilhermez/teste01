// function MyPosts(){
//     return(
//         <>  
//             <div>
//                 <h2>Minhas Postagens</h2>
//                 <p>Veja o que você compartilhou.</p>
//                 <div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default MyPosts

function MyPosts() {

    return (
        <div className="mx-auto max-w-3xl">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                    Minhas postagens
                </h1>

                <p className="mt-1 text-gray-500">
                    Veja o que você compartilhou.
                </p>
            </div>

            <div className="rounded-2xl bg-white px-6 py-12 text-center shadow-sm">
                <h2 className="mt-4 font-bold text-gray-800">
                    Você ainda não publicou nada
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Suas postagens aparecerão aqui quando você publicar.
                </p>
            </div>
        </div>
    )
}

export default MyPosts