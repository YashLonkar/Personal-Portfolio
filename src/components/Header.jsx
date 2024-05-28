import React from 'react'
import "../styles/Header.css"
import instagramIcon from "../assets/instagram.png"
import linkedinIcon from "../assets/linkedin.svg"
import twitterIcon from "../assets/logo-x-twitter.png"
import githubIcon from "../assets/github.png"
const Header = () => {
    return (
        <div className='Header'>
            <div className='Nav'>
                <ul className='H1'>
                    <li>Home</li>
                    <li>Work</li>
                    <li>About</li>
                    <li>Projects</li>
                </ul>
                <ul className='H2'>
                    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="Twitter" style={{ width: '24px', height: '24px' }} />
                    </a></li>
                    <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
                    </a></li>
                    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter" style={{ width: '24px', height: '24px' }} />
                    </a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" style={{ width: '24px', height: '24px' }} />
                    </a></li>



                </ul>
            </div>
        </div>
    )
}

export default Header
