// 내 처음 풀이법
// function solution(s) {
//   let answer = '';

//   for (let x of s) {
//     if (!isNaN(x)) {
//       answer += x;
//     }
//   }
//   return parseInt(answer);
// }

// let s = 'g0en2T0s8eSoft';

// console.log(solution(s));

//@ 다시 풀기
function solution(s) {
  let number = s.toLowerCase().replace(/[a-z]/g, '');

  return Number(number);
}

let s = 'g0en2T0s8eSoft';

console.log(solution(s));

//! replace로 문자 찾고 뒤에 ''로 찾은 문자를 변환해준다. (문자열 메소드)

//! parseInt는 정수로 반환 그래서 맨 앞의 0을 삭제

//! Number 또한 사용 가능한 실수로 만들어주기에 앞의 0을 삭제

//! isNaN은 그게 숫자면 false , 숫자가 아니면 true 그래서 앞에 !을 붙힘
