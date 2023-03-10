// 내 처음 풀이법
function solution(string, num) {
  let answer = 0;
  for (let x of string) {
    if (x.charCodeAt() < 97) answer++;
  }
  //   console.info('a'.charCodeAt());
  //   console.info('A'.charCodeAt());

  return answer;
}

let string = 'KoreaTimeGood';

console.log(solution(string, 3)); // 다음 대문자 갯수
