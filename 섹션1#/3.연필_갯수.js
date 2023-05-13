// // 내 처음 풀이법
// function solution(students) {
//   let dasCount = 0;

//   dasCount = parseInt(students / 12);

//   if (students % 12 > 0) dasCount++;

//   return dasCount;
// }

// console.log(solution(25)); // 3
// console.log(solution(178)); // 15

// 효율적인 풀이법
// function solution(students) {
//     let answer;
//     answer = Math.ceil(students/12)
//     return answer;
//   }

// 다시 풀기 ( @ )
function solution(students) {
  let dasCount = 0;

  dasCount = parseInt(students / 12);
  if (students % 12 > 0) dasCount++;

  return dasCount;
}

console.log(solution(25)); // 3
console.log(solution(178)); // 15
