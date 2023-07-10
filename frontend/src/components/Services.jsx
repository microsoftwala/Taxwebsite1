import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



function Services() {
  return (
    <Box sx={{ background:"aliceblue" }}>
    
       <Typography sx={{ fontSize:"30px",fontFamily:"Roboto",fontWeight:"bold" }}>Services</Typography>

    <Box sx={{ mt:"1%",border:"2px solid black",ml:"1%",mr:"1%",mb:"3%",borderRadius:"10px",background:"lightblue" }}>

    <Box sx={{ display:"flex",mb:"3%" }}>
    <Box sx={{width:"50%"}}>
      <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"20px",opacity:0.7,ml:"1%",mt:"5%",}}>1- Tax Filing: The website may offer a platform where you can electronically file your tax returns. This service can be available for various types of tax returns, such as income tax, sales tax, property tax, etc.</Typography>
        <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"20px",opacity:0.6 ,ml:"1%",mt:"5%",}}>2- Tax Calculators: The website may provide online tax calculators to help you estimate your tax liability or refund based on your income, deductions, and other relevant factors. These calculators can be useful for planning purposes.</Typography>
      </Box>
      <Box sx={{ width:"50%",mt:"3%",ml:"2%"}}>
        <img src="https://storage.googleapis.com/pai-images/e5f2b03bea874250abf34636646058f0.jpeg" style={{
           width:"50%",height:"80%",borderRadius:"50%"
        }} alt=""></img>
      </Box>
    </Box>

  <Box sx={{ display:"flex",mb:"5%" }}>\
  <Box sx={{ float:"right",width:"50%" }}>
      <img src="https://storage.googleapis.com/pai-images/d267745930d44189a38a5890c4dfc7fc.jpeg" style={{ height:"300px",borderRadius:"50%" }}></img>
    </Box>
    <Box sx={{ 
      width:"50%" 
    }}>
      <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"20px",opacity:0.6 }}>3- Tax Planning Tools: Advanced tax websites may offer tools or software that help with tax planning. These tools can help you optimize your tax strategy, identify potential deductions or credits, and plan your financial decisions accordingly.</Typography>
      <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"20px",opacity:0.6 }}>4- Tax Professionals Directory: Websites may have directories or search tools to help you find tax professionals, such as certified public accountants (CPAs) or tax attorneys, in your area. These directories can be useful if you need professional assistance with your tax matters.</Typography>
    </Box>
  </Box>

    <Box sx={{ display:"flex",mb:"1%"}}>
    <Box sx={{ width:"50%",ml:'2%'}}>
      <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"20px",opacity:0.6 }}>5- Refund Tracking: If you have filed your tax return and are expecting a refund, the website may have a feature that allows you to track the status of your refund. You can enter your details and check the progress of your refund.</Typography>
      <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"20px",opacity:0.6 }}>6- Tax Information and Guidance: Websites may offer articles, guides, FAQs, and other resources to help you understand tax laws, regulations, and best practices. They may cover various tax topics, such as deductions, credits, exemptions, and changes in tax laws.</Typography>
    </Box>
    <Box sx={{ ml:"8%" }}>
      <img src="https://storage.googleapis.com/pai-images/670e57e9ebfc4e93805d6f28814be8d8.jpeg" style={{ height:"300px",borderRadius:"50%",width:"100%" }}></img>
    </Box>
    </Box>

  </Box>
  </Box>

  )
}

export default Services