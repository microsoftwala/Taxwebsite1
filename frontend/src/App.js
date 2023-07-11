import './App.css';
import React from "react"
import {
  Routes,
  Route,
} from "react-router-dom";
import Signin from './components/Signinpage';
import About from './components/About';
import Home from './components/Home';
import Services from './components/Services';
import Casestudy from './components/Casestudy';
import Ourprocess from './components/Ourprocess';
import Dashboard from './components/Dashboard';
import Payments from './components/Payments';
import Payment from './components/Payment';
import Notification from './components/Notification';
import Support from './components/Support';
import Forget from './components/Forget';
import Taxcalculator from './components/Taxcalculator';
import TaxData from './components/taxData';

function App() {

  // const[user,setUser] = useState([])

  // useEffect(()=>{
  //   fetch('/article')
  //   .then((res)=>{return res.json()})
  //   .then((data)=>{setUser(data)})
  // },[])


  return (

    <div className="App">
    <Routes>
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Services/>} />
        <Route path="/casestudy" element={<Casestudy/>} />
        <Route path="/process" element={<Ourprocess/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/paymenthistory" element={<Payments/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/notification" element={<Notification/>} />
        <Route path="/forget" element={<Forget/>} />
        <Route path="/calculator" element={<Taxcalculator/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/tax" element={<TaxData />} />
        
    </Routes>
    </div>
  );
}

export default App;
