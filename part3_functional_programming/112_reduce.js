const scores = [10, 20, 30, 40, 50];

const sum = scores.reduce((a, b) => (a + b));
console.log('합계 :', sum);


const sumWithInitValue = scores.reduce((a, b) => (a + b), 10);
console.log('sumWithInitValue :', sumWithInitValue);
