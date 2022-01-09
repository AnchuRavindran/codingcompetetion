const nodemailer = require('nodemailer');
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
    to:"anchukarayappath@gmail.com",
    subject:"Nodemailer",
    text:" It's working!!!!"
}

transporter.sendMail(options, function(err,info){
    if(err){
        console.log(err);
        return;
    }
    console.log("Sent:" +info.response)
})