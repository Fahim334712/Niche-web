import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import UseAuth from '../Firebase/UseAuth';
import { Link } from 'react-router-dom';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const Details = ({ open, handleClose, data }) => {
    const { name, balance } = data;
    const { user } = UseAuth();
    const [orderSuccess, setOrderSuccess] = useState(false);
    const theInfo = { name: user.displayName, email: user.email, address: '' }


    const [info, setInfo] = useState(theInfo);

    const handleBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...info };
        newInfo[field] = value;
        console.log(newInfo);
        setInfo(newInfo);
    }

    const handleBookSubmit = e => {
        const order = {
            ...info,
            product: name,
            price: balance
        }


        // send to server
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderSuccess(true);
                    handleClose();
                }
            })
        handleClose();
        e.preventDefault();
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {
                        user?.email ?
                            <div>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    {name}
                                </Typography>
                                <form onSubmit={handleBookSubmit}>

                                    <TextField
                                        sx={{ width: '90%', m: 1 }}

                                        id="outlined-password-input"
                                        label="Product name"
                                        defaultValue={name}
                                        autoComplete="current-password"
                                    />
                                    <TextField
                                        sx={{ width: '90%', m: 1 }}

                                        id="outlined-password-input"
                                        label="Price"
                                        defaultValue={balance}
                                        autoComplete="current-password"
                                    />
                                    <TextField
                                        sx={{ width: '90%', m: 1 }}
                                        id="outlined-password-input"
                                        label="Your name"
                                        name="name"
                                        onChange={handleBlur}
                                        defaultValue={user.displayName}
                                        autoComplete="current-password"
                                    />
                                    <TextField
                                        sx={{ width: '90%', m: 1 }}
                                        id="outlined-password-input"
                                        label="Email"
                                        name="email"
                                        onChange={handleBlur}
                                        defaultValue={user.email}
                                        autoComplete="current-password"
                                    />
                                    <TextField
                                        sx={{ width: '90%', m: 1 }}
                                        id="outlined-password-input"
                                        label="address"
                                        name="address"
                                        onChange={handleBlur}
                                        autoComplete="current-password"
                                    />
                                    <Button type="submit" variant="contained">Submit</Button>
                                </form>
                            </div>
                            :
                            <div>
                                <h2>Please Sign In First!</h2>
                                <Link to='/login'>Login</Link>
                            </div>
                    }
                </Box>
            </Modal>

        </>
    );
};

export default Details;