function solution(need, plan) {
  let answer = 'YES';
  let queue = need.split('');

  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return 'NO'; // .shift는 원본 파괴 메소드이므로
    }
  }

  if (queue.length > 0) return 'NO'; // b에 a가 하나라도 없는 경우
  return answer;
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));
