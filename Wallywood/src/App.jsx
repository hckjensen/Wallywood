import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'

import HomePage from './Pages/HomePage/HomePage'
import AboutPage from './Pages/AboutPage/AboutPage'
import ProductPage from './Pages/ProductPage/ProductPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import LoginPage from './Pages/LoginPage/LoginPage'



function App() {



  return (
    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plakater" element={<ProductPage />} />
        <Route path="/om-os" element={<AboutPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />



      </Routes>
    </Router>
  )
}

export default App
