const app = require('express')();
const server = require('http').createServer(app);

app.get('/', (reuquest, response) => {
	response.sendFile(`${__dirname}/185_socket_event.html`);
});

const io = require('socket.io')(server);

io.on('connection', (client) => {
	console.log('클라이언트 접속');

	// 이벤트 연결 및 전달
	client.on('clientmsg', (data) => {
		console.log('클라이언트로부터 온 데이터:', data);
		client.emit('msg', data);
	});

	// 이벤트 연결 및 전달
	client.on('status', () => {
		console.log('Status event(Server)');
		setInterval(() => {
			client.emit('msg2', '3초 마다 Interval 발생');
		}, 3000);
	});
});

server.listen(3000, () => {
	console.log('Server is running port 3000!');
});
