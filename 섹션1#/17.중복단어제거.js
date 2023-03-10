// 내 처음 풀이법
function solution(s) {
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) == i) answer.push(s[i]);
  }

  return answer;
}

let s = ['good', 'time', 'good', 'time', 'student'];

console.log(solution(s));
