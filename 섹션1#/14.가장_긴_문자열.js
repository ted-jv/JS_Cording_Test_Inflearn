// // 내 처음 풀이법
// function solution(strings) {
//   let answer = strings[0];

//   for (let i = 0; i < strings.length; i++) {
//     if (answer.length < strings[i].length) answer = strings[i];
//   }

//   return answer;
// }

// let strings = ['teacher', 'time', 'student', 'beatiful', 'good'];

// console.log(solution(strings));

// @ 다시 풀기
function solution(strings) {
  let answer = '';

  for (let x of strings) {
    if (answer.length < x.length) answer = x;
  }

  return answer;
}

let strings = ['teacher', 'time', 'student', 'beatiful', 'good'];

console.log(solution(strings));
