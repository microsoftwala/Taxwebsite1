import React from 'react'
import axios from "axios"
import "../style/Sigin.css"
import HistoryIcon from '@mui/icons-material/History';
import FlipIcon from '@mui/icons-material/Flip';
import { useEffect, useState } from "react"
import { NavLink, useNavigate, Navigate } from "react-router-dom";
import { AccumulationChartComponent, AccumulationDataLabel, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PieSeries,AccumulationLegend,AccumulationTooltip} from '@syncfusion/ej2-react-charts';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import CalculateIcon from '@mui/icons-material/Calculate';
import QuestionMarkSharpIcon from '@mui/icons-material/QuestionMarkSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import PaymentsIcon from '@mui/icons-material/Payments';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Typography,Box } from '@mui/material';




function Taxcalculator() {
    const [authenticated, setauthenticated] = useState(null);
    const navigate = useNavigate();
  // useEffect(() => {
  //         const loggedInUser = localStorage.getItem("authenticated");
  //         setauthenticated(localStorage.getItem("authenticated"))
  //         console.log(loggedInUser)
  //       }, []);


        const [bar,setBar] = useState(true)
        const [cal,setCal] = useState(true)

        const Closebar = ()=>{
          if(bar === false){
            setBar(true)
          }
          else{
            setBar(false)
          }
        }

        const Taxswitcher = ()=>{
          if(cal === true){
            setCal(false)
          }
          else{
            setCal(true)
          }
        }

        const [name,setName] = useState([])
        axios.get('/login')
       .then((response) => {
           setName(response.data)})
       .catch((error) => console.log(error))        


       const [data,setData] = useState({Totalsalary:"",Investment:"",TDS:"",Age:""})
       const [ntax,setNtax] = useState({Incometax:"33",Taxrebate:"33",Taxrefund:"33"})
       const [otax,setOtax] = useState({Incometax:"33",Taxrebate:"33",Taxrefund:"33"})

        let value,Name

       const Handleinput = (e)=>{
            Name = e.target.name
            value = e.target.value
            setData({...data, [Name]:value})
        }

       const handleData = async (e) =>{
           e.preventDefault()
           const { Totalsalary,Investment,TDS,Age } = data
           await axios.post("/taxcalculator",{
            totalsalary:Totalsalary,
            investment:Investment,
            tds:TDS,
            age:Age
            })
        .then((res)=>{
        console.log(res.data.old["incometax"])
        setNtax({
          Incometax:res.data.new["incometax"],
          Taxrebate:res.data.new["taxrebate"],
          Taxrefund:res.data.new["taxrefund"]
        })
        setOtax({
          Incometax:res.data.old["incometaxo"],
          Taxrebate:res.data.old["taxrebateo"],
          Taxrefund:res.data.old["taxrefundo"]
        })
         })
        .catch((err)=>{
            console.log(err)
        })
       }


    const Piedatao = 
    [
        { x: 'IncomeTax', y:otax["Incometax"] , text: 'IncomeTax', fill: '#0073DC' },
        { x: 'Taxrebate', y: otax["Taxrebate"], text: 'Taxrebate', fill: '#0D98FF' },  
        { x: 'Taxrefund', y: otax["Taxrefund"], text: 'Taxrefund', fill: '#0450C2' }
    ]
    const Piedatan = 
    [
        { x: 'IncomeTax', y:ntax["Incometax"] , text: 'IncomeTax', fill: '#0073DC' },
        { x: 'Taxrebate', y: ntax["Taxrebate"], text: 'Taxrebate', fill: '#0D98FF' },  
        { x: 'Taxrefund', y: ntax["Taxrefund"], text: 'Taxrefund', fill: '#0450C2' }
    ]

// if (localStorage.getItem("authenticated") === 'false') {
//             return <Navigate replace to="/Signin" />;
//  } 


// else {

    const Logout = () => {
        setauthenticated(false)
        localStorage.setItem("authenticated",false)
        navigate("/Signin");
    }


  return (
    <Box sx={{ display:"flex"}}>
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


       <Box sx={{ width: bar ? {xs:"60%",sm:"60%",md:"80%"} : "100%" ,height:"90vh",backgroundColor:"white",ml:"2%",mt:"2%",mb:"0",mr:"2%",borderRadius:"30px",fontWeight:"bold"}}>

       <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor:"aliceblue" ,color:"black",borderRadius:"10px",boxShadow:"none",mb:"2%", }}>
                <Toolbar>
                <Button id='button2' sx={{ display:"flex",mr:"2%"} }> 
                    <NavLink style={{ textDecoration:"none",color:"black",fontFamily:"Roboto",fontSize:"20px",display:"flex" }} onClick={Closebar}><MenuIcon sx={{ color:"black",mr:"5%",mt:"5%" }}/> Open</NavLink>
                </Button>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex',fontFamily:"calibri",fontSize:"25px",letterSpacing:"2px",fontWeight:"bold" } }}
                >
                    Tax calculator
                </Typography>
             </Toolbar>
         </AppBar>
        </Box>

        <Box>
            <form onSubmit={handleData} className="form" id="form1" style={{ borderRadius:"20px",paddingTop:"2%" }}>
            
            <input type="text" placeholder="Total Income" className="input" name="Totalsalary" value={data.Totalsalary} onChange={Handleinput} required/>

            
            <input type="text" placeholder="Investment" className="input" name="Investment" value={data.Investment} onChange={Handleinput} required/>

            
            <input type="text" placeholder="TDS"  className="input" name="TDS" value={data.TDS} onChange={Handleinput} required/>

            <input type="text" placeholder="Age"  className="input" name="Age" value={data.Age} onChange={Handleinput} required/>

            <input type="submit" className="btn1"/>
            </form>
        </Box>

      <Box sx={{ display:{xs:"block",sm:"block",md:"flex" } }}>

        <Button id='button2' sx={{ color:"black",fontFamily:"Calibri",fontSize:"13px",paddingRight:"30px",paddingLeft:"20px",mb:"10px"} }> 
                <NavLink style={{ textDecoration:"none",color:{xs:"black",sm:"black",md:"white"},display:"flex" }} onClick={Taxswitcher}><FlipIcon sx={{ color:{xs:"black",sm:"black",md:"black"},mr:"15%" }}/> {cal? "New Regima":"Old regima"}</NavLink>
        </Button>

        <Box sx={{ width:"100%",ml:"2%",height:{ sm:"300px",md:"300px"},color:"black"}}>

            {cal ? 
            <AccumulationChartComponent id='charts' title='Expense Chart' legendSettings={{position:"Bottom"}} tooltip={{enable:true}}>
                <Inject services={[PieSeries,AccumulationDataLabel,AccumulationLegend,AccumulationTooltip]} />
                <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={Piedatan} xName='x' yName='y' type='Pie' dataLabel={{ visible:true,name:"text",position:"Outside"}} innerRadius='50%' />
                </AccumulationSeriesCollectionDirective>
               </AccumulationChartComponent>
                :
                <AccumulationChartComponent id='charts' title='Expense Chart' legendSettings={{position:"Bottom"}} tooltip={{enable:true}}>
                <Inject services={[PieSeries,AccumulationDataLabel,AccumulationLegend,AccumulationTooltip]} />
                <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={Piedatao} xName='x' yName='y' type='Pie' dataLabel={{ visible:true,name:"text",position:"Outside"}} innerRadius='50%' />
                </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>}
              
                {cal ? 
                <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold"}}>
                Incometax:{ntax["Incometax"]},
                Taxrebate:{ntax["Taxrebate"]},
                Taxrefund:{ntax["Taxrefund"]}
                </Typography>
                :
                <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold"}}>
                Incometax:{otax["Incometax"]},
                Taxrebate:{otax["Taxrebate"]},
                Taxrefund:{otax["Taxrefund"]}
                </Typography>}
              </Box>
           </Box>

    </Box>
    </Box>
  )
}


export default Taxcalculator