import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../style/Home.css"

import { NavLink } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

const carda = (
  <React.Fragment>
    <CardContent className='card'>
      <Typography sx={{ fontSize: 14 }}  gutterBottom>
        TaxPer Month  <i class="fa-sharp fa-solid fa-circle-check" style={{ marginLeft:"50px", paddingLeft:"50px"}}><span style={{fontFamily:"Roboto", fontWeight:"bold", fontSize:"15px"}}></span></i>
      </Typography>
      <Typography sx={{ mb: 1.5 }} >
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
      <Typography sx={{ border:"2px solid black",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",borderTop:{opacity:0.6},borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderBottomColor:"white",borderRightColor:"white",borderLeftColor:"white" ,mt:"10px"}}size="small" >Learn More</Typography>
    </CardContent>
  </React.Fragment>
);



const cardb = (
  <React.Fragment>
    <CardContent className='card'>
      <Typography sx={{ fontSize: 14 }}  gutterBottom>
        TaxPer Year  <i class="fa-sharp fa-solid fa-circle-check" style={{ marginLeft:"55px", paddingLeft:"50px"}}><span style={{fontFamily:"Roboto", fontWeight:"bold", fontSize:"15px"}}></span></i>
      </Typography>
      <Typography sx={{ mb: 1.5 }} >
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
      <Typography sx={{ border:"2px solid black",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",borderTop:{opacity:0.6},borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderBottomColor:"white",borderRightColor:"white",borderLeftColor:"white" ,mt:"10px"}}size="small" >Learn More</Typography>
    </CardContent>
  </React.Fragment>
);



const cardc = (
  <React.Fragment>
    <CardContent className='card'>
      <Typography sx={{ fontSize: 14 }}  gutterBottom>
        Taxes   <i class="fa-sharp fa-solid fa-circle-check" style={{ marginLeft:"100px", paddingLeft:"50px"}}><span style={{fontFamily:"Roboto", fontWeight:"bold", fontSize:"15px"}}></span></i>
      </Typography>
      <Typography sx={{ mb: 1.5 }} >
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
      <Typography sx={{ border:"2px solid black",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",borderTop:{opacity:0.6},borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderBottomColor:"white",borderRightColor:"white",borderLeftColor:"white" ,mt:"10px"}}size="small" >Learn More</Typography>
    </CardContent>
  </React.Fragment>
);



const cardd = (
  <React.Fragment>
    <CardContent className='card'>
      <Typography sx={{ fontSize: 14 }}  gutterBottom>
        Expenses  <i class="fa-sharp fa-solid fa-circle-check" style={{ marginLeft:"70px", paddingLeft:"50px"}}><span style={{fontFamily:"Roboto", fontWeight:"bold", fontSize:"15px"}}></span></i>
      </Typography>
      <Typography sx={{ mb: 1.5 }} >
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
      <Typography sx={{ border:"2px solid black",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",borderTop:{opacity:0.6},borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderBottomColor:"white",borderRightColor:"white",borderLeftColor:"white" ,mt:"10px"}}size="small" >Learn More</Typography>
    </CardContent>
  </React.Fragment>
);



export default function Home() {
  return (
    <Box sx={{ mb:"50px",mt:"-10px"}}>
    <Box sx={{display:"flex", mt:"20px",ml:"60px",mr:"60px",mb:"0px", }}>
        <Box sx={{ width: "100%" ,height:"70px" ,mb:"25px", }}>
        <Card 
        sx={{backgroundColor:"white",
        borderRadius: "20px",borderColor:"transparent",opacity:0.9,display:"flex", justifyContent:"space-between"}}variant="outlined">

         <Typography sx={{ fontSize: 14, mt:"12px",mr:"25%",fontFamily:"Roboto",fontWeight:"bold",display:{xs:"none",md:"flex"} }} color="text.secondary" gutterBottom>
        <Box
        component="img"
        sx={{
          height: { xs: 10, md: 15 },
          width: { xs: "none", md: "flex" },
        }}
        alt="Logo"
        src="https://storage.googleapis.com/pai-images/64c67fcca15b449ab69295d4d7134f19.jpeg"
        borderRadius="10px"
        marginBottom="-2px"
        marginRight="5px"
      />
            SV TaxWebsite
        </Typography>
        <Typography sx={{ mb: 1.5,mt:"12px",mr:"25%" ,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Roboto",fontWeight:"bold"}} color="text.secondary">
            <NavLink to="/service" style={{textDecoration:"None", }} className="Navs">Services</NavLink>
            <NavLink to="/process" style={{textDecoration:"None"}} className="Navs">Process</NavLink>
            <NavLink to="/casestudy" style={{textDecoration:"None"}} className="Navs">Study</NavLink>
        </Typography>
        <Typography sx={{ display:{xs:"none",md:"flex"},fontFamily:"Roboto",fontWeight:"bold"}}>
            <NavLink to="/Signin" size="small" style={{textDecoration:"None"}} className="Nav">SignIn</NavLink>
            <NavLink to="/Signin" style={{textDecoration:"None"}} className="Nav">SignUp</NavLink>
        </Typography>
        </Card>
        </Box>
    </Box>

    <Box sx={{mb:"50px"}}>
      <Typography sx={{fontFamily:"Roboto",fontWeight:"bold", fontSize:"45px"}}>Now Secure Your Money</Typography>
      <Typography sx={{fontFamily:"Roboto", fontSize:"45px"}}>With Our Encrypts</Typography>
      <Typography sx={{fontFamily:"Roboto", fontSize:"18px"}}>Grow Your investment without any risk</Typography>
	
     <Box sx={{display:"flex", width:"30%", ml:"35%",border:"2px solid black",height:"50px",borderRadius:"30px",marginTop:"25px"}}>
			<input type="email" placeholder="Enter Your Email Address" className="input" name="email" required/>
			<NavLink to="/Signin" style={{textDecoration:"none",marginRight:"5px",marginTop:'1px',marginBottom:'1px'}} className="Nave">SignUp</NavLink>
    </Box>



      <Box style={{marginTop:"25px"}} sx={{ display:{xs:"block",md:"flex"}}}>
      <Box sx={{ ml:{md:"20%",l:"500px",xl:"25%"} }} >
        <i class="fa-sharp fa-solid fa-circle-check fa-beat"><span style={{fontFamily:"Roboto", fontWeight:"bold", fontSize:"15px"}}>24/7 free support</span></i>
      </Box>

      <Box sx={{ ml:{md:"15%",xl:"15%"} }}>
        <i  class="fa-sharp fa-solid fa-circle-check fa-beat"><span style={{fontFamily:"Roboto", fontWeight:"bold", fontSize:"15px"}}>Guaranteed Growth</span></i>
        </Box>

        <Box sx={{ ml:{md:"15%",xl:"15%"} }}>
           <i class="fa-sharp fa-solid fa-circle-check fa-beat"><span style={{fontFamily:"Roboto", fontWeight:"bold", fontSize:"15px"}}>CashBack</span></i>
        </Box>
      </Box>
    </Box>




 <Box sx={{ display:"flex" ,ml:"12%",justifyContent:"space-between",mr:"12%"}}>
    <Typography sx={{ fontFamily:"Roboto",fontSize:"30px" }}>Most Popular</Typography>
    <Typography sx={{ fontFamily:"Roboto",fontSize:"30px" }}>View Data</Typography>
</Box>



    <Box style={{ marginTop:"20px",marginLeft:"50px",marginRight:"50px"}} sx={{display:{xs:"block", md:"flex"}}}>
      <Box sx={{ width: {xs:"50%", md:"100%"} ,ml:{xs:"25%",md:"20px"},mb:"20px"}}>
        <Card style={{backgroundColor:"white",
          borderRadius: "20px"}} variant="outlined">{carda}</Card>
      </Box>
      <Box sx={{ width: {xs:"50%", md:"100%"}, ml:{xs:"25%",md:"20px"},mb:"20px"}}>
        <Card style={{backgroundColor:"white",
          borderRadius: "20px"}} variant="outlined">{cardb}</Card>
      </Box>

      <Box sx={{ width: {xs:"50%", md:"100%"}, ml:{xs:"25%",md:"20px"},mb:"20px" }}>
        <Card style={{backgroundColor:"white",
          borderRadius: "20px"}} variant="outlined">{cardc}</Card>
      </Box>
      <Box sx={{ width: {xs:"50%", md:"100%"}, ml:{xs:"25%",md:"20px"},mr:"20px",mb:"20px" }}>
        <Card style={{backgroundColor:"white",
          borderRadius: "20px"}} variant="outlined">{cardd}</Card>
      </Box>
     </Box>

    </Box>
  );
}