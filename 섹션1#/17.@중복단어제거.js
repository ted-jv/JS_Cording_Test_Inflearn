// // 내 처음 풀이법
// function solution(s) {
//   let answer = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s.indexOf(s[i]) == i) answer.push(s[i]);
//   }

//   return answer;
// }

// let s = ['good', 'time', 'good', 'time', 'student'];

// console.log(solution(s));

//@ 다시 풀기
function solution(s) {
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) == i) answer.push(s[i]);
  }

  //중복 풀이 방법 2 (set 객체 사용)
  // return [...new Set(s)];

  return answer;
}

let s = ['good', 'time', 'good', 'time', 'student'];

console.log(solution(s));

//! indexOf는 앞에서부터 가까운 값의 인덱스만 얘기한다.
//! 중복단어제거는 set 객체 사용하면 쉽게 풀기 가능.
