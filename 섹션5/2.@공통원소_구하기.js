// 내 처음 풀이법
// function solution(a, b) {
//   return a.filter(a => b.includes(a)).sort((a, b) => a - b);
// }
// let a = [1, 3, 9, 5, 2];
// let b = [3, 2, 5, 7, 8];
// console.log(solution(a, b));

// 효율적인 풀이법 (big(1))
function solution2(a, b) {
  let answer = [];
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  let p1 = (p2 = 0);
  while (p1 < a.length && p2 < b.length) {
    if (a[p1] === b[p2]) {
      answer.push(a[p1++]);
      p2++;
    } else if (a[p1] < b[p2]) p1++;
    else p2++;
  }
  return answer;
}
let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution2(a, b));
