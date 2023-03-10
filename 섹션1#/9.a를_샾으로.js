// 내가 푼 방법
function solution(banana) {
  let answer = '';

  for (let i = 0; i < banana.length - 1; i++) {
    if (banana[i] == 'A') answer += '#';
    else answer += banana[i];
  }

  return answer;
}

console.log(solution('BANANA'));

// 더 효율적인 풀이 ( for of를 사용하면 i의 length를 몇으로 할지 고민 필요 x)
function solution(banana) {
  let answer = '';

  for (let x of banana) {
    if (x == 'A') answer += '#';
    else answer += x;
  }

  return answer;
}

console.log(solution('BANANA'));
