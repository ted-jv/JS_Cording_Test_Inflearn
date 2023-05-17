// 내 처음 풀이법
// function solution(s) {
//   let answer = '';
//   s = s + ' '; // s 뒤에 ' ' 빈공간 넣은 이유는 아래 8번 라인의 if 문이 s[i+1] 이기 때문
//   let count = 1;
//   console.info(s);
//   for (let i = 0; i < s.length - 1; i++) {
//     if (s[i] == s[i + 1]) count++;
//     else {
//       answer += s[i];
//       if (count > 1) {
//         answer += count;
//         count = 1;
//       }
//     }
//   }

//   return answer;
// }

// let s = 'KKHSSSSSSSE';
// console.log(solution(s));

//@ 다시 풀기
function solution(s) {
  let answer = '';
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) count++;
    else {
      answer += s[i];
      if (count > 1) {
        answer += count;
        count = 1;
      }
    }
  }

  return answer;
}

let s = 'KKHSSSSSSSE';
console.log(solution(s));
