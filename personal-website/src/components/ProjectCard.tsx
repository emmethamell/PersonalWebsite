import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ProjectCardProps {
  title: string;
  description: string;
  subDescription: string;
  imageUrl: string;
  githubUrl: string;
  websiteUrl: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, subDescription, imageUrl, githubUrl, websiteUrl, index }) => {

  return (
    <div className={`grid grid-cols-2 gap-4 m-4 ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2 md:grid-flow-col-dense'}`}>
    <div className={`font-serif p-6 ${index % 2 === 0 ? '' : 'order-last'}`}>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 text-base">{description}</p>
      <div className="flex items-center justify-center mt-4">
        <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-block bg-custom-blue text-white rounded-full px-3 py-1 mr-4 custom-hover">
          <h4>Github Repository</h4>
        </a>
        <a href={websiteUrl} target="_blank" rel="noreferrer" className="inline-block bg-black text-white rounded-full px-3 py-1 mr-4">
          <h4>Website</h4>
        </a>
      </div>
    </div>
    <div>
      <img alt="project image" src={imageUrl} className="w-full h-full object-cover"/>
    </div>
  </div>

  );
};

export default ProjectCard;