import React from 'react';
import Explor from '../../Explor/Explor';
import Load from '../../Load';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';

import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {
    return (
        <div className="homebg">
            <Header></Header>
            <Banner></Banner>
            <Load></Load>
            <Explor></Explor>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;