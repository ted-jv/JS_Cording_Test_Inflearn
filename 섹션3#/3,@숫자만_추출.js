// 내 처음 풀이법
function solution(s) {
  let answer = '';

  for (let x of s) {
    if (!isNaN(x)) {
      answer += x;
    }
  }
  return parseInt(answer);
}

let s = 'g0en2T0s8eSoft';

console.log(solution(s));

//! replace로 문자 찾고 뒤에 ''로 찾은 문자를 변환해준다. (문자열 메소드)

//! parseInt는 정수로 반환 그래서 맨 앞의 0을 삭제해줌

//! isNaN은 그게 숫자면 false , 숫자가 아니면 true 그래서 앞에 !을 붙힘
