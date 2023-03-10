function solution(a, b, c) {
  let answer = 'YES',
    max;

  let sum = a + b + c;

  if (a > b) max = a;
  else max = b;
  if (max < c) max = c;

  if (sum - max <= max) answer = 'NO';

  return answer;
}

console.log(solution(6, 7, 11));

// 풀이 (!)

// 작은 변 두 개의 합이 가장 긴 변의 길이보다 커야 한다.
// 가장 긴 변의 길이가 같거나 작으면 삼각형이 x
