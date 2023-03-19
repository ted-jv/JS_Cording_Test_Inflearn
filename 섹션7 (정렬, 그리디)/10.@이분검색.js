function solution(target, arr) {
  let answer;

  arr.sort((a, b) => a - b);

  let lt = 0,
    rt = arr.length - 1;

  while (lt <= rt) {
    let mid = parseInt(rt + lt / 2);

    if (target === arr[mid]) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }
  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));

//! 이분검색으로 풀면 배열의 반을 나누면서 알고리즘 상으로 더 효율이 좋게 찾을 수 있다. 빅오 log
