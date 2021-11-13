import { Container, Grid, TextField, Button, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import registerPhoto from '../../images/register.jpg';
import UseAuth from '../Firebase/UseAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { authError, user, registerUser, isLoading } = UseAuth();



    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;

        setLoginData(newLoginData);

    }

    const handleOnSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password dont match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>

                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography className="fw-bold text-success" variant="h3" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleOnSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-password-input"
                            label="Name"
                            type="text"
                            onBlur={handleOnBlur}
                            name="name"
                            autoComplete="current-password"
                        /><br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-password-input"
                            label="Email"
                            type="email"
                            onBlur={handleOnBlur}
                            name="email"
                            autoComplete="current-password"
                        /><br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            onBlur={handleOnBlur}
                            name="password"
                            autoComplete="current-password" /><br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-password-input"
                            label="Re-type Password"
                            type="password"
                            onBlur={handleOnBlur}
                            name="password2"
                            autoComplete="current-password" /><br />
                        <Button sx={{ width: '75%', mt: 4 }} type="submit" variant="contained">Register</Button><br />
                        <Link className="fw-bold" style={{ textDecoration: "none" }} to='/login'>Already Registerd ? Please Login</Link>

                        {
                            isLoading && <CircularProgress />
                        }
                    </form>}
                    {
                        isLoading && <CircularProgress />
                    }
                    {user?.email && <Alert severity="success">congress ! user added successfully</Alert>}
                    {authError && <Alert severity="error">This is an error alert — check it out!</Alert>}
                </Grid>

                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={registerPhoto} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;