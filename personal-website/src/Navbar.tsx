import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Navbar: React.FC = () => {
    return (
      <div className="flex space-x-4">
        <Link to="/home" className="text-white text-2xl">Home</Link>
        <Link to="/about" className="text-white text-2xl">About</Link>
        <Link to="/projects" className="text-white text-2xl">Projects</Link>
        <Link to="/resume" className="text-white text-2xl">Resume</Link>
        <Link to="/snake" className="text-white text-2xl">Game</Link>
      </div>
    );
}



export default Navbar;