// // 내 처음 풀이법
// function solution(string, num) {
//   let answer = 0;
//   for (let x of string) {
//     if (x.charCodeAt() < 97) answer++;
//   }
//   //   console.info('a'.charCodeAt());
//   //   console.info('A'.charCodeAt());

//   return answer;
// }

// let string = 'KoreaTimeGood';

// console.log(solution(string, 3)); // 다음 대문자 갯수

// 다시 풀기 ( @ )
function solution(string) {
  let answer = 0;

  for (let x of string) {
    if (x.charCodeAt() < 97) answer++;
  }

  return answer;
}

let string = 'KoreaTimeGood';

console.log(solution(string)); // 다음 대문자 갯수

//! charAt()은 문자열에서 인자로 주어진 값에 해당하는 문자를 리턴합니다.
//! charCodeAt() 메서드는 index에 해당하는 문자의 unicode 값을 리턴합니다.
