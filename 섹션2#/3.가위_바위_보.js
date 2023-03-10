// 내 처음 풀이법
function solution(n, a, b) {
  let answer = '';

  for (let i = 0; i < n; i++) {
    if (a[i] === b[i]) answer += 'D';
    else if (a[i] == 1 && b[i] == 3) answer += 'A';
    else if (a[i] == 2 && b[i] == 1) answer += 'A';
    else if (a[i] == 3 && b[i] == 2) answer += 'A';
    else answer += 'B';
  }

  return answer;
}

let n = 5;
let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];

console.log(solution(n, a, b));

// if는 공통에게 묻는 질문, else if는 처음 if가 false로 통과되면 다음으로 묻는 질문
// 마지막 else는 모든 게 false일 때 적용하는 것.
