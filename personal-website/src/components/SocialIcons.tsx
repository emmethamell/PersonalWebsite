import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://github.com/emmethamell" target="_blank" rel="noopener noreferrer">
        <FaGithub size={32} />
      </a>
      <a href="https://linkedin.com/in/emmethamell" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={32} />
      </a>
    </div>
  );
}

export default SocialIcons;