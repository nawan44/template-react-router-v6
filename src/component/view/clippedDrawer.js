import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TopBar from './appBar';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Outlet, Link } from "react-router-dom";
import { makeStyles, useTheme } from '@mui/styles';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShippingComps from '../../page/Shipping Comps';


const drawerWidth = 240;
// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: "flex",
//     },
//     appBar: {
//       transition: theme.transitions.create(["margin", "width"], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//     },
//     appBarShift: {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: drawerWidth,
//       transition: theme.transitions.create(["margin", "width"], {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     },
//     hide: {
//       display: "none",
//     },
//     drawer: {
//       width: drawerWidth,
//       flexShrink: 0,
//     },
//     drawerPaper: {
//       width: drawerWidth,
//     },
//     drawerHeader: {
//       display: "flex",
//       alignItems: "center",
//       padding: theme.spacing(0, 1),
//       // necessary for content to be below app bar
//       ...theme.mixins.toolbar,
//       justifyContent: "flex-end",
//     },

//     content: {
//       flexGrow: 1,
//       padding: 10,
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       marginLeft: -drawerWidth,
//     },
//     contentShift: {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     },
//     toolbar: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "flex-end",
//       padding: theme.spacing(0, 1),
//       ...theme.mixins.toolbar,
//     },
//   }));

export default function ClippedDrawer(props) {
    // const classes = useStyles();
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItem button  >
                            <Link to="/dashboard" style={{ width: "100%", }} >
                                <ListItemIcon style={{ width: "20%", float: "left", marginTop: "5px" }}>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText style={{ width: "70%", float: "left" }} primary="Dashboard" />
                            </Link>
                        </ListItem>
                        <Divider />
                        <ListItem button >
                            <Link to="/shipping-comps" style={{ width: "100%", }} >
                                <ListItemIcon style={{ width: "20%", float: "left", marginTop: "5px" }}>
                                    <LocalShippingIcon />
                                </ListItemIcon>
                                <ListItemText style={{ width: "70%", float: "left" }} primary="Shipping Comps" />
                            </Link>
                        </ListItem>
                        <Divider />
                        <div style={{ backgroundColor: "#1976D2", position: "fixed", bottom: 0, width: 240, padding: 10, height:50 }}  >
                            <Link to="/login" >
                            {/* <IconButton
                                style={{
                                    color: "#FFFF",
                                    zIndex: 2000,
                                    position: "absolute",
                                    top: "8px",
                                    right: "10px",
                                }}
                                // onClick={() => {
                                //     localStorage.removeItem("token");
                                //     history.push("login");
                                // }}
                            > */}
                            <div className="focus:outline-none text-white focus:border-blacks pl-10 m-auto	" >
                                    <LogoutIcon className="text-white" />
                                    <span className="text-white text-lg focus:outline-none text-white focus:border-blacks pl-2">Logout</span>
                                </div>

                                 {/* </IconButton>  */}

                            </Link>

                        </div>


                        {/* <BottomBar/> */}
                    </List>

                </Box>
            </Drawer>
            {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}
            className="bg-gray-200 "
            style={{height:"100vh",}}
            >

<main >
        <div  />
        {props.children}
      </main> */}
            {/* <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main> */}
            {/* <ShippingComps /> */}
            {/* <BrowserRouter>
    <Routes>
       <Route path="/shipping-comps" element={<ShippingComps />}>
        <Route index element={<Layout />} /> */}
            {/* <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/shipping-comps" element={<ShippingComps />} />
       </Route> 
    </Routes>
  </BrowserRouter>*/}
            {/* </Box> */}
        </Box>
    );
}