const schedule = require('node-schedule');

// 특정시간에 한번
// 2017년 12월 16일 오후 19시 27분에 수행할 작업
const date = new Date(2018, 10, 17, 15, 59, 30);

// 2017-12-16T10:27:00.000Z (GMT 0 기준)
console.log(date);

const j = schedule.scheduleJob(date, () => {
  console.log('no pain, no gain');
});

// 매시간마다 한번
const rule = new schedule.RecurrenceRule();
//rule.minute = 1;   //매 시간 1분 마다
rule.second = 1;

const k = schedule.scheduleJob(rule, () => {
  console.log('Laziness is nothing more than the habit of resting before you get tired.');
});

// 작업 취소
// j.cancel();
// k.cancel();
