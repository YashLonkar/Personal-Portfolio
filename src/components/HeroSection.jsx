import React from 'react'
import "../styles/HeroSection.css";
import profileImage from "../assets/profile-pic.png"

const HeroSection = () => {
    return (
        <div className='container'>
            <div className='InfoContainer'>
                <div className="profile-container">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                </div>
                <div className='MySelf'>
                    <div className='Name'>Yash Lonkar</div>
                    <div className='Pos'>Front End Dev</div>
                </div>
            </div>
            <div className='Bio'>
                    <p>
                        CS '25 | Passionate Full Stack Developer | Web Developer | React JS | AWS AI/ML Enthusiast | Building Projects with Purpose🚀
                    </p>
            </div>
        </div>
    )
}

export default HeroSection
