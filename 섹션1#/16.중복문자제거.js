// 내 처음 풀이법
function solution(string) {
  let answer = '';

  for (let i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) == i) answer += string[i];
  }

  return answer;
}

let string = 'keskkest';
console.log(solution(string));
