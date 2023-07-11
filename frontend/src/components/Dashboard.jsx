import React, { useState,useEffect } from 'react'
import "../style/Home.css"
import date from 'date-and-time';
import {  NavLink, Navigate, useLocation } from "react-router-dom";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import HistoryIcon from '@mui/icons-material/History';
import { registerLicense } from '@syncfusion/ej2-base';
import { useNavigate } from "react-router-dom";
import QuestionMarkSharpIcon from '@mui/icons-material/QuestionMarkSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import { Button, Typography } from '@mui/material';
import axios from "axios"
import PaymentsIcon from '@mui/icons-material/Payments';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import MenuIcon from '@mui/icons-material/Menu';
import CalculateIcon from '@mui/icons-material/Calculate';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { BarSeries, Category, ChartComponent,DataLabel,Inject, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';
import CloseIcon from '@mui/icons-material/Close';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF5cXmVCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWXlceXRQR2hdUkR0WEs=');
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.9),
    '&:hover': {
      backgroundColor: "lightblue",
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const Dashboard = (props) => {

const [authenticated, setauthenticated] = useState(null);

const now  =  new Date();
const year = date.format(now,'YYYY')
const month = date.format(now,'MM')
const dates = date.format(now,"DD")

const [bar,setBar] = useState(true)
const [expenses,setExpenses] = useState([])

useEffect(() => 
{
 axios.get("https://taxbackend.onrender.com/payment").then((response)=>{
  setExpenses(response.data)
})
.catch(error => {
  console.log("error"+error)})
}, [])

const Closebar = ()=>{
  if(bar === false){
    setBar(true)
  }
  else{
    setBar(false)
  }
}

  useEffect(() => {
          const loggedInUser = localStorage.getItem("authenticated");
          setauthenticated(localStorage.getItem("authenticated"))
          console.log(loggedInUser)
        }, []);
      
const [name,setName] = useState([])
useEffect(() => {
  axios
    .get('https://taxbackend.onrender.com/login')
    .then((response) => {
      setName(response.data);
    })
    .catch((error) => console.log('error', error));
}, []);

// const location = useLocation()

const navigate = useNavigate();
if (localStorage.getItem("authenticated") === 'false') 
{
    return <Navigate replace to="/Signin" />;
} 

else {
  const expenditureData = expenses.filter(entry => entry.type === 'Expenditure');

  const totalExpenditure = expenditureData.reduce((sum, entry) => sum + entry.amount, 0);
  
  const jan = expenses.filter(entry => entry.type === 'Expenditure' && entry.month === "01");
  const feb = expenses.filter(entry => entry.type === 'Expenditure' && entry.month === "02");
  const mar = expenses.filter(entry => entry.type === 'Expenditure' && entry.month === "03");
  const apr = expenses.filter(entry => entry.type === 'Expenditure' && entry.month === "04");
  const may = expenses.filter(entry => entry.type === 'Expenditure' && entry.month === "05");
  const jun = expenses.filter(entry => entry.type === 'Expenditure' && entry.month === "06");
  const jul = expenses.filter(entry => entry.type === 'Expenditure' && entry.month === "07");
  const aug = expenses.filter(entry => entry.type === 'Expenditure' && entry.month === "08");
  const sep = expenses.filter(entry => entry.type === 'Expenditure' && entry.month === "09");
  const oct = expenses.filter(entry => entry.type === 'Expenditure' && entry.month === "10");
  const nov = expenses.filter(entry => entry.type === 'Expenditure' && entry.month === "11");
  const dec = expenses.filter(entry => entry.type === 'Expenditure' && entry.month === "12");

  const totaljan = jan.reduce((sum, entry) => sum + entry.amount, 0);
  const totalfeb = feb.reduce((sum, entry) => sum + entry.amount, 0);
  const totalmar = mar.reduce((sum, entry) => sum + entry.amount, 0);
  const totalapr = apr.reduce((sum, entry) => sum + entry.amount, 0);
  const totalmay = may.reduce((sum, entry) => sum + entry.amount, 0);
  const totaljun = jun.reduce((sum, entry) => sum + entry.amount, 0);
  const totaljul = jul.reduce((sum, entry) => sum + entry.amount, 0);
  const totalaug = aug.reduce((sum, entry) => sum + entry.amount, 0);
  const totalsep = sep.reduce((sum, entry) => sum + entry.amount, 0);
  const totaloct = oct.reduce((sum, entry) => sum + entry.amount, 0);
  const totalnov = nov.reduce((sum, entry) => sum + entry.amount, 0);
  const totaldec = dec.reduce((sum, entry) => sum + entry.amount, 0);


  
  const totalExpenditure1 = expenditureData.slice(0, -1).reduce((sum, entry) => sum + entry.amount, 0);

  
  const latestExpenditure = totalExpenditure-totalExpenditure1;

  const incomeData = expenses.filter(entry => entry.type === 'Income');
  const totalincome = incomeData.reduce((sum, entry) => sum + entry.amount, 0);
    


  const taxData= [
    {month:'Jan',taxes:totaljan},
    {month:'Feb',taxes:totalfeb},
    {month:'Mar',taxes:totalmar},
    {month:'Apr',taxes:totalapr},
    {month:'May',taxes:totalmay},
    {month:'Jun',taxes:totaljun},
    {month:'Jul',taxes:totaljul},
    {month:'Aug',taxes:totalaug},
    {month:'Sept',taxes:totalsep},
    {month:'Oct',taxes:totaloct},
    {month:'Nov',taxes:totalnov},
    {month:'Dec',taxes:totaldec}
  ]



    const Logout = () => {
        setauthenticated(false)
        console.log("logout")
        localStorage.setItem("authenticated",false)
        navigate("/Signin");
      }
                // console.log(props.location.state)
  
  return (
    <Box sx={{ display:"flex" }}>
         {bar ? <Box sx={{ width:{xs:"40%",sm:"40%",md:"20%"},height:"100%",backgroundColor:{xs:"white",md:"#8EAC50"},ml:"2%",mt:"2%",mb:"0",mr:"2%",borderRadius:"30px",fontWeight:"bold", }}>

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



     
  <Box sx={{ width: bar ? {xs:"60%",sm:"60%",md:"80%"} : "100%" ,height:"90vh",backgroundColor:"white",ml:"2%",mt:"2%",mb:"0",mr:"2%",borderRadius:"30px",fontWeight:"bold", }}>

        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor:"aliceblue" ,color:"black",borderRadius:"10px",boxShadow:"none",mb:"2%" }}>
        <Toolbar>
        <Button id='button2' sx={{ display:"flex",mr:"2%"} }> 
              <NavLink style={{ textDecoration:"none",color:"black",fontFamily:"Roboto",fontSize:"20px",display:"flex" }} onClick={Closebar}><MenuIcon sx={{ color:"black",mr:"5%",mt:"5%" }}/> Open</NavLink>
           </Button>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none',md:"flex",fontFamily:"calibri",fontSize:"25px",letterSpacing:"2px",fontWeight:"bold" } }}
          >
            Analytic Overview
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>



    <Box sx={{ display:{sm:"block",md:"flex"},width:"100%",height:"100vh" }}>

          <Box style={{ width:"100%"}}>
            <Box sx={{ display:"flex" }}>
                <Card sx={{ width:"100%",ml:"2%",borderRadius:"15px",backgroundColor:"#D0F5BE",borderTopRightRadius:""  }} variant="outlined">
                  <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"35px"}}>
                    {dates}
                  </Typography>
                  <Typography sx={{ color:"green" }}>
                      Date
                  </Typography>
                </Card>

                <Card sx={{ width:"100%",ml:"2%",borderRadius:"15px",backgroundColor:"#99DBF5" }} variant="outlined">
                <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"35px", }}>
                    {month}
                  </Typography>
                  <Typography sx={{ color:"blue" }}>
                      Month
                  </Typography>
                </Card>

                <Card sx={{ width:"100%",ml:"2%",borderRadius:"15px",backgroundColor:"#FFD0D0" }} variant="outlined">
                <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"35px" }}>
                    {year}
                </Typography>
                <Typography sx={{ color:"red" }}>
                    Year
                </Typography>
                </Card>

          </Box>

      <Box sx={{ height:"95%",mt:"2%",width:"100%" }}>
        <ChartComponent title='Taxes Analysis' primaryXAxis={{ valueType:"Category",title:"Month" }} primaryYAxis={{ title:"Taxes" }} tooltip={{ enable:true}}>
            <Inject  services={[BarSeries,Category,DataLabel]}></Inject>
            <SeriesCollectionDirective>
              <SeriesDirective type="Bar" dataSource={taxData} xName='month' yName='taxes' name='taxes' marker={{dataLabel:{visible:true},visible:true}}></SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>
</Box>
    </Box>
   
   

    <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>

        <Card sx={{ width:"100%",ml:"2%",mt:"10px",borderRadius:"15px",backgroundColor:"#FFD0D0" }} variant="outlined">
                <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"25px" }}>
                    Expenses
                </Typography>
               
          <Typography sx={{ color:"red" }}>Total Expense:{totalExpenditure}
              </Typography>
                
        </Card>

        <Card sx={{ width:"100%",ml:"2%",mt:"4%",borderRadius:"15px",backgroundColor:"#FFD0D0", }} variant="outlined">
                <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"25px" }}>
                    Expense
                </Typography>
                <Typography sx={{ color:"red" }}>
                  latestExpense:{latestExpenditure}
                </Typography>
        </Card>

        <Card sx={{ width:"100%",ml:"2%",borderRadius:"15px",mt:"4%",mb:"2%",backgroundColor:"#D0F5BE" }} variant="outlined">
                <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"25px" }}>
                    Income
                </Typography>
                <Typography>
                  Total Income:{totalincome}
                </Typography>
        </Card>

    </Box>
</Box>

</Box>
</Box>
      
   
  )
}};

export default Dashboard
