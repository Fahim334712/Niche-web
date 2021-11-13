import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-info pb-2 pt-2">
            <h4>Follow our social media</h4>
            <i className="fab fa-facebook m-2"></i><i className="m-2 fab fa-twitter"></i><i className="m-2 fab fa-youtube"></i><i className=" m-2 fab fa-linkedin-in"></i><i className=" m-2 fab fa-snapchat-ghost"></i>
            <br />
            <p>copyright © fahim all rights reserved</p>
        </div>
    );
};

export default Footer;