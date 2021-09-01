const promiseResult = new Promise((resolve) => {
  resolve('JYLEE'); // 핵심은 첫번째는 resolve() 를 쓴다는 것.
}).then((result) => {
  console.log('first:', result);
 // return `${result}hello`;
  return result+'hello';
}).then((result) => {
  console.log('second:', result);
  return `${result}쵸쵸리나`;
});

promiseResult.then(result => console.log(result));


//Promise 기본 형태
const promiseResult2 = new Promise((resolve2) => {
  resolve2(1);
}).then((result) => {
  
});