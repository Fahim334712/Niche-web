import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import ProductsHome from '../ProductsHome/ProductsHome';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {
    return (
        <div className="homebg">
            {/* section 1 */}
            <Header></Header>
            {/* section 2 */}
            <Banner></Banner>
            {/* section 3 */}
            <ProductsHome></ProductsHome>
            {/* section 4 */}
            <Reviews></Reviews>
            {/* section 5 */}
            <Footer></Footer>
        </div>
    );
};

export default Home;