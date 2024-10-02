import React from "react";
import ProjectCard from "../components/ProjectCard";
//import LunchLinkMockup from "../../public/LunchLink_Mockup.png";
import LunchLinkMockups from "../../public/LunchLink_Mockups.png";
import DentalRankPhoto from "../../public/DentalRank.png";
import StudySpacePhoto from "../../public/StudySpace.png";
//import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


//TODO: Create demo videos all of the same dimensions to put in for the "imageUrl"
const Projects: React.FC = () => {

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 gap-4">
      <ProjectCard
        title="LunchLink"
       //button1=
        button2="Github Repository"
        description="LunchLink is a native iOS app I built written mostly in Swift, using SwiftUI as the frontend framework. On the backend I use Firebase as well as Node.js and Express. The goal of the app is to let your friends know when you are free and looking to do something, essentially a bat signal to let your friends know you are free and looking to do something, whether it be to get lunch, grab a coffee, see a movie, and more!"
        subDescription="made with swift, node, swiftUI"
        imageUrl={LunchLinkMockups}
        githubUrl="https://github.com/emmethamell/LunchLink"
        websiteUrl=""
        index={0}
      />
        <ProjectCard
        title="dentalrank.us"
        button1="Website"
        button2="Github Repository"
        description="DentalRank is a web-app aimed at helping prospective dental students easily compare and rank dental schools based on criteria important to them rather than arbitrary standards seen with many other sites. The front-end is built with React and the back-end was built using Node.js, Express, and MongoDB"
        subDescription="made with swift, node, swiftUI"
        imageUrl={DentalRankPhoto}
        githubUrl="https://github.com/emmethamell/DentalRank"
        websiteUrl="https://www.dentalrank.us/"
        index={1}
      />
        <ProjectCard
        title="Study Room Finder"
        button1="Try API"
        button2="Github Repository"
        description="StudySpace is an app I worked on with a team of 8 with the goal of helping UMass students find places to study. My role involved building a server for the front-end to query regarding room availabilities. Server was built with Node.js and Express, with mongoDB as the database. Data parsing was done with regular expressions and Javasript xlsx library. "
        subDescription="made with swift, node, swiftUI"
        imageUrl={StudySpacePhoto}
        githubUrl="https://github.com/emmethamell/BlockMap"
        websiteUrl="https://blockmap-playground.netlify.app/"
        index={2}
      />
      <ProjectCard
        title="Kapok"
        description="Kapok is the most recent project I have been working on with a team of 8. We are building the app for the National Center of Technology and Dispute Resolution to serve as a disaster response app."
        subDescription="made with swift, node, swiftUI"
        imageUrl="https://via.placeholder.com/320x150" 
        githubUrl="https://github.com/ewu2023/BUILD-Kapok"
        websiteUrl=""
        index={3}
      />
      </div>
    </div>
  );
};
export default Projects;
