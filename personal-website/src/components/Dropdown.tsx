import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto flex items-center">
      <div className="group relative cursor-pointer">
        <div className="flex items-center justify-center justify-between space-x-5 bg-white px-4">
          <a
            className="menu-hover my-2 py-2 px-12 text-base font-medium text-black lg:mx-4 flex items-center justify-center"
            
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
          </a>
        </div>

        <div className="invisible absolute z-999 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
          <Link to="/" className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 text-sm">
            Home
          </Link>
          <Link to="/about" className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 text-sm">
            About
          </Link>
          <Link to="/projects" className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 text-sm">
            Projects
          </Link>
          <Link to="/resume" className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 text-sm">
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
