// 내 처음 풀이법
// function solution(numbers) {
//   let odds = [];

//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) odds.push(numbers[i]);
//   }

//   let min = odds[0];

//   for (let i = 0; i < odds.length; i++) {
//     sum += odds[i];

//     if (min > odds[i]) min = odds[i];
//   }

//   return [sum, min];
// }

// let numbers = [12, 77, 38, 41, 53, 92, 85];

// console.log(solution(numbers));

// // 효율적인 풀이법
// function solution(numbers) {
//   let answer = [];

//   let sum = 0,
//     min = Number.MAX_SAFE_INTEGER;

//   for (let x of numbers) {
//     if (x % 2 == 1) {
//       sum += x;
//       if (x < min) min = x;
//     }
//   }
//   answer.push(sum);
//   answer.push(min);

//   return answer;
// }

// let numbers = [12, 77, 38, 41, 53, 92, 85];

// console.log(solution(numbers));

// 다시 풀기 ( @ )
function solution(numbers) {
  let answer = [];
  let sum = 0;

  for (let x of numbers) {
    if (x % 2 > 0) {
      sum += x;
      answer.push(x);
    }
  }

  return [sum, Math.min(...answer)];
}

let numbers = [12, 77, 38, 41, 53, 92, 85];

console.log(solution(numbers));
