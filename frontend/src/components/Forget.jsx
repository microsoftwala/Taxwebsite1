import React,{ useState } from 'react'
import {  Typography,Box } from '@mui/material';
import "../style/Sigin.css"
import axios from "axios"
import VpnKeyIcon from '@mui/icons-material/VpnKey';

function Forget() {
    const [data,setData] = useState({email:""})
    const [isValue,setIsvalue] = useState(true)
    const [isEmail,setIsEmail] = useState("forget password")
    const [isData,setIsData] = useState({email:"",token:""})

    let name,value
    const Handleinput = (e) => {
        name = e.target.name
        value = e.target.value
        console.log(name,value)
        setData({...data, [name]:value})
    }

    const Email = async (e)=>{
        e.preventDefault()
        const { email } = data
        axios.post("/resetemail",{
            email:email,
        })
        .then((res)=>{
        setIsData({email:res.data.email,token:res.data.token})
        if(res.data === 'Server Error'){
            setIsEmail("Internel Server Error")
            setIsvalue(true)
        }
        else if(res.data === "Email not register"){
            setIsEmail("Email Not Register")
            setIsvalue(true)
        }
        else{
            
            setIsEmail("Email has been sent")
            setIsvalue(false)
        }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <Box sx={{ width:"75%",height:"75%",backgroundColor:"aliceblue",ml:"13%",mt:{xs:"25%",sm:"12%",md:"7%"},borderRadius:"10px" }}>
        <VpnKeyIcon sx={{ fontSize:"30px" }}/>
        <Typography sx={{ fontFamily:"Roboto",fontSize:"35px" }}>
            Forget Password ?
        </Typography>
        <Typography sx={{ fontFamily:"Roboto" }} >
            No worries, we'll send you reset instructions.
        </Typography>
        <form onSubmit={Email} className="form" id="form1" >
        <h3 className="form__title" style={{backgroundColor :isValue ?"red":"green",
            borderRadius:"5px",padding:"5px",marginTop:"5px"
            }}>
            {isEmail}
            </h3>
            <label for="email" style={{ fontFamily:"Roboto",fontSize:"20px",marginTop:"2%"}}>Email</label>
            <input type="email" placeholder="Enter Your Register Email"  name="email"  required  onChange={Handleinput} className="inputs" />
            <input type="submit" className="btn" style={{ marginBottom:"5%"}}/>
        </form>
    </Box>
  )
}

export default Forget