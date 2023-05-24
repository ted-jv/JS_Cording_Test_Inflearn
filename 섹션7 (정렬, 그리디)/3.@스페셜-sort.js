// function solution(arr) {
//   let answer = arr;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > 0 && arr[j + 1] < 0) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return answer;
// }

// let arr = [1, 2, 3, -3, -2, 5, 6, -6];
// console.log(solution(arr));

//! let i는 그저 5번 돌면서 확인하는 용도로 쓰인 것.
// so 버블정렬은 좀 많이 돌아야해서 메모리에 비효율

//@ 다시 풀기
function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));

//! 버블정렬 다시 보기
