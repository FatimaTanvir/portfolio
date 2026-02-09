import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CircleCursor from './components/CircleCursor'
import Landing from './pages/Landing'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Leadership from './pages/Leadership'
import Creatives from './pages/Creatives'

function App() {
  return (
    <BrowserRouter>
      <CircleCursor />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/creatives" element={<Creatives />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App