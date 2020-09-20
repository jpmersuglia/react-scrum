import React from 'react';

import logo from '../public/images/logo.png';
import profilePicture from '../public/images/profile.jpg';
import '../public/styles/Header.css';

function Header(){
    return (
        <div className="Header">
                <div className="logo">
                    <img src={logo} className="logo" alt="Scrums"/>
                </div>
                <div className="options">
                    <a href="/Scrums" className="scrum" id="scrum">Scrum</a>
                    <a href="/Blockers" className="blocker" id="blocker">Blockers</a>
                </div>
                <div className="user">
                    <img src={profilePicture} className="profile" alt="User"/>
                    <i className="fas fa-angle-down"></i>
                </div>
        </div>
    );
};

export default Header;