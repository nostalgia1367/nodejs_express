var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport( {  
	service: "Gmail",
	host: "smtp.gmail.com",
	port: "465", //보안에 따라서 465, 587
	secure : true,
	auth: {
		user: "test@gmail.com",
		pass: "############"
	}
});

var mailOptions = {  
	from: "금수저 <test@gmail.com>",
	to: "visual-track@hanmail.net",
	subject: "HTML 테스트",
	// text: '평문 보내기 테스트 '
	html:"<h1>HTML 보내기 테스트</h1><p><img src=\"http://www.nodemailer.com/images/gopher-404.jpg\"/></p>"
};

smtpTransport.sendMail(mailOptions, function(error, response){

	if (error){
		console.log(error);
	} else {
		console.log("Message sent : " + response.response);
	}
	smtpTransport.close();
});

/**
 * 
 * 참고 URL 
 * https://nodemailer.com/message/
 */
