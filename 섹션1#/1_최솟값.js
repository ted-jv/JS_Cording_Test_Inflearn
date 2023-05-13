// function solution(a, b, c) {
//   let answer;

//   if (a > b) answer = b;
//   else answer = a;

//   if (answer > c) answer = c;

//   return answer;
// }

// console.log(solution(6, 5, 11));

// 다시 풀기 ( @ )

function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (answer < c) return answer;
  else return c;
}

console.log(solution(2, 5, 1));

//! 전 방식이 더욱 합리적
