// function solution(arr) {
//   let answer = arr;

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }

//   return answer;
// }

// let arr = [13, 5, 11, 7, 23, 15];
// console.log(solution(arr));

//@ 다시 풀기
function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
      console.info(answer);
    }
  }

  return answer;
}

let arr = [13, 11, 5, 7, 23, 15];
console.log(solution(arr));
