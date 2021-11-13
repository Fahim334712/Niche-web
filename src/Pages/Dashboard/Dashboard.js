import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Data from '../Data/Data';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

import UseAuth from '../Firebase/UseAuth';
import {

    Switch,
    Route,
    Link,

    useRouteMatch
} from "react-router-dom";
import AddRiview from '../AddRiview/AddRiview';
import Pay from '../Pay/Pay';
import Button from '@restart/ui/esm/Button';
import AddProducts from '../AddProducts/AddProducts';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { user, admin, logout } = UseAuth();

    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Link to='/home'>
                <button style={{ width: '100%' }} className=" p-2 mb-1 fw-bold  text-danger">Go to Home</button></Link>
            {
                !admin && <Box>
                    <Link to='/allorder'>
                        <button style={{ width: '100%' }} className="mt-5 mb-1 p-2 fw-bold  text-danger">New Order Now</button></Link>
                    <Link to={`${url}`}>
                        <button style={{ width: '100%' }} className=" p-2 mb-1 fw-bold  text-danger">My Orders</button></Link>
                    <Link to={`${url}/addReview`}>
                        <button style={{ width: '100%' }} className=" p-2 mb-1 fw-bold  text-danger">Add Review</button></Link>
                    <Link to={`${url}/pay`}>
                        <button style={{ width: '100%' }} className=" p-2 mb-1 fw-bold  text-danger">Pay</button></Link>
                </Box>
            }

            {
                admin && <Box><Link to={`${url}/makeAdmin`}>
                    <button style={{ width: '100%' }} className=" p-2 mb-1 fw-bold  text-danger">Make Admin</button></Link>
                    <Link to={`${url}/addProduct`}>
                        <button style={{ width: '100%' }} className=" p-2 mb-1 fw-bold  text-danger">Add Product</button></Link>
                    <Link to={`${url}/manageOrders`}>
                        <button style={{ width: '100%' }} className=" p-2 mb-1 fw-bold  text-danger">Manage all orders</button></Link>
                    <Link to={`${url}/manageProducts`}>
                        <button style={{ width: '100%' }} className=" p-2 mb-1 fw-bold  text-danger">Manage Products</button></Link>
                </Box>
            }
            <Link to={`${url}/logout`}>
                <button style={{ width: '100%' }} className=" p-2 mb-1 fw-bold  text-danger">logout</button></Link>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {user.displayName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    {
                        !admin && <Route exact path={path}>
                            <Data></Data>
                        </Route>
                    }
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProducts></AddProducts>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddRiview></AddRiview>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/logout`}>
                        <Button onClick={logout}>Logout</Button>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
