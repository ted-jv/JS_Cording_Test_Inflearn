// // 내 처음 풀이법
// function solution(string, one) {
//   return [...string].filter(v => v == one).length;
// }

// let string = 'COMPUTERPROGRAMMING';
// let one = 'R';
// console.log(solution(string, one));

// // for of 사용 방법
// function solution(string, one) {
//   let answer = 0;

//   for (let x of string) {
//     // string이 문자열이지만 for of는 배열, 문자열 다 가능하므로
//     if (x == one) answer++;
//   }

//   return answer;
// }

// let string = 'COMPUTERPROGRAMMING';
// let one = 'R';
// console.log(solution(string, one));

// //! for of는 배열 ,문자열 가능 , for in은 객체!

// 다시 풀기 ( @ )
function solution(string, one) {
  let count = 0;

  for (let x of string) {
    if (x === one) count++;
  }

  return count;
}

let string = 'COMPUTERPROGRAMMING';
let one = 'R';
console.log(solution(string, one));
