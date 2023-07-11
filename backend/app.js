require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const mongoose  = require("mongoose")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")
const cors = require('cors');
const bcrypt = require('bcryptjs')


var dates = new Date().getDate()
var month = new Date().getMonth()
var year = new Date().getFullYear()
var time = new Date().toLocaleTimeString()

// const corsOptions ={
//     origin:'https://main--beamish-gnome-ea7495.netlify.app', 
//     credentials:true,           
//     optionSuccessStatus:200
// }
const app = express()
app.use(cors({
    origin: 'https://main--beamish-gnome-ea7495.netlify.app',
    credentials: true
}));

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('public'))
app.use(express.json())

mongoose.connect(process.env.Mongo).then(() => {
    console.log(`CONNECTED TO MONGO!`);
})
.catch((err) => {
    console.log(`OH NO! MONGO CONNECTION ERROR!`);
    console.log(err);
})


const JWT_SECRET = process.env.JWT_Secret

//login schema
const loginSchema = {
    email:String,
    password:String
}


//payment schema
const paymentschema = {
    email:String,
    type:String,
    category:String,
    timestamp:String,
    amount:Number,
    month:String,
    date:String,
    year:String
}



//account detail schema
const accountSchema = {
    email:String,
    amount:Number,
}


//usersignup schema
const userSignupschema = {
    username:String,
    email:String,
    password:String,
    cpassword:String
}

const Login = mongoose.model('Login',loginSchema)
const User = mongoose.model('User',userSignupschema)
const Payment = mongoose.model('Payment',paymentschema)
const Accountdetails = mongoose.model('Account',accountSchema)


let emails =""
let Token = ""
let Emailforreset=""

app.get("/resetPassword/:Emailforreset/:Token",function(req,res){
    res.render("reset")
})



app.get("/dashboard",function(req,res){
    
})




app.post("/passwordchanged",async function(req,res){
    let password = req.body.password
    let cpassword = req.body.cpassword
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const hashedCPassword = await bcrypt.hash(req.body.cpassword, 10);
    console.log(password,cpassword)
    if(password === cpassword){
        console.log(Emailforreset)
        try {
            const update = await User.updateOne({ email: Emailforreset }, {
              $set: {
                password: hashedPassword,
                cpassword: hashedCPassword
              }
            });
            console.warn(update);
            res.render("password");
          } catch (error) {
            console.error(error);
            res.status(500).send("Error occurred while updating the password");
          }
    }
    else{
        res.render("notchanged")
    }
})




app.post("/taxcalculator",function(req,res){
    if(Payment.find({'email':emails}))
    {
        let totalsalary = Number(req.body.totalsalary)
        let investment = Number(req.body.investment)
        let tds = Number(req.body.tds)
        const age = Number(req.body.age)
        let taxableincome = 0;let taxableincomeo=0;
        let slab5 = 0; let slab5o=0;
        let investments = 0;let investmentso=0;
        let slab10 = 0;let slab20o=0;
        let slab15 = 0;let slab30o=0;
        let slab20 = 0;let taxrebateo=0;
        let slab30 = 0;let surcharge10o=0;
        let taxrebate = 0;let surcharge15o=0;
        let surcharge10 = 0;let cesso=0;
        let surcharge15 = 0;let incometaxo=0;
        let cess = 0;let taxrefundo=0;
        let incometax = 0
        let taxrefund = 0

        function Slab5(taxableincome){
            if(taxableincome>300000){
            if(taxableincome>600000){
                return (300000*0.05)
            }
            else {
            return ((taxableincome-300000)*0.05)}}
            return 0
        }

        function Slab5o(taxableincomeo){
            if(taxableincomeo>250000){
                if(taxableincomeo>500000){
                    return (250000*0.05)
                }
                else {
                return ((taxableincomeo-250000)*0.05)}}
                return 0
        }

        function Slab5oo(taxableincomeo){
            if(taxableincomeo>300000){
                if(taxableincomeo>500000){
                    return (200000*0.05)
                }
                else {
                return ((taxableincomeo-300000)*0.05)}}
                return 0
        }

        function Slab10(taxableincome){
            if(taxableincome>600000){
            if(taxableincome>900000){
                return (300000*0.1)
            }
            else{
                return ((taxableincome-600000)*0.1)
            }}
            return 0
        }

        function Slab15(taxableincome){
            if(taxableincome>900000){
            if(taxableincome>1200000){
                return (300000*0.15)
            }
            else{
                return ((taxableincome-900000)*0.15)
            }}
            return 0
        }

        function Slab20(taxableincome){
            if(taxableincome>1200000){
            if(taxableincome>1500000){
                return (300000*0.2)
            }
            else{
                return ((taxableincome-1200000)*0.2)
            }}
            return 0
        }

        function Slab20o(taxableincomeo){
            if(taxableincomeo>500000){
                if(taxableincomeo>1000000){
                    return (500000*0.2)
                }
                else {
                return ((taxableincomeo-500000)*0.2)}}
                return 0
        }

        function Slab30(taxableincome){
            if(taxableincome>1500000){
                return ((taxableincome-1500000)*0.3)
            }
            return 0
        }

        function Slab30o(taxableincomeo){
            if(taxableincomeo>1000000){
                return ((taxableincomeo-1000000)*0.3)
            }
                return 0
        }

        function Taxrebate(slab5,slab10){
            if(slab10 > 10000){
                return 0
            }
            return (slab10+slab5)
        }

        function Taxrebateo(slab20o,slab5o){
            if(slab20o > 0){
                return 0
            }
            return (slab5o)
        }

        function Surcharge10(taxableincome){
            if(taxableincome>10000000){
                return ((10000000-5000000)*0.1)
            }
            else if(taxableincome>5000000){
                return ((taxableincome-5000000)*0.1)
            }
            return 0
        }


        function Surcharge15(taxableincome){
            if(taxableincome>10000000){
                return ((taxableincome-10000000)*0.15)
            }
            return 0
        }


        function Cess(slab5,slab10,slab15,slab20,slab30,surcharge10,surcharge15,taxrebate){
            return((slab5+slab10+slab15+slab20+slab30+surcharge10+surcharge15-taxrebate)*0.04)
        }

        function Incometax(slab5,slab10,slab15,slab20,slab30,surcharge10,surcharge15,cess,taxrebate){
            return (slab5+slab10+slab15+slab20+slab30+surcharge10+surcharge15+cess-taxrebate)
        }

        function Taxrefund(tds,incometax){
            if(tds>incometax){
                let ans = tds-incometax
                return ans
            }
            else{
                return 0
            }
        }
    
        if(age <= 60 ){
            if(investment>=50000){
                investments = 50000
            }
            taxableincomeo = totalsalary-investment
            taxableincome = totalsalary-investments
            console.log("New taxable Income"+taxableincome)
            console.log("Old taxable Income"+taxableincomeo)

            //New Regima
                taxableincome = taxableincome
                slab5 = Slab5(taxableincome)
                slab10 = Slab10(taxableincome)
                slab15 = Slab15(taxableincome)
                slab20 = Slab20(taxableincome)
                slab30 = Slab30(taxableincome)
                taxrebate = Taxrebate(slab5,slab10)
                surcharge10 = Surcharge10(taxableincome)
                surcharge15 = Surcharge15(taxableincome)
                cess = Cess(slab5,slab10,slab15,slab20,slab30,surcharge10,surcharge15,taxrebate)
                incometax = Incometax(slab5,slab10,slab15,slab20,slab30,surcharge10,surcharge15,cess,taxrebate)
                taxrefund = Taxrefund(tds,incometax)
        
                //Old Regima
                taxableincomeo = taxableincomeo
                slab5o = Slab5o(taxableincomeo)
                slab20o = Slab20o(taxableincomeo)
                slab30o = Slab30o(taxableincomeo)
                taxrebateo = Taxrebateo(slab20o,slab5o)
                surcharge10o = Surcharge10(taxableincomeo)
                surcharge15o = Surcharge15(taxableincomeo)
                cesso = Cess(slab5o,0,0,slab20o,slab30o,surcharge10o,surcharge15o,taxrebateo)
                incometaxo = Incometax(slab5o,0,0,slab20o,slab30o,surcharge10o,surcharge15o,cesso,taxrebateo)
                taxrefundo = Taxrefund(tds,incometaxo)
            
            console.log("New "+slab5,slab10,slab15,slab20,slab30,surcharge10,surcharge15,cess,incometax,taxrebate,taxrefund)
            console.log("Old "+slab5o,slab20o,slab30o,surcharge10o,surcharge15o,cesso,incometaxo,taxrebateo,taxrefundo)
        }

        else if(age >= 60 ){
            if(investment>=50000){
                investments = 50000
            }
            taxableincomeo = totalsalary-investment
            taxableincome = totalsalary-investments
            console.log("New taxable Income"+taxableincome)
            console.log("Old taxable Income"+taxableincomeo)

            //New Regima
                taxableincome = taxableincome
                slab5 = Slab5(taxableincome)
                slab10 = Slab10(taxableincome)
                slab15 = Slab15(taxableincome)
                slab20 = Slab20(taxableincome)
                slab30 = Slab30(taxableincome)
                taxrebate = Taxrebate(slab5,slab10)
                surcharge10 = Surcharge10(taxableincome)
                surcharge15 = Surcharge15(taxableincome)
                cess = Cess(slab5,slab10,slab15,slab20,slab30,surcharge10,surcharge15,taxrebate)
                incometax = Incometax(slab5,slab10,slab15,slab20,slab30,surcharge10,surcharge15,cess,taxrebate)
                taxrefund = Taxrefund(tds,incometax)
        
                //Old Regima
                taxableincomeo = taxableincomeo
                slab5o = Slab5oo(taxableincomeo)
                slab20o = Slab20o(taxableincomeo)
                slab30o = Slab30o(taxableincomeo)
                taxrebateo = Taxrebateo(slab20o,slab5o)
                surcharge10o = Surcharge10(taxableincomeo)
                surcharge15o = Surcharge15(taxableincomeo)
                cesso = Cess(slab5o,0,0,slab20o,slab30o,surcharge10o,surcharge15o,taxrebateo)
                incometaxo = Incometax(slab5o,0,0,slab20o,slab30o,surcharge10o,surcharge15o,cesso,taxrebateo)
                taxrefundo = Taxrefund(tds,incometaxo)
            
            console.log("New "+slab5,slab10,slab15,slab20,slab30,surcharge10,surcharge15,cess,incometax,taxrebate,taxrefund)
            console.log("Old "+slab5o,slab20o,slab30o,surcharge10o,surcharge15o,cesso,incometaxo,taxrebateo,taxrefundo)
        }
        context = {"new":{incometax,taxrebate,taxrefund},"old":{incometaxo,taxrebateo,taxrefundo}}
        res.send(context)
    }
})



app.post("/resetemail",function(req,res){
    
    let Email = String(req.body.email)
    User.findOne({'email':Email}).then((data)=>{
        if(data){
           
    let transpoter = nodemailer.createTransport({
        service:"gmail",

        auth:{
            user:"prakhardeoria.2004@gmail.com",
            pass:"fborfbbqzpwwneqg"
        }
    })



    const secret = JWT_SECRET+"user.password"
    const payload = {
        email:Email,
    }

    const token = jwt.sign(payload,secret,{expiresIn:"15m"})
    const start = "https://taxbackend.onrender.com/resetPassword/"
    const link = `${start}${Email}/${token}`
    console.log(link)
    Token = token
    Emailforreset = Email
    let mailOptions = {
        from:"prakhardeoria.2004@gmail.com",
        to:Email,
        subject:"Password Reset Link",
        text:`If you did not request a password reset, please ignore this email or reply to let us know. ${link} This password reset link is only valid for the next 30 minutes.`
    }

    transpoter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log("error"+error)
            res.send("Server Error")
        }
        else{
            console.log("Sent")
            context={
                token:token,
                email:Email
            }
            res.send(context)
        }
    })}

    else{
        res.send("Email not register")
    }
    })

});



app.get("/login",function(req,res){
    User.findOne({'email':emails}).then((data)=>{
        if(data){
            return res.send(data)
        }else{
            return res.send("Error Occur")
        }
    }).catch(error => {
        console.log(error);
        return res.status(500).send("Internal Server Error");
      })
})



app.get("/signups",function(req,res){
    User.find().then((data)=>{
        if(data){
            res.send(data)
        }else{
            res.send("Error Occur")
        }
    })
    .catch(error => {
        console.log(error);
        return res.status(500).send("Internal Server Error");
      })
})



app.post("/signup",async function(req,res){
    
    console.log(req.body)
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const hashedCPassword = await bcrypt.hash(req.body.cpassword, 10);
try {
    const User1 = new User({
        username:req.body.username,
        email:req.body.email,
        password:hashedPassword,
        cpassword:hashedCPassword
    })

    const Payment1 = new Payment({
        email:req.body.email,
        type:'Null',
        category:'Salary',
        timestamp:time,
        amount:0,
        month:month,
        date:dates,
        year:year
    })


    const Accountdetails1 = new Accountdetails({
        email:req.body.email,
        amount:0
    })

       
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
        res.send("You are already register");
    } else {
        if (req.body.password === req.body.cpassword) {
            await User1.save();
            await Payment1.save();
            await Accountdetails1.save();
            res.send("Succesfully Register");
        } else {
            res.send("Password did not matched");
        }
    }
}
catch (error) {
    console.log(error);
    res.send("An error occurred during registration");
}

})



app.post("/login",async function(req,res){
    let email = req.body.email
    emails = req.body.email
    let password = req.body.password
    console.log(req.body)
    const Login1 = new Login({
        email:email,
        password:password
    })

    let hashed_password = ""
    await User.findOne({'email':email}).then((data,err)=>{
        if(data){
           hashed_password = data.password
        }
    })
    const password_check = await bcrypt.compare(password,hashed_password)
   User.findOne({'email':email}).then((data,err)=>{
        if(data){
            if(password_check === true){
        console.log("Successfully Find in db");
        context = "SuccesFully Login"
        Login1.save()
        return res.send(context)
        }
        else{
            context="Your password or email is wrong"
            return res.send(context)
    }}
    else{
        context="Your are not registered"
            return res.send(context)
    }
    })
})



app.post("/payment", async function(req, res) {
    console.log(req.body);
    const email = emails;
    const password = req.body.password;
    const emailto = req.body.emailto;
    let amount = 0;
    let amountto = 0;
    const mang = req.body.amount;

    const Paymentschema1 = new Payment({
        email:email,
        type:"Expenditure",
        category:"Debited",
        timestamp:req.body.time,
        amount:mang,
        month:req.body.month,
        date:req.body.dates,
        year:req.body.year
    })

    const Paymentschema2 = new Payment({
        email:emailto,
        type:"Income",
        category:"Credited",
        timestamp:req.body.time,
        amount:mang,
        month:req.body.month,
        date:req.body.dates,
        year:req.body.year
    })

    try {
        const emailFromData = await User.findOne({ 'email': email });
        if (!emailFromData) {
            const context = "The 'From' email address is incorrect.";
            return res.send(context);
        }

        const emailToData = await User.findOne({ 'email': emailto });
        if (!emailToData) {
            const context = "The 'To' email address is not registered.";
            return res.send(context);
        }

        const hashed_password = emailFromData.password;
        const password_check = await bcrypt.compare(password, hashed_password);

        if (password_check) {
            const accountData = await Accountdetails.findOne({ 'email': email });
            const accountDatato = await Accountdetails.findOne({ 'email': emailto });
            if (accountData) {
                amount = accountData.amount;
                amountto = accountDatato.amount;

                if (amount >= mang) {
                    amount -= mang;
                    let amounts = Number(amountto)+Number(mang);
                    await Accountdetails.updateOne({ email: email }, { $set: { amount: amount } });
                    await Accountdetails.updateOne({ email: emailto }, { $set: { amount: amounts } });
                    const context = "Money has been transferred.";
                    Paymentschema1.save()
                    Paymentschema2.save()
                    return res.send(context);
                } else {
                    const context = "Insufficient amount.";
                    return res.send(context);
                }
            } else {
                const context = "Account details not found.";
                return res.send(context);
            }
        } else {
            const context = "Incorrect password.";
            return res.send(context);
        }
    } catch (error) {
        console.log(error);
        const context = "Internal server error.";
        return res.send(context);
    }
});



app.get("/payment", function(req, res) {
    Payment.find({ email: emails })
      .then(data => {
        return res.send(data);
      })
      .catch(error => {
        console.log(error);
        return res.status(500).send("Internal Server Error");
      });
  });


// app.post("/article/:titleId/:contents",function(req,res){
//     let title = req.params.titleId
//     let content = req.params.contents
//     const Article1 = new Article({
//         title:title,
//         content:content
//     })
//     Article1.save().then((data,err)=>{
//         if(!err)
//         console.log("Successfully added in Db")
//         else
//         console.log(err)
//     })
// })



// app.post("/article/:titleId",function(req,res){
//     Article.deleteMany({'title':req.params.titleId}).then((data,err)=>{
//         if(!err){
//             console.log("Successfully Deleted")
//         }else{
//             console.log(err)
//             console.log("Error happened")
//         }
//     })
// })



// app.get("/login/:titleId",function(req,res){
//     Article.findOne({'title':req.params.titleId}).then((data)=>{
//         if(data){
//             res.send(data.content)
//         }else{
//             res.send("Error Occur")
//         }
//     })
// })

app.listen(4000,function(){
    console.log("Server running")
})
