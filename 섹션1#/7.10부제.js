function solution(day, cars) {
  let answer = 0;
  for (let x of cars) {
    if (String(x)[1] == day) answer++;
  }
  return answer;
}

let cars = [25, 23, 11, 47, 53, 17, 33]; // 3
let cars2 = [12, 20, 54, 30, 87, 91, 30]; // 0

console.log(solution(3, cars));
