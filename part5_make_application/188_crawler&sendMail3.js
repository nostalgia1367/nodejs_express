const request = require('request');
const cheerio = require('cheerio');
const nodemailer = require('nodemailer');

const url = 'http://news.naver.com/main/main.nhn?mode=LSD&mid=shm&sid1=105';
const iconv = require('iconv-lite');

const date = new Date(); // 날짜

let title;
const arrayTitle = [];

function sendMail(arHeadline) {
	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: '##############@gmail.com',
			pass: '###################',
		},
	});

	// setup email data with unicode symbols
	const mailOptions = {
		from: 'test@gmail.com', // sender address
		to: 'test@gmail.com', // list of receivers
		subject: `금수저 ${date.toLocaleDateString()} Today News Bot`, // Subject line
		// html body
		html: `${`<h1>금수저 ${date.toLocaleDateString()} 실시간 뉴스 헤드라인</h1><h2>${arHeadline}</h2><br/>
    <a href="http://jframework.co.kr/">` +
        '<img src="data:image/png;base64,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"/></p></a>'}`
		,
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
		} else {
			console.log(`Message sent: ${info.response}`);
		}
		transporter.close();
	});
}

const parse = (decodedResult) => {
	const $ = cheerio.load(decodedResult);
	// const titles = $('dl.sphoto1').find('a');
	const titles = $('div.cluster_text').find('a');
	

	for (let i = 0; i < titles.length; i += 1) {
		title = $(titles[i]).text();
		
		if(title.length > 150){
			continue;
		}
    
		arrayTitle[i] = "<div><a href="+$(titles[i]).attr('href')+">"+title.trim()+"</a><div>";
    
		console.log(arrayTitle[i]);

	}
	return arrayTitle;
};

request({
	uri: url,
	method: 'GET',
	encoding: null,
}, (err, res, body) => {
	const decodedResult = iconv.decode(body, 'euc-kr');
	const arTitles = parse(decodedResult);
	sendMail(arTitles);
});
