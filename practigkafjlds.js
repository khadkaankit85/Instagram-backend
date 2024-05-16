var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'emailfromprojectankit@gmail.com',
        pass: 'fode lipz mngd llsx'
    }
});

var mailOptions = {
    from: 'emailfromprojectankit@gmail.com',
    to: 'khadkaankit85@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail({
    to: "khadkaankit85@gmail.com"
}, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});