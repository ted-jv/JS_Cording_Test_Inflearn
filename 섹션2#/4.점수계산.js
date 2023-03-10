// 내 처음 풀이법
function solution(n, result) {
  let answer = 0,
    acc = 0;

  for (let i = 0; i < n; i++) {
    if (result[i] !== 0) {
      acc++;
      answer += acc;
    } else acc = 0;
  }

  return answer;
}
let n = 10;
let result = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(n, result));
