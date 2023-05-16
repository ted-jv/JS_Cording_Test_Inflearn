// 내 처음 풀이법
// function solution(n, score) {
//   let answer = Array.from({ length: n }, () => 1);

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (score[i] < score[j]) answer[i]++;
//     }
//   }

//   return answer;
// }
// let n = 5;
// let score = [87, 89, 92, 100, 76];

// console.log(solution(n, score));

// Array.from 딥다이브 책 다시 볼 것

// @ 다시 풀기
function solution(n, score) {
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // j = 0이 중요 왜냐 모든 걸 비교해야하므로
      if (score[i] < score[j]) answer[i]++;
    }
  }

  return answer;
}
let n = 5;
let score = [87, 89, 92, 100, 76];

console.log(solution(n, score)); // [ 4, 3, 2, 1, 5 ]
