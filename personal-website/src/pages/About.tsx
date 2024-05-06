import React from "react";
import Headshot from "../components/Headshot";
import { Link } from "react-router-dom";

const About: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <div>
                <h1 className="font-serif">
                    About Me
                </h1>
            </div>
            <div className="py-10">
                <Headshot />
            </div>
            <div>
            <p className="text-xl max-w-md mx-auto font-serif">
                Hi, I'm Emmet! I'm a computer science undergraduate student at UMass Amherst. I'm passionate about computer science and software engineering.
                You can learn more about my experience on my <Link to="/resume">resume</Link>, or check out some of my <Link to="/projects">projects</Link>.
                Please feel free to reach out to me at <a href="mailto:emmethamell@yahoo.com">emmethamell@yahoo.com</a> if you have any questions or would like to chat!
            </p>
            </div>  
        </div>
    )

}
export default About