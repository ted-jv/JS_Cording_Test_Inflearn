// // 내 처음 풀이법
// function solution(students) {
//   let answer = 0;

//   for (let i = 0; i < students.length; i++) {
//     if (students[i] < students[i + 1] && students[i + 1] !== undefined) answer++;
//   }

//   return answer;
// }

// let students = [130, 135, 148, 140, 145, 150, 150, 153];
// console.log(solution(students));

//
function solution(students) {
  let answer = 0;
  let min = students[0];

  for (let x of students) {
    if (x > min) {
      answer++;
    }
    min = x;
  }

  return answer;
}

let students = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(students));
