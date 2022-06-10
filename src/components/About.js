import React from "react";
import { Typography, Container, Card, CardContent } from "@mui/material";



const About = () => {
    return(

        <Container style={{ paddingTop:'130px' }}>
            <Card>
                <CardContent>
                    <Typography variant="h4">Travelling</Typography>
                    <Typography variant="p">
                        Travelling is something I want to pursue in the future and have already had some great 
                        experiences. I have been to New Zealand, Bali, Hong Kong, India and Indonesia. Recently 
                        travelling and working for myself simultaneously has been something I extremely enjoy 
                        and hope I can continue to do in the near future.
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography variant="h4">Code</Typography>
                    <Typography variant="p">
                        Coding has become one of my newest hobbies and I am loving it! Being such a large 
                        industry there seems like an endless supply of information and knowledge for 
                        technology. I love problem solving, brain teasers, maths equations and the 
                        patterning of code. There is always something new to learn and implement. 
                        I've started as a student programmer at Coder Academy. The ability to work 
                        remotely has been very appealing with the recent COVID pandemic, which also ties 
                        into my plan to travel abroad in the future. However, I am also very grateful to 
                        have had the on-campus hands-on learning at Coder Academy. 
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography variant="h4">Purpose</Typography>
                    <Typography variant="p">
                        The purpose of this website is to show potential employers my web development skills 
                        and my personality. For myself, this website is a learning project that has given 
                        me experience and knowledge of building a website from scratch. Taking time to plan 
                        and create content for this project had its benefits for the building process, and 
                        having wireframes and a sitemap to reference, made this project all come together 
                        without any major issues.
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default About