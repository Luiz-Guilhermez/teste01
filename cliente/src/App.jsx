import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Feed from './pages/feed/Feed'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import './App.css'

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App