import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import Home from './Home/Home';
import Project from './Project/Project';
import Nav from './components/Nav';
import './components/styles.css'
import About from './About/About';
import Contact from './Contact/Contact';
import Skills from './Skills/Skills';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
