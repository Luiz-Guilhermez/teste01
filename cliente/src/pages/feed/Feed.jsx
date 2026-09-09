import { useState } from 'react'
import Posts from '../components/Posts'
import MyPosts from '../components/MyPosts'

function Feed() {
    const [divAtiva, setDivAtiva] = useState('feed');

    return(
        <>
            <div className='px-10 py-5'>
                <button 
                    onClick={() => setDivAtiva('feed')}
                    className='bg-slate-100 rounded-lg w-18'
                >
                    Feed
                </button>
                <button 
                    onClick={() => setDivAtiva('my-posts')}
                    className='bg-slate-100 rounded-lg w-40'
                >
                    Minhas Postagens
                </button>
            </div>

            {(divAtiva === 'feed') && (
                <Posts />
            )}

            {(divAtiva === 'my-posts') && (
                <MyPosts/>
            )}
        </>
    )
}

export default Feed