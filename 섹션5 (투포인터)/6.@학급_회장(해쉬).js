function solution(s) {
  let answer = '';
  let obj = new Map();

  for (let i = 0; i < str.length; i++) {
    if (obj.has(s[i])) obj.set(s[i], obj.get(s[i]) + 1);
    else obj.set(s[i], 1);
  }

  let max = Number.MIN_SAFE_INTEGER;

  for (let [key, val] of obj) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));

//! Map 객체는 이터러블 객체이기에 let of 사용 가능 ( 유사배열객체 x)
