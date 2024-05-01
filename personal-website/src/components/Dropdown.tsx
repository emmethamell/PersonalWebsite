import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';

const Dropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
        </button>
        <div className={`flex flex-col space-y-4 ${isOpen ? '' : 'hidden'}`}>
          <Link to="/" className="text-white text-2xl">Home</Link>
          <Link to="/about" className="text-white text-2xl">About</Link>
          <Link to="/projects" className="text-white text-2xl">Projects</Link>
          <Link to="/resume" className="text-white text-2xl">Resume</Link>
          <Link to="/snake" className="text-white text-2xl">Game</Link>
        </div>
      </div>
    )
}

export default Dropdown;



