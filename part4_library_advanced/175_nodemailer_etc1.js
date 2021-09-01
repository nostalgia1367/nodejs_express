const nodemailer = require('nodemailer');
const smtpPool = require('nodemailer-smtp-pool');
// smtpPool는 smtp서버를 사용하기 위한 모듈로
// transporter객체를 만드는 nodemailer의 createTransport메소드의 인자로 사용된다.


// 수신 메일(IMAP) 서버 – SSL 필요
// imap.gmail.com
// 포트: 993
// SSL 필요: 예
// 발신 메일(SMTP) 서버 – TLS 필요
// smtp.gmail.com
// 포트: 465 또는 587
// SSL 필요: 예
// 인증 필요: 예
// 받는 메일 서버와 동일한 설정 사용



const config = {
  mailer: {
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: '465', //보안에 따라서 465, 587
    secure : true,
    user: 'test@gmail.com',
    password: '############',
  },
};

const from = '금수저 < test@gmail.com >';
const to = 'test@gmail.com';
const subject = '안늉하세요..[평문테스트]';
//const html = '<p>헬로우 쵸쵸리나</p>';
const text = 'This is just text.';

const mailOptions = {
  from,
  to,
  subject,
  html,
  // text,
};
// 본문에 html이나 text를 사용할 수 있다.

const transporter = nodemailer.createTransport(smtpPool({
  service: config.mailer.service,
  host: config.mailer.host,
  port: config.mailer.port,
  auth: {
    user: config.mailer.user,
    pass: config.mailer.password,
  },
  tls: {
    rejectUnauthorize: false,
  },
  maxConnections: 5,
  maxMessages: 10,
}));

// 메일을 전송하는 부분
transporter.sendMail(mailOptions, (err, res) => {
  if (err) {
    console.log('failed... => ', err);
  } else {
    console.log('succeed... => ', res);
  }

  transporter.close();
});

/*
메일이 전송되지 않는 경우
메일이 전송되지 않는 경우는 대부분 보안 문제때문 일 것이다.
메일을 다른 앱을 통해 사용할 수 있도록 설정을 바꾸면 된다.

Gmail의 경우 https://myaccount.google.com/lesssecureapps에서 설정을 변경하면 될 것이다.
*/

/**
 * 
 * 참고 URL 
 * https://nodemailer.com/message/
 */
