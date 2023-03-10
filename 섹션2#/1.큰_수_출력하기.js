// 내 처음 풀이법
function solution(numbers, num) {
  let answer = [numbers[0]];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i - 1] < numbers[i]) answer.push(numbers[i]);
  }

  return answer;
}

let num = 6;
let numbers = [7, 3, 9, 5, 6, 12];
console.log(solution(numbers, num));
