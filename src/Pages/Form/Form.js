import { TextField } from '@mui/material';
import React from 'react';
import Header from '../Home/Header/Header';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';

const Form = () => {
    const history = useHistory();
    const confirm = () => {
        history.push('/form/confirm');
    }
    return (
        <div>
            <Header></Header>
            <h2 className="mt-3 man">Order Memo</h2>
            <form>
                <TextField sx={{ m: 1, width: '50%' }} id="outlined-basic" label="Product Name" name="name" variant="outlined" /><br />
                <TextField sx={{ m: 1, width: '50%' }} id="outlined-basic" label="Your name" variant="outlined" /><br />
                <TextField sx={{ m: 1, width: '50%' }} id="outlined-basic" label="Price" variant="outlined" /><br />
                <TextField sx={{ m: 1, width: '50%' }} id="outlined-basic" label="Email" variant="outlined" /><br />
                <TextField sx={{ m: 1, width: '50%' }} id="outlined-basic" label="Delivery address" variant="outlined" />

                <Button onClick={confirm} sx={{ m: 1, width: '50%' }} variant="contained">Submit</Button>
            </form>

        </div>
    );
};

export default Form;