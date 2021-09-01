const app = require('express')();
const server = require('http').createServer(app);

/**
 * socket.io 모듈 이벤트
 * 
 * connection() : 웹 소켓 클라이언트가 연결될 때 발생
 * disconnection() : 웹 클라이언트가 연결을 해제할 때 발생
 * 
 * socket.io 모듈 메소드
 * on() : 소켓 이벤트 연결
 * emit() : 소켓 이벤트 발생
 * 
 */

app.get('/', (reuquest, response) => {
	// response.sendFile(`${__dirname}/183_socket_io_client.html`);
	response.sendFile(`${__dirname}/185_socket_event.html`);
});

const io = require('socket.io')(server);

io.on('connection', (client) => {
	console.log('클라이언트 접속');
	client.on('disconnect', () => {
		console.log('클라이언트 접속해지');
	});
});

server.listen(3000, () => {
	console.log('Server is running port 3000!');
});
