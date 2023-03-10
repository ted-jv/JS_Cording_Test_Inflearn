// 내 처음 풀이법
function solution(s) {
  let stack = [];

  for (let x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else {
      stack.push(x);
    }
  }

  return stack.join('');
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));

//! s = s.replace(/[^a-z]/g, ''); 이 정규식은 숫자는 해당하지만 /,- 등의 기호는 해당 x

//! while (stack++ < 5) console.info(stack); 이렇게 쓸 경우 조건문이 false가 될 때까지 stack++가 된다.

//! while 조건문 뒤에 ; 없었더니 에러가 계속 발생했었다.
