function solution(bridge_length, weight, truck_weights) {
  // 생각해볼 점 : 스택/큐 라는 단서 없이도 생각해낼 수 있었을지

  let truckNum = truck_weights.length;

  let bridgeQueue = new Array(bridge_length).fill(0);

  let done = [];

  let answer = 0;

  console.log(bridgeQueue);

  while (done.length < truckNum) {
    let goalIn = bridgeQueue.shift();

    if (goalIn > 0) {
      done.push(goalIn);
    }

    let sumBridge = bridgeQueue.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );

    if (sumBridge + truck_weights[0] > weight) {
      bridgeQueue.push(0);
    } else {
      bridgeQueue.push(truck_weights.shift());
    }

    answer += 1;
  }

  return answer;
}
