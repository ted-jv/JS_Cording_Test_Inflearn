// 내 처음 풀이법
function solution(n) {
  let answer = 0; // sum이 높은 x가 저장되는 곳
  let sum = 0; // 각 배열의 숫자의 합이 일시적으로 저장되는 곳
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of n) {
    let xStr = String(x);

    for (let s of xStr) {
      sum += s * 1;
    }
    console.info(sum);
    if (sum > max) {
      answer = x;
      max = sum;
    } else if (sum === max) {
      if (answer > x) answer;
      else answer = x;
    }
    sum = 0;
  }

  return answer;
}

let n = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(n));
