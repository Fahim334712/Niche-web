import React from 'react';
import Header from '../Home/Header/Header';
import './About.css';
import about1 from '../../images/about1.jpg';
import about2 from '../../images/about2.jpg';
import about3 from '../../images/about3.jpg';
const About = () => {
    return (
        <div>
            <Header></Header>
            <h2 className="mt-1 text-danger fw-bold man">About Us</h2>
            <p className="m-4">Chittagong Calculator Store is a Bangladeshi multinational electronics manufacturing corporation headquartered in Chittagong,Bangladesh. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the world's first entirely electric compact calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the world's first mass-produced digital watches.</p>
            <div className="theFlexy container">
                <div>
                    <img className="photosiza" src={about1} alt="" />
                </div>
                <div>
                    <img className="photosiza" src={about2} alt="" />
                </div>
                <div>
                    <img className="photosiza" src={about3} alt="" />
                </div>

            </div>
        </div>
    );
};

export default About;