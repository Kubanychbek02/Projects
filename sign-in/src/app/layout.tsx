import React from 'react';
import {Outlet} from 'react-router-dom'
import {Header} from "../components";
import {Box} from "@mui/material";

const Layout = () => {
    return (
        <Box>
            <Header/>
            <Outlet/>
        </Box>
    );
};

export default Layout;