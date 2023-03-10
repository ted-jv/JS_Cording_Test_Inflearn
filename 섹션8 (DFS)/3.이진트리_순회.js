function solution(n) {
  let answer = '';
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2); // stack에 3개가 먼저 쌓인다.
      answer += v + ' ';
      DFS(v * 2 + 1); // 스택에 쌓이고 재귀 호출하여 맨 위로 올라가서 다시 실행한다.
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));

//! 꼭 인강 다시 보기, 아주 중요!
