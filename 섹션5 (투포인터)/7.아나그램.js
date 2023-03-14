function solution(str1, str2) {
  let answer = 'YES';
  let sh = new Map();

  for (let x of str1) {
    if (sh.has(x)) sh.set(x, sh.get(x) + 1);
    else sh.set(x, 1);
  }

  for (let x of str2) {
    if (!sh.has(x) || sh.get(x) == 0) return 'NO';
    else sh.set(x, sh.get(x) - 1);
  }
  return answer;
}

// let a = 'AbaAeCe';
// let b = 'baeeACA';
// YES

let a = 'abaCC';
let b = 'Caaab';
// NO
console.log(solution(a, b));

//! 1. has는 Map으로 만든 객체에 그 키를 가진 것이 있나 확인
//! 2. set은 첫 번째 인수라는 키에 두 번째 인수값을 추가한다.
//! 3. get은 해당 인수를 가진 Map의 key 값을 뱉어낸다.
