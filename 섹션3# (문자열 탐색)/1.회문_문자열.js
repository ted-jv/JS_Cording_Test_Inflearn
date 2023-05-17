// 내 처음 풀이법
// function solution(s) {
//   let answer = s.toLowerCase();

//   let s2 = '';

//   for (let i = s.length - 1; i >= 0; i--) {
//     s2 += answer[i];
//   }

//   return answer == s2 ? 'YES' : 'NO';
// }

// // let s = 'gooG';
// let s = 'Gooogd';

// console.log(solution(s));

// @ 다시 풀기
function solution(s) {
  let string = s.toUpperCase();

  return string == string.split('').reverse().join('') ? 'YES' : 'NO';
}

// let s = 'gooG';
let s = 'Gooogd';

console.log(solution(s));

//! reverse는 배열메소드
