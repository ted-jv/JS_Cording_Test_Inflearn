function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

//! for문을 두 개 써야지 모든 숫자를 비교할 수 있다.
//! 위의 for문이 돌면서 arr의 원본은 계속 바뀐다.
