var express = require('express');
const nodemailer = require('nodemailer');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('index');
});

router.get('/home', function(req,res){
  res.render('home')
})

router.post('/mailer',function(req,res){
  
  const mail= req.body.email;
  const message= req.body.message;
  console.log(mail)

  const transporter = nodemailer.createTransport({
    service:"Gmail",
    secure: true,
    auth: {
        user:"anchukariyapath@gmail.com",
        pass:"Anchu@97"

    },
    tls : { rejectUnauthorized: false }

})



const options = {
    from:"anchukariyapath@gmail.com",
    to:mail,
    subject:"Nodemailer",
    text:message
}

transporter.sendMail(options, function(err,info){
    if(err){
        console.log(err);
        res.render('response',{Heading :'Something Went Wrong'})
        return;
    }
    console.log("Sent:" +info.response)
    res.render('response',{Heading :'Mail Sent Successfully'})
})


})

module.exports = router;
