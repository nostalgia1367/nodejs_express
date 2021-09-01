const fs = require('fs');

const userList = [
  { name: '짱구', age: 70 },
  { name: '코난', age: 55 }
];

const userList2 = { 
  ["abc"] : "에이비씨",
  [123] : 1234567890,
  1:123,
  "a123" : "a123"
};

console.log(typeof(userList));
console.dir(JSON.stringify(userList));
console.log(userList[0].name);

console.log("===========");

console.log(typeof(userList2));
console.dir(JSON.stringify(userList2));


console.log(userList2.abc);
console.log(userList2[123]);
console.log(userList2[1])
console.log(userList2.a123);
console.log(userList2);

//fs.writeFile('./list.json', JSON.stringify(userList));

fs.writeFile('./list.json', JSON.stringify(userList),'utf8', function(err) {
  console.log('userList 파일 쓰기 완료');
});

fs.writeFile('./list2.json', JSON.stringify(userList2),'utf8', function(err) {
  console.log('userList2 파일 쓰기 완료');
});
