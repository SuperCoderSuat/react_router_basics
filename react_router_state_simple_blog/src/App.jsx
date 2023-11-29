import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import Details from './pages/details/Details'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
