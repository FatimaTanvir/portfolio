import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Designs from './pages/Designs'
import CookarooCase from './pages/CookarooCase'
import Creatives from './pages/Creatives'
import Page404 from './pages/Error'
import CircleCursor from './components/CircleCursor'

const DESIGN_BRANDS = {
  '/designs/cookaroo': '#D2551E',
}

function CursorManager() {
  const { pathname } = useLocation()
  const brandColor = DESIGN_BRANDS[pathname]

  return (
    <CircleCursor
      dotColor={brandColor || 'black'}
      ringColor={brandColor || 'black'}
    />
  )
}

function App() {
  return (
    <BrowserRouter>
      <CursorManager />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/designs/cookaroo" element={<CookarooCase />} />
        <Route path="/creatives" element={<Creatives />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
