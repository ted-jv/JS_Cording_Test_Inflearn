// function solution(a, b, c) {
//   let answer = 'YES',
//     max;

//   let sum = a + b + c;

//   if (a > b) max = a;
//   else max = b;
//   if (max < c) max = c;

//   if (sum - max <= max) answer = 'NO';

//   return answer;
// }

// console.log(solution(6, 7, 11));

// 풀이 (!)

// 작은 변 두 개의 합이 가장 긴 변의 길이보다 커야 한다.
// 가장 긴 변의 길이가 같거나 작으면 삼각형이 x

// 다시 풀기 ( @ )

function solution(a, b, c) {
  let sum = a + b + c;

  let max = Math.max(a, b, c);

  if (sum - max <= max) return 'NO';
  else return 'YES';
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 7));
console.log(solution(1, 2, 3)); // 이 경우 1 + 2 = 3이면 이는 삼각형이 아니고 직선이 됨 so 30line이 < 이게 아닌 <= 인 이유
