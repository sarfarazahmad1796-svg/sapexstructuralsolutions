import { Routes, Route } from 'react-router';

import MainLayout from './layouts/MainLayout/MainLayout';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Sectors from './pages/Sectors/Sectors';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;