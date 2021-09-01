const request = require('request');
const cheerio = require('cheerio');

const url = 'http://news.naver.com/main/main.nhn?mode=LSD&mid=shm&sid1=105';
const iconv = require('iconv-lite');

let title;
const arrayTitle = [];

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
	// console.dir(arrayTitle);
};

request({
	uri: url,
	method: 'GET',
	encoding: null,
}, (err, res, body) => {
	const decodedResult = iconv.decode(body, 'euc-kr');
	parse(decodedResult);
});
