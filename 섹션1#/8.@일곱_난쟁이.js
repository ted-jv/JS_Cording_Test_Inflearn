// function solution(smaller) {
//   let answer = smaller;
//   let sum = smaller.reduce((acc, value) => acc + value);

//   for (let i = 0; i < answer.length - 1; i++) {
//     for (let j = i + 1; j < answer.length - 1; j++) {
//       if (sum - (answer[i] + answer[j]) === 100) {
//         answer.splice(i, 1);
//         answer.splice(j - 1, 1); // 바로 위에서 splice 하면 원본이 바뀌므로 여기엔 -1이 필요.
//       }
//     }
//   }

//   return answer;
// }

// let smaller = [20, 7, 23, 19, 10, 15, 25, 8, 13];

// console.log(solution(smaller)); // 20 7 23 19 10 8 13

// 다시 풀기 ( @ )
function solution(smaller) {
  let answer = smaller;
  let total = 0;

  for (let x of smaller) {
    total += x;
  }

  for (let i = 0; i < smaller.length; i++) {
    for (let j = i + 1; j < smaller.length - 1; j++) {
      if (total - (smaller[i] + smaller[j]) === 100) {
        answer.splice(i, 1);
        answer.splice(j - 1, 1); // 이 부분 j -1 핵심 !
      }
    }
  }

  return answer;
}

let smaller = [20, 7, 23, 19, 10, 15, 25, 8, 13];

console.log(solution(smaller)); // 20 7 23 19 10 8 13

//! 배열의 앞에서 제거 shift, 뒤는 pop, 중간이든 내가 원하는 위치에서 제거하는 건 splice (모두 원본이 바뀜을 기억하자!)
