// 내 처음 풀이법
// function solution(s) {
//   let answer = 'YES';

//   let cnt = 0;

//   for (let x of s) {
//     if (x === '(') cnt++;
//     else cnt--;
//   }

//   if (cnt !== 0) return 'NO';
//   return answer;
// }

// let a = '(()(()))(()';

// console.log(solution(a));

// 강의 풀이법 ( 스택, 큐 활용 pop, push)
