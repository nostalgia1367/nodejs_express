const listUser = [
  { name: '브릴리언트', age: 12 },
  { name: '김진경', age: 15 },
  { name: '조혜민', age: 17 },
];

listUser.forEach((user) => {
  console.log(user);
});
console.log('----------------------');
// arrow function
listUser.forEach(user => console.log(user));
