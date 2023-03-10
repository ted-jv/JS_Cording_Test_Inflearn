function solution(n) {
  let answer = '';
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(parseInt(L / 2)); // 2진법이므로 나누기 2의 몫(정수)를 구한다.
      answer += L % 2; // 2진법이므로 위의 나누기 몫에 %2 한다.
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(11));

//! 강의의 2진법 등 다른 진법으로 바꾸는 방법 부분을 다시 보자.
