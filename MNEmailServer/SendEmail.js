/**
 * Created by guoyouchao on 16/5/12.
 */
// npm install nodemailer
// var mail = require(‘nodemailer‘);

var nodemailer = require('nodemailer');

var sendEmailPeople = "892466942@qq.com";
var transporter = nodemailer.createTransport({
        host: 'smtp.qq.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: '892466942@qq.com',
            pass: 'xzntxMM323425_'
        }
});

transporter.sendMailTo = function(toemailladdress, sendMessage){
    transporter.sendMail({
        from: '892466942@qq.com',
        to: toemailladdress,
        subject: '生命之源',
        text: sendMessage
    }, function (err, response) {
        console.log(err || response);
    });
};

module.exports = transporter;