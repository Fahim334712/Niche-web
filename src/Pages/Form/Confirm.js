import React from 'react';
import Header from '../Home/Header/Header';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const Confirm = () => {
    const history = useHistory();
    const backHome = () => {
        history.push('/home');
    }
    return (
        <div>
            <Header></Header>
            <h2 className="mt-5">Successfully Order Confirm!!!</h2>
            <Button onClick={backHome} sx={{ m: 1, width: '50%' }} variant="contained">Back to Home</Button>

        </div>
    );
};

export default Confirm;