// 내 처음 풀이법
// function solution(n, k, arr) {
//   let all = [];

//   for (let i = 0; i < n - 2; i++) {
//     for (let j = i + 1; j < n - 1; j++) {
//       for (let f = j + 1; f < n; f++) {
//         all.push(arr[i] + arr[j] + arr[f]);
//       }
//     }
//   }

//   let answer = [...new Set(all)].sort((a, b) => b - a);

//   return answer[k - 1];
// }

// let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
// console.log(solution(10, 3, arr));

//@ 강의 풀이법
// function solution(n, k, arr) {
//   let tmp = new Set();

//   for (let i = 0; i < n - 2; i++) {
//     for (let j = i + 1; j < n - 1; j++) {
//       for (let f = j + 1; f < n; f++) {
//         tmp.add(arr[i] + arr[j] + arr[f]);
//       }
//     }
//   }

//   let res = Array.from(tmp).sort((a, b) => b - a);

//   return res[k - 1];
// }

// let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
// console.log(solution(10, 3, arr));

// //! Array.from(tmp) 이렇게 하면 tmp (set)이 배열화 된다. from() 안의 값을 배열로 만드는 메소드

//@ 다시 풀기
function solution(n, k, arr) {
  let tmp = new Set();

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let z = j + 1; z < n; z++) {
        tmp.add(arr[i] + arr[j] + arr[z]);
      }
    }
  }

  return Array.from(tmp).sort((a, b) => b - a)[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr)); // 143

//! sort((a, b) => a - b)는 오름차순 / b- a는 내림차순(큰 수부터 작은 수를 나열)
