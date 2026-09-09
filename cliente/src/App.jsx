import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/home/Home'
import Feed from './pages/feed/Feed'
import './App.css'

function App() {
  return (
    
    <BrowserRouter>
      <div className='flex gap-20 bg-gray-200 p-6 px-10'>
          <Link to="/"><h2 className="text-black font-bold text-2xl">Integra<span className="text-red-400 font-bold text-2xl">+</span></h2></Link>
          <Link to="/feed"><h2 className='text-xl'>Feed</h2></Link>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/feed" element={<Feed/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App