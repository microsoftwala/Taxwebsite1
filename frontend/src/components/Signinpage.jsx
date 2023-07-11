import React, { useState } from 'react'
import "../style/Sigin.css"
import axios from "axios"
import { NavLink, useNavigate } from "react-router-dom";

function Signin() {
    // const [dum,setDum]=useState([])

    // axios.get('/article').then((response) => {
    //     setDum(response.data)})
    // .catch((error) => console.log(error));
    const signInBtn = document.getElementById("signIn");
    const signUpBtn = document.getElementById("signUp");
    const fistForm = document.getElementById("form1");
    const secondForm = document.getElementById("form2");
    const container = document.querySelector(".container");
    
    if(signInBtn){
    signInBtn.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
    });
    }
    
    if(signUpBtn){
    signUpBtn.addEventListener("click", () => {
        container.classList.add("right-panel-active");
    });
    }
    
    if(fistForm){
    fistForm.addEventListener("submit", (e) => e.preventDefault());}
    
    if(secondForm){
    secondForm.addEventListener("submit", (e) => e.preventDefault());}
    

    const[data,setData] = useState({
        username:"",email:"",password:"",cpassword:""
    })

    const [login,setLogin] = useState({Email:"",Password:""})
    const [checklogin,setChecklogin] = useState("Login Here")
    const [checkSignup,setChecksignup] = useState("Register Here")
    const [isValue,setIsvalue] = useState(true)
    const [isValues,setIsvalues] = useState(true)
    const navigate = useNavigate();
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| true));


    let name,value;
    const Handleinput = (e)=>{
        name = e.target.name
        value = e.target.value
        setData({...data, [name]:value})
    }

    const Handlelogininput = (e)=>{
        name = e.target.name
        value = e.target.value
        // console.log(name,value)
        setLogin({...login, [name]:value})
    }

    const Postdata = async(e)=>{
        e.preventDefault()
        const { username, email, password, cpassword }= data
        axios.post("/signup",{
            username:username,
            email:email,
            password:password,
            cpassword:cpassword
        })
        .then((res)=>{
        console.log(res.data);
        setChecksignup(res.data);
        
        if(res.data === "Succesfully Register"){
            setIsvalues(false)
        }else{
            setIsvalues(true)
        }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const Postlogindata = async(e)=>{
        e.preventDefault()
        const { Email, Password } = login
        axios.post("/login",{
            email:Email,
            password:Password
        })
        .then((res)=>{
            console.log(res.data);
            setChecklogin(res.data);
            if(res.data === "Your password or email is wrong"){
                setIsvalue(true)
            }
            else{
                setIsvalue(false)
                setauthenticated(true)
                localStorage.setItem("authenticated", true);
                navigate("/dashboard");
            }
        })
        .catch((err)=>{
            console.log(err)
        })}


        

  return (
    <div className='con'>
    <div className="container right-panel-active">
	<div className="container__form container--signup">
		<form onSubmit={Postdata} className="form" id="form1" style={{width:"100%",overflow:"auto",paddingTop:"120px", paddingBottom:"50px"}}>
			<h2 className="form__title" ><NavLink to="/" style={{ textDecoration:"none",marginRight:"15px",fontFamily:"Roboto" }}>Back</NavLink>Sign Up</h2>
            <h3 className="form__title" style={{backgroundColor :isValues ?"red":"green",
            borderRadius:"5px",padding:"5px"
            }}>
            {checkSignup}
            </h3>
			<input type="text" placeholder="Username" className="input" name="username" value={data.username} onChange={Handleinput} required/>
			<input type="email" placeholder="Email" className="input" name="email" value={data.email} onChange={Handleinput} required/>
			<input type="password" placeholder="Password" className="input" name="password" value={data.password} onChange={Handleinput} required/>
			<input type="password" placeholder="Confirm Password" className="input" name="cpassword" value={data.cpassword} onChange={Handleinput} required/>
			<input type="submit" className="btn"/>
		</form>
	</div>


    <div className="container__form container--signin">
		<form onSubmit={Postlogindata} className="form" id="form2">
			<h2 className="form__title"><NavLink to="/" style={{ textDecoration:"none",marginRight:"15px",fontFamily:"Roboto" }}>Back</NavLink>Sign In</h2>
			<h3 className="form__title" style={{backgroundColor :isValue ?"red":"green",
            borderRadius:"5px",padding:"3px"
            }}>
            {checklogin}
            </h3>

			<input type="email" placeholder="Email" className="input" name="Email" value={login.Email} onChange={Handlelogininput} required/>
			<input type="password" placeholder="Confirm Password" className="input" name="Password" value={login.Password} onChange={Handlelogininput} required/>
			<input type="submit" className="btn input"/>
            <NavLink to="/forget" style={{ textDecoration:"none"}}>Forget password...</NavLink>
		</form>
	</div>



	<div className="container__overlay">
		<div className="overlay">
			<div className="overlay__panel overlay--left">
				<button className="btn" id="signIn">Sign In</button>
			</div>
			<div className="overlay__panel overlay--right">
				<button className="btn" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
{/* {dum.map((value,index)=>{return(
    <>
        <h1>{value.title}</h1>
    </>
)})} */}
</div>
  )
}

export default Signin