import React from "react";
import { Typography, Container} from "@mui/material";


const HomePage = () => {

    return(
        <Container style={{ paddingTop:'120px', paddingBottom: '30px' }}>
            <Typography variant="h2" style={{color:"#FFF"}} width='70%'><strong>Figuring out how to start a web design in 2022 can be a bit overwhelming.</strong></Typography>
            <Typography variant="h6" style={{color:"#FFF"}} width='50%'>Would you rather toil away as you are, continuously bogged down by stress? Or are you willing to take a risk for a chance at something better?</Typography>
            <Typography variant="h1" style={{color:'#FFF'}}><strong>Calvin Dexter</strong></Typography>
        </Container>
    )
}

export default HomePage