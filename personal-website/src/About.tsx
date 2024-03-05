import React from 'react'
import Headshot from './Headshot'

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
                Hello! my name is Emmet Hamell. I'm currently a student at UMass Amherst studying Computer Science with a Minor in Economics.
                I love building software and I'm most interested in AI, design patterns, and program correctness. 
            </p>
            </div>  
        </div>
    )

}
export default About