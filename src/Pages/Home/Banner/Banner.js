import React from 'react';
import './Banner.css';
import bg from '../../../images/banner.jpg';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
    backgroundSize: 'cover'
}

const Banner = () => {
    return (
        <div className="container">
            <Box container style={bannerBg} sx={{ pb: 20, pt: 20 }}>
                <h3 className="text-warning">All Types Calculator Here</h3>
                <button className="mt-5 mb-5 p-2 fw-bold style text-danger">Explore Now</button>
            </Box>
        </div>
    );
};

export default Banner;