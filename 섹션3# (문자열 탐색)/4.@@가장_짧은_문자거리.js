// 내 처음 풀이법
// function solution(s, t) {
//   let answer = [];

//   let p = 200;

//   for (let x of s) {
//     if (x === t) {
//       p = 0;
//       answer.push(p);
//     } else {
//       p++;
//       answer.push(p);
//     }
//   }

//   p = 200;
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === t) p = 0;
//     else {
//       p++;
//       answer[i] = Math.min(answer[i], p);
//     }
//   }
//   return answer;
// }

// let s = 'teachermode';
// let t = 'e';
// console.log(solution(s, t));

//@ 다시 풀기
function solution(s, t) {
  let answer = [];
  let count = 0;

  // 앞에서부터 계산
  for (let i = 0; i < s.length; i++) {
    if (s[i] == t) {
      count = 0;
      answer.push(count);
    } else {
      ++count;
      answer.push(count);
    }
  }

  count = 0;

  // 뒤에서부터 계산
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == t) {
      count = 0;
    } else {
      ++count;
      answer[i] = Math.min(answer[i], count);
    }
  }

  return answer;
}

let s = 'teachermode';
let t = 'e';
console.log(solution(s, t));
