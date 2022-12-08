const express=require('express');
const router=express.Router();
const cors=require('cors');
const nodemailer=require('nodemailer');

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'))
app.use("/",router);
app.listen(5000,()=>console.log('Server is Running'));

const contactEmail=nodemailer.createTransport({
     host:"mail.ecorvi.com",
     port: 587,
     //secure: false, // upgrade later with STARTTLS
     auth:{
        user:"samatha.kasireddy@ecorvi.com",
        pass:'mich@REG42',
    },
    tls: {
      rejectUnauthorized: false
  }
    /*service: 'gmail',
    auth: {
      user: "samathagamidi@gmail.com",
      pass: "nlvgbpkrwguaglcn",
    },*/
    /*auth: {
        user: "***************@gmail.com",
        pass: "********",
      },*/
});

contactEmail.verify((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Ready to Send")
    }
});

router.post("/", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    console.log("name"+name)
    const mail = {
      from: name,
      //to: "samathagamidi@gmail.com",
      to:"samatha.kasireddy@ecorvi.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    console.log(mail)
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });