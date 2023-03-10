// 내 처음 풀이법
function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase().replace(/[^a-z]/g, '');
  if (s.split('').reverse().join('') !== s) return 'NO';
  return answer;
}

let s = 'found7, time: study; Yduts; emit, 7Dnuof';

console.log(solution(s));

//! replace로 문자 찾고 뒤에 ''로 찾은 문자를 변환해준다.
//! [^] 정규식의 ^는 부정의 의미이다. 아닌 것
