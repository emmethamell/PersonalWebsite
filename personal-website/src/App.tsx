import './App.css'
//import Dropdown from './Dropdown'
import SocialIcons from './SocialIcons'
import Navbar from './Navbar'
import About from './About'; 
import Projects from './Projects';
import Resume from './Resume';
import Home from './Home'
import Snake from './Snake'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="fixed top-0 left-0 right-0 flex justify-center px-15 py-5 text-white items-center">
        <div className="text-xl font-serif">
          <Navbar />
        </div>
          <div className="fixed top-0 right-0 p-5">
            <SocialIcons />
          </div>
      </div>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/snake" element={<Snake />} />
      </Routes>
    </Router>
  );
}

export default App
