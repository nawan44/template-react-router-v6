import React, { useState, useEffect } from "react"
import { styled } from '@mui/material/styles';
import { Outlet, Link } from "react-router-dom";

import TopBar from "../../component/view/appBar";
import avatar from "../../assets/avatar/avatar.png"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ClippedDrawer from "../../component/view/clippedDrawer";


const Dashboard = (props) => {


    return (
        <>
        <TopBar/>
        {/* <ClippedDrawer/> */}
       <h1 style={{marginTop:"70px"}}>Dashboard</h1>
        
        </>
    );
}
export default Dashboard



