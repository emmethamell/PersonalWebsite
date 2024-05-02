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
    return (
        <div
        className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row">
            <LazyLoadImage
            alt="project image"
            src={imageUrl}
            effect="blur"
            className="hover:opacity-90 transition duration-200 ease-in-out h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg "
          />

          {/*
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={imageUrl}
          alt="" />
          */}
        <div className="flex flex-col justify-start p-6">
          <h5
            className="mb-2 text-xl font-medium text-neutral-800">
            {title}
          </h5>
          <p className="mb-4 text-base text-neutral-600">
            {description}
          </p>
          <p className="text-xs text-neutral-500">
            {subDescription}
          </p>
        </div>
      </div>

    );



    
  return (
    <div className="m-4">
      <div className="overflow-hidden shadow-lg rounded-lg h-130 w-60 md:w-80 cursor-pointer m-auto">
        <a href="#">
          <img alt="project image" src={imageUrl} className="hover:opacity-90 transition duration-200 ease-in-out"/>
        </a>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-700 text-base">{description}</p>
          <div className="flex items-center mt-4">
            <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 mr-4 hover:bg-gray-700 transition duration-200 ease-in-out">
                <h4>Github</h4>
            </a>
            <a href={websiteUrl} target="_blank" rel="noreferrer" className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 mr-4 hover:bg-gray-700 transition duration-200 ease-in-out">
              <h4>Website</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;