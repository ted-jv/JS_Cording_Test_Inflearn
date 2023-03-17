function solution(arr) {
  let answer = [];
  let sortArr = arr.slice(); // slice() 시작, 끝 인덱스를 안 넣으면 arr 사본 자체를 반환한다.
  sortArr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (sortArr[i] !== arr[i]) answer.push(i + 1);
  }

  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr)); //[현수 인덱스 +1. 짝꿍 인덱스+1]

//!  let sortArr = arr.sort((a, b) => a - b); 이전에는 이렇게 썼었는데 이렇게 쓰면 sort는 원본을 바꾸므로 arr 또한 sortArr과 값이 동일해진다. so 에러
//! slice(시작index, 끝index) 시작 인덱스부터 끝 인덱스 전까지의 배열을 반환한다. 원본 파괴 x
