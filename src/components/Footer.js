import { Typography } from "@mui/material";
import React from "react";


const Footer = () => {
    return(
        <footer>
            <a href="https://twitter.com/CalvinDexter5"><img src="twitter.png" alt="Twitter"/></a>
            <a href="https://github.com/calvdext"><img src="github.png" alt="Twitter"/></a>
            <a href="https://www.linkedin.com/in/calvin-dexter-297474225/"><img src="icons8-linkedin-circled-48.png" alt="Twitter"/></a>
            <Typography variant="p" style={{color:"#FFF"}}><p>&#169; Calvin Dexter 2021</p></Typography>
        </footer>
    )
}

export default Footer