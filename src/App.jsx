import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Designs from './pages/Designs'
import Creatives from './pages/Creatives'
import Page404 from './pages/Error'
import CircleCursor from './components/CircleCursor'

function App() {
  return (
    <BrowserRouter>
        <CircleCursor />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/creatives" element={<Creatives />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App