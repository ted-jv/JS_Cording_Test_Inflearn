function solution(n) {
  function DFS(L) {
    if (L === 0) return; // 끝내는 조건
    else {
      console.info(L);
      DFS(L - 1); // 반복 조건
    }
  }
  DFS(n);
}

solution(3);

//! 인강에 자세히 설명 꼭 다시 보기
