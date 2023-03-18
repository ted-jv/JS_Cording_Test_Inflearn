// 내 처음 풀이법
// function solution(a, b) {
//   return a.concat(b).sort((a, b) => a - b);
// }
// let a = [1, 3, 5];
// let b = [2, 3, 6, 7, 9];
// console.log(solution(a, b));

//! 위 나의 방법은 빅오 n log n으로 효율성이 떨어짐

// 효율적인 풀이법 (big(n))
function solution(a, b) {
  let answer = [];

  let p1 = (p2 = 0);

  while (p1 < a.length && p2 < b.length) {
    if (a[p1] <= b[p2]) answer.push(a[p1++]);
    else answer.push(b[p2++]);
  }

  while (p1 < a.length) answer.push(a[p1++]);
  while (p2 < b.length) answer.push(b[p2++]);

  return answer;
}
let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
