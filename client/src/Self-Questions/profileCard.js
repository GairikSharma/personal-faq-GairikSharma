import React from 'react'
import './FAQ.css'
import img from './unnamed.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <div className="img">
                <div className="img-text">
                    &rdquo;
                </div>
                <img src={img} alt="" />
            </div>
            <div className="txt">
                <h2>FAQ</h2>
                <h3>Sayan Ghosh</h3>
                <h4>Full Stack developer</h4>
            </div>
            <div className="profile-icons">
                <a href="https://www.linkedin.com/in/sayan-ghosh-00b7b2220" target={"_new"}>
                    <FontAwesomeIcon icon = {faLinkedin}/>
                </a>
                <a href="https://github.com/neme-sis" target={"_new"}>
                    <FontAwesomeIcon icon = {faGithub}/>
                </a>
            </div>
        </div>
    )
}

export default ProfileCard;