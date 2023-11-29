import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import OpeningHours from './pages/opening_hours/OpeningHours'
import Gallery from './pages/gallery/Gallery'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/opening_hours' element={<OpeningHours />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
