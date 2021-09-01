const studentList = [
  { name: 'kyeongrok', age: 31, score: 85 },
  { name: 'jihyun', age: 31, score: 95 },
  { name: 'minsup', age: 35, score: 76 },
  { name: 'yuna', age: 31, score: 94 },
];

let resultStudent = '';

// 기본 예제(for문)
// for (let index = 0; index < studentList.length; index += 1) {
//   if (studentList[index].name === 'minsup') {
//     resultStudent = studentList[index];
//     break;
//   }
//   console.log(studentList[index].name, '은 minsup이 아닙니다.');
// }

// console.log('resultStudent:', resultStudent);


// for문 예제를 34_for_of를 이용하여 변환..
for (const student of studentList) {
  if (student.name === 'minsup') {
    resultStudent = student;
    break;
  }

  console.log(student.name, '은 minsup이 아닙니다,');

}

console.log('resultStudent:', resultStudent);
console.log('resultStudent.name:', resultStudent.name);