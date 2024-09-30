

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import Dropdown from './Dropdown';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black z-999 fixed top-0 left-0 right-0 flex justify-center px-15 py-5 text-white items-center">
      <div className="z-999 flex space-x-4 md:hidden">
        <Dropdown />
      </div>
      <div className={"flex space-x-4 hidden md:flex"}>
        <Link to="/" className="text-white text-2xl">Home</Link>
        <Link to="/about" className="text-white text-2xl">About</Link>
        <Link to="/projects" className="text-white text-2xl">Projects</Link>
        <Link to="/resume" className="text-white text-2xl">Resume</Link>
      </div>
      <div className="fixed top-0 right-0 p-5">
        <SocialIcons />
      </div>
    </div>
  );
}

export default Navbar;