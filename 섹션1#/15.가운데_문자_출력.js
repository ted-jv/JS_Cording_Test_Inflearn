// // 내 처음 풀이법
// function solution(string) {
//   let answer = '';

//   //홀수일 경우
//   if (string.length % 2 !== 0) answer = string[Math.floor(string.length / 2)];
//   //짝수일 경우
//   else answer = string[string.length / 2 - 1] + string[string.length / 2];
//   return answer;
// }

// let string = 'study';
// let string2 = 'good';

// console.log(solution(string2));

// @ 다시 풀기
function solution(string) {
  let answer = '';

  //짝수일 때
  if (string.length / 2 === parseInt(string.length / 2)) {
    answer += string[string.length / 2 - 1] + string[string.length / 2];
  }
  //홀수일 때
  if (string.length / 2 !== parseInt(string.length / 2)) {
    answer += string[parseInt(string.length / 2)];
  }

  return answer;
}

let string = 'study';
let string2 = 'good';

console.log(solution(string));
console.log(solution(string2));
