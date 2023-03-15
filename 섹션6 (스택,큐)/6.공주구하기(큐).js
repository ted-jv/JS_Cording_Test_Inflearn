function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);

  while (queue.length > 0) {
    for (let i = 1; i < k; i++) queue.push(queue.shift()); // i를 1로 하는 이유 k가 3이므로 (2번)

    queue.shift();

    if (queue.length === 1) answer = queue.shift();
  }

  return answer;
}

console.log(solution(8, 3));

//! queue의 빠지고 추가되는 형식의 원리를 이해하라. 12345678 앞의 순서부터 빠진다.
