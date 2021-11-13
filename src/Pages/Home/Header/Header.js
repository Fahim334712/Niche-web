import * as React from 'react';
import { Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Header.css';
import { LinkContainer } from 'react-router-bootstrap';
import UseAuth from '../../Firebase/UseAuth';




const Header = () => {
    const { user, logout } = UseAuth();
    return (
        <div className="bg-light">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <img className="imgSize" src="./images/calculator.png" alt="" />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <div className="all">
                            <LinkContainer to="/">
                                <Nav.Link className="colorr">Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link className="colorr">About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/products">
                                <Nav.Link className="colorr">Products</Nav.Link>
                            </LinkContainer>



                            {
                                user?.email
                                    ? <div className="navv">

                                        <LinkContainer to="/dashboard">
                                            <Nav.Link className="colorr">Dashboard</Nav.Link>
                                        </LinkContainer>
                                        <Button onClick={logout}>Logout</Button>
                                    </div>

                                    :
                                    <LinkContainer to="/login">
                                        <Nav.Link className="colorr">Login</Nav.Link>
                                    </LinkContainer>
                            }


                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>

    );
};

export default Header;