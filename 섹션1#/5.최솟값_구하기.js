// // 내 처음 풀이법
// function solution(a, b, c, d, e, f, g) {
//   let answer;

//   if (a > b) answer = b;
//   else answer = a;

//   if (answer > c) answer = c;
//   if (answer > d) answer = d;
//   if (answer > e) answer = e;
//   if (answer > f) answer = f;
//   if (answer > g) answer = g;

//   return answer;
// }

// console.log(solution(5, 3, 7, 11, 2, 15, 17));

// // 효율적인 풀이법
// function solution(arr) {
//   let answer,
//     min = Number.MAX_SAFE_INTEGER; //( min이 숫자 중에서 가장 큰 값이 된다.)

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//     answer = min;
//   }

//   return answer;
// }

// let arr = [5, 3, 7, 11, 2, 15, 17];

// console.log(solution(arr));

// 다시 풀기 ( @ )
function solution(arr) {
  let answer = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    answer = min;
  }

  return answer;
}

let arr = [5, 3, 7, 11, 2, 15, 17];

console.log(solution(arr));
