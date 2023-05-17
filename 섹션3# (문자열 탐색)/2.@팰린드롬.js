// 내 처음 풀이법
// function solution(s) {
//   let answer = 'YES';
//   s = s.toLowerCase().replace(/[^a-z]/g, '');
//   if (s.split('').reverse().join('') !== s) return 'NO';
//   return answer;
// }

// let s = 'found7, time: study; Yduts; emit, 7Dnuof';

// console.log(solution(s));

//! replace로 문자 찾고 뒤에 ''로 찾은 문자를 변환해준다.
//! [^] 정규식의 ^는 부정의 의미이다. 아닌 것
//! s.replace(/[^a-z]/, "")를 한다면 뒤에 g가 없으므로 처음으로 보여지는 반대되는 것 하나만 없애고 새로운 문자열을 반환한다.
//! s.replace(/[^a-z]/g, "")는 보이는 반대되는 모든 걸 ""로 치환한다는 의미.

//@ 다시 풀기
function solution(s) {
  let string = s
    .split(' ')
    .join('')
    .toLowerCase()
    .replace(/[^a-z]/g, '');

  if (string == string.split('').reverse().join('')) return 'YES';
  else return 'NO';
}

let s = 'found7, time: study; Yduts; emit, 7Dnuof';

console.log(solution(s));
