const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
const transporter = nodemailer.createTransport({
	service: "Gmail",
	host: "smtp.gmail.com",
	port: "465", //보안에 따라서 465, 587
	secure : true,
	auth: {
		user: "test@gmail.com",
		pass: "############",
	},
});

// setup email data with unicode symbols
const mailOptions = {
	from: "test@gmail.com", // sender address
	to: "visual-track@hanmail.net", // list of receivers
	subject: "Hello ✔", // Subject line
	text: "Hello world?", // plain text body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, response) => {
	if (error) {
		console.log(error);
	} else {
		console.log(`Message sent(response): ${response.response}`);
		console.log(`Message sent(message): ${response.message}`);
	}
	transporter.close();
});


/**
 *
 * 참고 URL
 * https://nodemailer.com/message/
 */
