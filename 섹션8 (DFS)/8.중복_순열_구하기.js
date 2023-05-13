function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    console.info('L입니다', L);
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        console.log('🚀  tmp:', tmp);

        DFS(L + 1);
        console.log('🚀 answer :', answer);
      }
      console.info('1회 끝입니다');
    }
  }
  console.info('또 한다고?');
  DFS(0);
  return answer;
}

console.log(solution(3, 2));
