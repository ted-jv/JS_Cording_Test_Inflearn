function solution(times) {
  let answer = 0;
  let timeLine = [];

  for (let x of times) {
    timeLine.push([x[0], 's']);
    timeLine.push([x[1], 'e']);
  }

  timeLine.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let cnt = 0;

  for (let x of timeLine) {
    if (x[1] === 's') cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let a = 3;
console.info('3', a.__proto__);
let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));

//! 오고 가는 시간에 문자열 "S", "e"를 넣어서 재배열화하여 판단한다는 것이 중요.
