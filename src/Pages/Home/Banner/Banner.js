import React from 'react';
import './Banner.css';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const bannerBg = {
    background: `url(https://i.ibb.co/5TdXpLC/34811.jpg)`,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'hard-light',
}

const Banner = () => {
    return (
        <div>
            <h3 className="fw-bold kaja pb-1">CHITTAGONG CALCULATOR STORE</h3>
            <div className="container">
                <Box container style={bannerBg} sx={{ pb: 15, pt: 20, height: 200 }}>
                </Box>
            </div>
            <Link to='/products'>
                <Button sx={{ width: '50%' }} variant="contained">Explore</Button>
            </Link>
        </div>
    );
};

export default Banner;