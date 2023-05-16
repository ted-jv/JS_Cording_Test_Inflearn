// 내 처음 풀이법
// function solution(arr, n) {
//   let answer = Number.MIN_SAFE_INTEGER;

//   let sum1 = (sum2 = 0);

//   for (let i = 0; i < n; i++) {
//     sum1 = sum2 = 0;
//     for (let j = 0; j < n; j++) {
//       sum1 += arr[i][j];
//       sum2 += arr[j][i];
//     }
//     answer = Math.max(answer, sum1, sum2);

//     sum1 = sum2 = 0;

//     for (let i = 0; i < n; i++) {
//       sum1 += arr[i][i];
//       sum2 += arr[i][n - i - 1];
//     }
//     answer = Math.max(answer, sum1, sum2);
//   }

//   return answer;
// }

// let arr = [
//   [10, 13, 10, 12, 15],
//   [12, 39, 30, 23, 11],
//   [11, 25, 50, 53, 15],
//   [19, 27, 29, 37, 27],
//   [19, 13, 30, 13, 19],
// ];

// let n = 5;
// console.log(solution(arr, n));

// @ 다시 풀기
function solution(arr, n) {
  let answer = 0;
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j]; // 행의 합
      sum2 += arr[j][i]; // 열의 합
    }

    answer = Math.max(answer, sum1, sum2);
    sum1 = sum2 = 0; // 행과 열의 합을 초기화 시켜줘야함

    for (let j = 0; j < n; j++) {
      sum1 += arr[j][j];
      sum2 += arr[n - 1 - j][n - 1 - j];
    }

    answer = Math.max(answer, sum1, sum2);
    sum1 = sum2 = 0; // 대각선의 합을 초기화 시켜줘야함
  }

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

let n = 5;
console.log(solution(arr, n));
