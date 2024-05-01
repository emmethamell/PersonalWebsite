import './App.css'
//import Dropdown from './Dropdown'
import SocialIcons from './components/SocialIcons'
import Navbar from './components/Navbar'
import About from './pages/About'; 
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Home from './pages/Home'
import Snake from './pages/Snake'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="fixed top-0 left-0 right-0 flex justify-center px-15 py-5 text-white items-center">
        <div className="text-xl font-serif">
          <Navbar />
        </div>
      </div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/snake" element={<Snake />} />
      </Routes>
    </Router>
  );
}

export default App
