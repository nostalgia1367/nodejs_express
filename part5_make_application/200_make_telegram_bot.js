const Bot = require('node-telegram-bot-api');

const bot = new Bot('784557240:AAGe56MtJuu4nHHVbibD9-4aHo8Hc1QkhZg', { polling: true });

const onChatMessage = (msg) => {
	const chatId = msg.chat.id;
	bot.sendMessage(chatId, '[금수저AI] 헬로우....', {
		disable_notification: true,
	}).then(() => {
		console.log('답글을 달았습니다.');
	});
};

bot.on('message', (msg) => {
	console.log(msg);
	if (msg.text) {
		return onChatMessage(msg);
	}
});


//내 API : 784557240:AAGe56MtJuu4nHHVbibD9-4aHo8Hc1QkhZg
// https://api.telegram.org/bot[API]/getUpdates
// https://api.telegram.org/bot784557240:AAGe56MtJuu4nHHVbibD9-4aHo8Hc1QkhZg/getUpdates
// https://api.telegram.org/bot784557240:AAGe56MtJuu4nHHVbibD9-4aHo8Hc1QkhZg/sendMessage?chat_id=test&text=ㅋㅋㅋ
