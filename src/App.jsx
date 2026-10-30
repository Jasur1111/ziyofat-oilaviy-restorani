import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import './App.css'
import Header from './companents/Header';
import Home from './pages/Home';
import About from './pages/About';
import Yevropa from './pages/Yevropa';
import National from './pages/National';
import Salads from './pages/Salads';
import Drinks from './pages/Drinks';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/europa' element={<Yevropa />} />
          <Route path='/national' element={<National />} />
          <Route path='/salads' element={<Salads />} />
          <Route path='/drinks' element={<Drinks />} />
          <Route path='/more' element={<Yevropa />} />
          <Route path='/nat' element={<National />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
