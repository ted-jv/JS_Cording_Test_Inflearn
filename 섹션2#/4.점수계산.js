// // 내 처음 풀이법
// function solution(n, result) {
//   let answer = 0,
//     acc = 0;

//   for (let i = 0; i < n; i++) {
//     if (result[i] !== 0) {
//       acc++;
//       answer += acc;
//     } else acc = 0;
//   }

//   return answer;
// }
// let n = 10;
// let result = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
// console.log(solution(n, result));

// @ 다시 풀기
function solution(n, result) {
  let answer = 0,
    score = 0;

  for (let x of result) {
    if (score == 0 && x == 1) {
      answer++;
      score++;
    } else if (score > 0 && x == 1) {
      score++;
      answer += score;
    } else if (x == 0) {
      score = 0;
    }
  }
  return answer;
}
let n = 10;
let result = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(n, result)); // 10
