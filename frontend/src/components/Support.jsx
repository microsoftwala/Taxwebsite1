import React ,{ useState,useEffect }from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../style/Home.css"
import {  Link, NavLink, Navigate } from "react-router-dom";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import HistoryIcon from '@mui/icons-material/History';
import QuestionMarkSharpIcon from '@mui/icons-material/QuestionMarkSharp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import { Button } from '@mui/material';
import axios from "axios"
import PaymentsIcon from '@mui/icons-material/Payments';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import { useNavigate } from "react-router-dom";
import CalculateIcon from '@mui/icons-material/Calculate';



function Support() {


    const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
          const loggedInUser = localStorage.getItem("authenticated");
          setauthenticated(localStorage.getItem("authenticated"))
          console.log(loggedInUser)
        }, []);
      
const [name,setName] = useState([])
useEffect(() => {
  axios
    .get('/login')
    .then((response) => {
      setName(response.data);
    })
    .catch((error) => console.log('error', error));
}, []);

const navigate = useNavigate();
const [bar,setBar] = useState(true)

const Closebar = ()=>{
    if(bar === false){
      setBar(true)
    }
    else{
      setBar(false)
    }
  }
  

if (localStorage.getItem("authenticated") === 'false') 
{
    return <Navigate replace to="/Signin" />;
} 


    else{
        const Logout = () => {
            setauthenticated(false)
            console.log("hi")
            localStorage.setItem("authenticated",false)
            navigate("/Signin");
                    }
  return (
    <Box sx={{ display:"flex" }}>
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
           <NavLink style={{ textDecoration:"none",color:{xs:"black",sm:"black",md:"white"},display:"flex"  }} to="/calculator"><CalculateIcon sx={{ color:{xs:"black",sm:"black",md:"white"},mr:"15%" }}/> TaxCalculator</NavLink>
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




<Box sx={{ width: bar ? {xs:"60%",sm:"60%",md:"80%"} : "100%" ,height:"95vh",backgroundColor:"white",ml:"2%",mt:"2%",mb:"0",mr:"2%",borderRadius:"30px",fontWeight:"bold", }}>

<Box sx={{ display:"flex",justifyContent:"space-between"}}>
<Button id='button2' sx={{ display:"flex",mr:"2%"} }> 
                <NavLink style={{ textDecoration:"none",color:"black",fontFamily:"Roboto",fontSize:"20px",display:"flex" }} onClick={Closebar}><MenuIcon sx={{ color:"black",mr:"5%",mt:"5%" }}/> Open</NavLink>
           </Button>
                <Typography sx={{ fontSize:"30px",fontFamily:"Roboto",fontWeight:"bold",mr:"10%" }}>Services</Typography>
            </Box>
    <Box sx={{ background:"aliceblue",overflow:"auto",height:"90vh" }}>
    

    <Box sx={{ mt:"1%",border:"2px solid black",ml:"1%",mr:"1%",mb:"3%",borderRadius:"10px",background:"rgb(4 120 87)" }}>

    <Box sx={{ display:"flex",mb:"3%" }}>
    <Box sx={{width:"50%"}}>
      <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"20px",opacity:0.7,ml:"1%",mt:"5%",}}>1- Frequently Asked Questions (FAQs): This section on the website addresses common queries and provides answers to frequently encountered issues. It is a good starting point for finding solutions to common problems.</Typography>
        <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"20px",opacity:0.6 ,ml:"1%",mt:"5%",}}>2- Online Help Center: Websites often have an online help center or support portal where users can search for assistance. This section typically includes user guides, tutorials, troubleshooting tips, and step-by-step instructions to help users navigate the website and address common issues.</Typography>
      </Box>
      <Box sx={{ width:"50%",mt:"3%",ml:"2%"}}>
        <img src="https://storage.googleapis.com/pai-images/e5f2b03bea874250abf34636646058f0.jpeg" style={{
           width:"50%",height:"80%",borderRadius:"50%"
        }} alt=""></img>
      </Box>
    </Box>

  <Box sx={{ display:"flex",mb:"5%" }}>\
  <Box sx={{ float:"right",width:"50%" }}>
      <img src="https://storage.googleapis.com/pai-images/d267745930d44189a38a5890c4dfc7fc.jpeg" style={{ height:"300px",borderRadius:"50%" }} alt=""></img>
    </Box>
    <Box sx={{ 
      width:"50%" 
    }}>
      <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"20px",opacity:0.6 }}>3- Email Support: Many websites offer email support to address specific inquiries or issues. Users can find the contact information or a support email address on the website's support page or in the footer section. Sending an email to this address allows users to communicate their query or concern, and the support team will respond accordingly.</Typography>
      <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"20px",opacity:0.6 }}>4- Live Chat: Some tax tracker websites provide live chat support, enabling users to engage in real-time conversations with support representatives. Live chat is particularly helpful for resolving immediate concerns or obtaining quick answers to specific questions.</Typography>
    </Box>
  </Box>

    <Box sx={{ display:"flex",mb:"1%"}}>
    <Box sx={{ width:"50%",ml:'2%'}}>
      <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"20px",opacity:0.6 }}>5- Phone Support: Certain websites offer phone support for more complex issues or if users prefer speaking directly with a support representative. Users can find the support phone number on the website's support page or contact section.</Typography>
      <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"20px",opacity:0.6 }}>6- Community Forums or User Groups: Some tax tracker websites host online communities or forums where users can interact with each other, ask questions, and seek guidance. These platforms serve as valuable resources for sharing experiences, troubleshooting problems, and finding solutions by engaging with other users.</Typography>
    </Box>
    <Box sx={{ ml:"8%" }}>
      <img src="https://storage.googleapis.com/pai-images/670e57e9ebfc4e93805d6f28814be8d8.jpeg" style={{ height:"300px",borderRadius:"50%",width:"100%" }} alt=""></img>
    </Box>
    </Box>

  </Box>
  </Box>
  </Box>
  </Box>

  )
}
}

export default Support