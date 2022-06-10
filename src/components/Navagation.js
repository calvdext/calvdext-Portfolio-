import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";

const Navagation = () => {
    return(
        <AppBar position="sticky" style={{ background: '#2E3B55' }}>
            <Toolbar>
                <Tabs value={false}>
                    <Tab label="Home" value='home' component={Link} to="/home"/>
                    <Tab label="About" component={Link} to="/about"/>
                    <Tab label="Contact" component={Link} to="/contact"/>
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}

export default Navagation