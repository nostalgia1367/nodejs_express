const students = [
  { name: '사람1', age: 31, score: 85 },
  { name: '사람2', age: 31, score: 95 },
  { name: '사람3', age: 35, score: 76 },
];

console.log(students);
console.log(students[0].score);
console.log(typeof(students));
console.log(typeof(students[0].score));

const scores = students.map(student => student.score);

console.log(":::::"+typeof(scores));
console.log(scores);

const sum = scores.reduce((a, b) => a + b, 0);
console.log('합계:', sum);
