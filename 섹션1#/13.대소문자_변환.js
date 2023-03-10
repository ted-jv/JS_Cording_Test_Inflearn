// 내 처음 풀이법
function solution(string) {
  let answer = '';
  for (let x of string) {
    if (x == x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }

  return answer;
}

let string = 'StuDY';

console.log(solution(string));
