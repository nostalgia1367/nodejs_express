const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "Gmail",
	auth: {
		user: "test@gmail.com",
		pass: "############",
	},
});

// setup email data with unicode symbols
const mailOptions = {

	from: "test@gmail.com", // sender address
	to: "test@gmail.com", // list of receivers
	subject: "node.js 파일첨부 테스트", // Subject line
	// text: 'Hello world?', // plain text body

	// html body
	html: "<h1>Hello Attachment</h1><a href=\"http://www.infopub.co.kr\">" +
    "<img src=\"http://www.nodemailer.com/images/gopher-404.jpg\"/></p></a>",

	// attachment configuration
	attachments: [
		{
			// filename: "attachment_test.xlsx",
			filename: "newyork123.jpg",
			path: "/Users/nostalgia/Documents/workspace-sts/nodejs200/part4_library_advanced/newyork.jpg"
		},
	],
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
	if (error) {
		console.log(error);
	} else {
		console.log(`Message sent: ${info.response}`);
		console.log(mailOptions.attachments);
	}
	transporter.close();
});

/**
 * 
 * 참고 URL 
 * https://nodemailer.com/message/
 */
