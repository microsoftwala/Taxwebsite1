import React, { useState,useEffect } from 'react'
import "../style/Home.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {  NavLink, Navigate } from "react-router-dom";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import HistoryIcon from '@mui/icons-material/History';
import { useNavigate } from "react-router-dom";
import QuestionMarkSharpIcon from '@mui/icons-material/QuestionMarkSharp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import { Button, Typography } from '@mui/material';
import axios from "axios"
import PaymentsIcon from '@mui/icons-material/Payments';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import CalculateIcon from '@mui/icons-material/Calculate';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Box from '@mui/material/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CallReceivedIcon from '@mui/icons-material/CallReceived';


const Notification = (props) => {

const [authenticated, setauthenticated] = useState(null);
  // useEffect(() => {
  //         const loggedInUser = localStorage.getItem("authenticated");
  //         setauthenticated(localStorage.getItem("authenticated"))
  //         console.log(loggedInUser)
  //       }, []);
      
const [name,setName] = useState([])
const [color,setColor] = useState(true)
useEffect(() => {
  axios
    .get('https://taxbackend.onrender.com/login')
    .then((response) => {
      setName(response.data);
    })
    .catch((error) => console.log('error', error));
}, []);

// console.log(taxData)


const navigate = useNavigate();
const [ismonth,setIsmonth] = useState(true)
const [ismonths,setIsmonths] = useState(false)
const [isyear,setIsyear] = useState(false)
const [bar,setBar] = useState(true)

const Closebar = ()=>{
  if(bar === false){
    setBar(true)
  }
  else{
    setBar(false)
  }
}

const Check = () =>{
  if(color === true){
    setColor(false)
  }
  else{
    setColor(true)
  }
}


const [history,setHistory] = useState([])
useEffect(() => 
{
 axios.get("https://taxbackend.onrender.com/payment").then((response)=>{
  setHistory(response.data)
})
.catch(error => {
  console.log("error"+error)})
}, [])

const month = (e)=>{
    if( ismonth === false){
        setIsmonth(true)
        setIsmonths(false)
        setIsyear(false)
    }
}


const months = (e)=>{
    if( ismonths === false){
        setIsmonths(true)
        setIsmonth(false)
        setIsyear(false)
    }
}

const year = (e)=>{
    if( isyear === false){
        setIsyear(true)
        setIsmonths(false)
        setIsmonth(false)
    }
}

// console.log(typeof(localStorage.getItem("authenticated")))
if (localStorage.getItem("authenticated") === 'false') 
{
    console.log("hello")
    return <Navigate replace to="/Signin" />;
} 

else {
        

    const Logout = () => {
        setauthenticated(false)
        // console.log("hi")
        localStorage.setItem("authenticated",false)
        navigate("/Signin");
                }
  
  return (
    <Box sx={{ display:"flex",mb:"2%" }}>
       
       {bar ? <Box sx={{ width:{xs:"40%",sm:"40%",md:"20%"},height:"100vh",backgroundColor:{xs:"white",md:"#8EAC50"},ml:"2%",mt:"2%",mb:"0",mr:"2%",borderRadius:"30px",fontWeight:"bold" }}>

       <Box sx={{ mb:"5%" }}>
                <img src="https://storage.googleapis.com/pai-images/8a9673c9582b4cdca3073b09392a7ac0.jpeg" alt='client' style={{ borderRadius:"100%",width:"35%",marginTop:"5%"}}></img>

                <Typography sx={{ color:{xs:"black",sm:"black",md:"white"},fontFamily:"Roboto",fontSize:"18px" }}>
                {name.username}   </Typography>

                <Typography sx={{ color:{xs:"black",sm:"black",md:"white"},fontFamily:"Roboto",fontSize:"13px" }}> Client </Typography>
            </Box>

            <Button id='button1' sx={{ color:{xs:"black",sm:"black",md:"white"},display:"flex",fontFamily:"Calibri",fontSize:"13px",ml:"15%",paddingRight:"30px",paddingLeft:"20px",mb:"10px" }}> 
                <NavLink style={{ textDecoration:"none",color:{xs:"black",sm:"black",md:"white"},display:"flex" }} to="/dashboard"><GridViewRoundedIcon sx={{ color:{xs:"black",sm:"black",md:"white"},mr:"15%" }}/> Dashboard</NavLink>
           </Button>

           <Button id='button2' sx={{ color:{xs:"black",sm:"black",md:"white"},display:"flex",ml:"15%",fontFamily:"Calibri",fontSize:"13px",paddingRight:"30px",paddingLeft:"20px",mb:"10px"} }> 
                <NavLink style={{ textDecoration:"none",color:{xs:"black",sm:"black",md:"white"},display:"flex"  }} to="/payment"><CalculateIcon sx={{ color:{xs:"black",sm:"black",md:"white"},mr:"15%" }}/> TaxCalculator</NavLink>
           </Button>


           <Button id='button2' sx={{ color:{xs:"black",sm:"black",md:"white"},display:"flex",ml:"15%",fontFamily:"Calibri",fontSize:"13px",paddingRight:"30px",paddingLeft:"20px",mb:"10px"} }> 
                <NavLink style={{ textDecoration:"none",color:{xs:"black",sm:"black",md:"white"},display:"flex" }} to="/payment"> <PaymentsIcon sx={{ color:{xs:"black",sm:"black",md:"white"},mr:"15%" }}/> Payment</NavLink>
           </Button>

           <Button id='button2' sx={{ color:{xs:"black",sm:"black",md:"white"},display:"flex",ml:"15%",fontFamily:"Calibri",fontSize:"13px",paddingRight:"30px",paddingLeft:"20px",mb:"10px"} }> 
                <NavLink style={{ textDecoration:"none",color:{xs:"black",sm:"black",md:"white"},display:"flex" }} to="/paymenthistory"> <HistoryIcon sx={{ color:{xs:"black",sm:"black",md:"white"},mr:"15%" }}/> PayHistory</NavLink>
           </Button>

           <Button id='button2' sx={{ color:{xs:"black",sm:"black",md:"white"},display:"flex",ml:"15%",fontFamily:"Calibri",fontSize:"13px",paddingRight:"30px",paddingLeft:"20px",mb:"10px"} }> 
                <NavLink style={{ textDecoration:"none",color:{xs:"black",sm:"black",md:"white"},display:"flex" }} to="/notification"> <NotificationsSharpIcon sx={{ color:{xs:"black",sm:"black",md:"white"},mr:"15%" }}/> Notifications</NavLink>
           </Button>


           <Button id='button2' sx={{ color:{xs:"black",sm:"black",md:"white"},display:"flex",ml:"15%",fontFamily:"Calibri",fontSize:"13px",paddingRight:"30px",paddingLeft:"18px",mb:"10px"} }> 
                <NavLink style={{ textDecoration:"none",color:{xs:"black",sm:"black",md:"white"},display:"flex" }} to="/support"> <QuestionMarkSharpIcon sx={{ color:{xs:"black",sm:"black",md:"white"},mr:"15%" }}/> Support</NavLink>
           </Button>

           <Button id='button2' sx={{ color:{xs:"black",sm:"black",md:"white"},display:"flex",ml:"15%",fontFamily:"Calibri",fontSize:"13px",paddingRight:"30px",paddingLeft:"18px",mb:"10px"} }>
             <Box sx={{ display:"flex" }}>
                    <a href onClick={Logout} style={{ display:"flex" }}>
                    <LogoutSharpIcon sx={{ color:{xs:"black",sm:"black",md:"white"},mr:"15%" }}/>  Logout</a>
             </Box>
           </Button>


           <Button id='button2' sx={{ color:{xs:"black",sm:"black",md:"white"},display:"flex",ml:"15%",fontFamily:"Calibri",fontSize:"13px",paddingRight:"30px",paddingLeft:"20px",mb:"10px"} }> 
                
                <NavLink style={{ textDecoration:"none",color:{xs:"black",sm:"black",md:"white"},display:"flex" }} onClick={Closebar}><CloseIcon sx={{ color:{xs:"black",sm:"black",md:"white"},mr:"15%" }}/> Close</NavLink>
           </Button>
        </Box>
       :""}

       



     
    <Box sx={{ width: bar ? {xs:"60%",sm:"60%",md:"80%"} : "100%" ,height:"90vh",backgroundColor:"white",ml:"2%",mt:"2%",mb:"0",mr:"2%",borderRadius:"30px",fontWeight:"bold"}}>

       
    <Typography sx={{ fontFamily:"calibri",fontSize:"28px",fontWeight:"bold",display:"flex",justifyContent:"flex-start",alignItems:"center" }}><ChevronLeftIcon/>Notification
    </Typography>


        <Box sx={{ mt:"2%",display:{sm:"block",md:"flex"} }}>
           <Box sx={{ display:"block",width:"100%" }}>
            <Box sx={{ display:"flex",justifyContent:"space-between"}}>
            <Button id='button2' sx={{ display:"flex",mr:"2%"} }> 
                <NavLink style={{ textDecoration:"none",color:"black",fontFamily:"Roboto",fontSize:"20px",display:"flex" }} onClick={Closebar}><MenuIcon sx={{ color:"black",mr:"5%",mt:"5%" }}/> Open</NavLink>
           </Button>
          </Box>
          <Box sx={{ height:"85vh",width:"100%",border:"1px solid white",overflow:"auto"}}>
            {history.map((value,index)=>{return(
              <>
              <React.Fragment key={index}>
              <Box sx={{ display:"flex", justifyContent:"space-around",backgroundColor: value.category ==="Debited"? "#FF9B9B":"lightgreen",m:"10px",borderRadius:"10px" }}>
                <Typography sx={{ display:"flex",justifyContent:"center",m:"10px" }}>{ value.type === "Income" ?<CallMadeIcon sx={{ color:"green" }}/>:<CallReceivedIcon sx={{ color:"red",display:"flex",justifyContent:"center",alignItems:"center" }}/>}{value.type}</Typography>
                <Typography sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>{value.category}</Typography>
                <Typography sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>{value.date}/{value.month}/{value.year}</Typography>
                <Typography sx={{display:"flex",alignItems:"center"}}><CurrencyRupeeIcon sx={{ fontSize:"15px" }} />{value.amount}</Typography>
              </Box>
              </React.Fragment>
                </>
            )})}

            </Box>

   </Box>
   </Box>
   </Box>

</Box> 
  )
}};

export default Notification
