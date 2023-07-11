import "../style/Payment.css" 
import axios from "axios";
import React,{ useState,useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import date from 'date-and-time';
import HistoryIcon from '@mui/icons-material/History';
import { NavLink, useNavigate, Navigate } from "react-router-dom";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import CalculateIcon from '@mui/icons-material/Calculate';
import QuestionMarkSharpIcon from '@mui/icons-material/QuestionMarkSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import PaymentsIcon from '@mui/icons-material/Payments';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Typography,Box } from '@mui/material';




const Payment = () => {
  const[userReg, setUserReg] = useState({
    emailto:"",
    amount:"",
    password:""
  });

const now  =  new Date();
  
let dates = date.format(now,'DD');
let month = date.format(now,'MM');
let year = date.format(now,'YYYY');
let time = date.format(now,'HH:mm:ss');

let names =""
let value = ""
const [data,setData] = useState()
const [color,setColor] = useState(true)

  const Handleinput = (e) => {
    names = e.target.name;
    value = e.target.value
    //  console.log(names,value)
    setUserReg({...userReg, [names]:value})
  }


  const handleInput = (e) =>{
      e.preventDefault();
     const {emailto,amount,password} = userReg

      axios.post("https://taxbackend.onrender.com/payment",{
        emailto:emailto,
        amount:amount,
        password:password,
        dates:dates,
        month:month,
        year:year,
        time:time
      })
      .then((res)=>{
        console.log(res.data);
        setData(res.data)
        if(res.data === "Money has been transferred."){
            setColor(false)
        }
        else{
            setColor(true)
        }
        })
        .catch((err)=>{
            console.log(err)
        })
  }

  const [authenticated, setauthenticated] = useState(null);
  const navigate = useNavigate();
    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem("authenticated");
    //     setauthenticated(localStorage.getItem("authenticated"))
    //     // console.log(loggedInUser)
    //   }, []);

      const [name,setName] = useState([])
      useEffect(() => {
        axios
          .get('https://taxbackend.onrender.com/login')
          .then((response) => {
            setName(response.data);
          })
          .catch((error) => console.log('error', error));
      }, []);  

     const [bar,setBar] = useState(true)

     const Closebar = ()=>{
       if(bar === false){
         setBar(true)
       }
       else{
         setBar(false)
       }
     }

      if (localStorage.getItem("authenticated") === 'false') {
        return <Navigate replace to="/Signin" />;
} 


else {

    const Logout = () => {
        setauthenticated(false)
        localStorage.setItem("authenticated",false)
        navigate("/Signin");
    }

    return  (

        <Box sx={{ display:"flex",mb:"4%"}}>
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


       <Box sx={{ width: bar ? {xs:"60%",sm:"60%",md:"80%"} : "100%" ,height:"90vh",backgroundColor:"white",ml:"2%",mt:"1%",mb:"5%",mr:"2%",borderRadius:"30px",fontWeight:"bold"}}>

       <Typography sx={{ fontFamily:"calibri",fontSize:"28px",fontWeight:"bold",display:"flex",justifyContent:"flex-start",alignItems:"center" }}><ChevronLeftIcon/>Payment
    </Typography>


        <Box sx={{ mt:"2%",display:{sm:"block",md:"flex"} }}>
           <Box sx={{ display:"block",width:"100%" }}>
            <Box sx={{ display:"flex",justifyContent:"space-between"}}>
            <Button id='button2' sx={{ display:"flex",mr:"2%"} }> 
                <NavLink style={{ textDecoration:"none",color:"black",fontFamily:"Roboto",fontSize:"20px",display:"flex" }} onClick={Closebar}><MenuIcon sx={{ color:"black",mr:"5%",mt:"5%" }}/> Open</NavLink>
           </Button>
                <Typography sx={{ display:{xs:"none",sm:"none",md:"block" },fontSize:"20px",fontWeight:"bold",fontFamily:"Roboto" }}>Transactions
                </Typography>
            </Box>
          </Box>
        </Box>
        <p style={{ backgroundColor:color?"red":"green" }}>{data}</p>
      <Box sx={{ mt:'25px', ml:'auto' ,mr:"auto", backgroundColor:'white', width:"100%",border:"1px solid white",overflow:"auto"}} className="container" >
        <form method="post" onSubmit={handleInput}>
                <legend>
                    <h1 class="main_heading">Payment Form</h1>
                </legend>
                <hr />
                <h2>Contact Information</h2>
  
        <p>Email(to): <input type="email" name="emailto" required placeholder="email@gmail.com" value={userReg.emailto} onChange={Handleinput}/></p>

        <legend><h2>Payment Information</h2></legend>
        <hr />
        <p>Amount <input type="number" name="amount"  required placeholder="amount" value={userReg.amount} onChange={Handleinput}/></p>
        <p>Password <input type="password" name="password" id="cvv" required placeholder="123" value={userReg.password} onChange={Handleinput}/></p>
        <input type="button" value="Pay Now" onClick={handleInput}/>
    </form>
        </Box>
      </Box>
      </Box>
    )
    }
}

export default Payment;
