import React from "react";
import { Typography, Button, InputLabel, TextField, Card, Container } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




const Contact = () => {
    const initialFormData = {
        username: "",
        email: "",
        comment: ""
    }

    const [formData, setFormData] = useState(initialFormData)
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("you clicked submit")
        console.log(formData)
        setFormData(initialFormData)
        navigate("/home")
    }

    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    return(
        <Container>
            <Card style={{padding:"50px", margin: '50px', display:'flex', justifyContent: 'center'}}>
                <form onSubmit={handleSubmit}>
                    <div>
                    <Typography variant="h4">Leave Your Contact Info!</Typography>
                        <InputLabel>Name:</InputLabel>
                        <TextField type="text" name='username' id="username" value={formData.username} onChange={handleFormData}/>
                    </div>
                    <div>
                        <InputLabel>Email:</InputLabel>
                        <TextField type="text" name='email' id="email" value={formData.email} onChange={handleFormData} />
                    </div>
                    <div>
                        <InputLabel>Comment:</InputLabel>
                        <TextField type="text" name='comment' id="comment" style={{ display: '', paddingBottom: '30px' }} value={formData.comment} onChange={handleFormData}/> 
                        
                    </div>
                    <Button variant="contained" type="submit">Submit</Button>
                </form>
            </Card>    
            <Card style={{padding:"50px", margin: '50px', display:'flex', justifyContent: 'center'}}>
                <Typography variant="h5">Click Here To Reseve Copy Of My CV---  </Typography>
                <form action="calvdextCV.pdf" target="_blank">
                    <button variant="contained">DOWNLOAD</button>
                </form>
            </Card>
        </Container>
    )
}
export default Contact