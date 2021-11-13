import { Grid } from '@mui/material';
import React from 'react';
import ht from '../../images/ht.jpg';
import th from '../../images/th.jpg';
import './Explor.css';

const Explor = () => {
    return (
        <div >
            <h4 className="lk text-danger fw-bold"><span className="text-success">"Chittagong Calculator Store"</span> (an electronics maker) is by your side for all time calculations.</h4>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <img className="candy" src={ht} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <img className="candy" src={th} alt="" />
                </Grid>

            </Grid>
        </div>
    );
};

export default Explor;