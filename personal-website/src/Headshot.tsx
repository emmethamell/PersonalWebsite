import React from 'react'
import image from './assets/headshot.png'

const Headshot: React.FC = () => {
    return (
        <img className="rounded-full w-40 h-40" src={image} />
    )
}

export default Headshot