function solution(smaller) {
  let answer = smaller;
  let sum = smaller.reduce((acc, value) => acc + value);

  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = i + 1; j < answer.length - 1; j++) {
      if (sum - (answer[i] + answer[j]) === 100) {
        answer.splice(i, 1);
        answer.splice(j - 1, 1); // 바로 위에서 splice 하면 원본이 바뀌므로 여기엔 -1이 필요.
      }
    }
  }

  return answer;
}

let smaller = [20, 7, 23, 19, 10, 15, 25, 8, 13];

console.log(solution(smaller));
