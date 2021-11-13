import { Container, Grid, TextField, Button, Typography, Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import loginPhoto from '../../images/login.jpg';
import UseAuth from '../Firebase/UseAuth';
import Header from '../Home/Header/Header';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, authError, isLoading, loginUser, signInWithGoogle } = UseAuth();
    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleOnSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }


    return (
        <Container>
            <Header></Header>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginPhoto} alt="" />
                </Grid>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography className="fw-bold text-danger" variant="h3" gutterBottom>Login</Typography>
                    <form onSubmit={handleOnSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-password-input"
                            label="Email"
                            type="email"
                            onBlur={handleOnChange}
                            name="email"
                            autoComplete="current-password"
                        /><br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-password-input"
                            label="Your Password"
                            type="password"
                            onBlur={handleOnChange}
                            name="password"
                            autoComplete="current-password" /><br />
                        <Button sx={{ width: '75%', mt: 4 }} type="submit" variant="contained">Login</Button><br />
                        <Link style={{ textDecoration: "none" }} to='/register'>New User ? Please Register</Link>
                        {
                            isLoading && <CircularProgress />
                        }
                        {user?.email && <Alert severity="success">Successfully login!</Alert>}
                        {authError && <Alert severity="error">User Not Found! Register Please</Alert>}
                    </form>
                    <p>-----------------------</p>

                    <Button variant="contained" onClick={handleGoogleSignIn} >Google Sign In</Button>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;