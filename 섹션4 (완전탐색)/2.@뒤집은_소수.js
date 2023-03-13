function solution(num) {
  let answer = [];

  for (let x of num) {
    let res = Number(x.toString().split('').reverse().join(''));
    console.info(res);
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

function isPrime(res) {
  if (res == 1) return false;
  for (let i = 2; i <= Math.sqrt(res); i++) {
    if (res % i === 0) return false;
  }
  return true;
  //! 바로 위에 이럴 경우 else return true 하면 에러 생김 그냥 return true 해라.
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

//! 052라는 숫가자 있을 때 Number(052) 처리하면 parseInt와 마찬가지로 정수만 남긴다. ( 52)
