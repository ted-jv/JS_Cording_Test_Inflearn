function solution(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;

  for (let i = 0; i < arr.length; i++) {
    //sum이 m 보다 작을 땐 계속 더한다.
    sum += arr[i];
    if (sum === m) answer++;

    //sum이 m보다 크거나 같은 때 lt를 증가시킨다.
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
