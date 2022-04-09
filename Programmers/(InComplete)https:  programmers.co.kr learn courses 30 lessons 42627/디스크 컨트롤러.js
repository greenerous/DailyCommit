/*
1. 힙의 생성
- 힙은 배열보다는 node객체로 구성된 트리 (트리는 dict로 저장)
- 힙의 insert 메서드 정의
- 힙의 delete 메서드 정의

	-> 힙 정렬로 문제 풀이 (최소 힙, 최소값 하나씩 delete해가면서)

2. 해결해야 될 문제 (이 문제에 특수한 상황)
- 요청시점과 소요시간이 있는데, 이걸 단순히 소요시간 순으로 정렬하면 안됨.
- 요청시점 순으로 정렬하고, 요청시점이 다음작업의 시작 시점보다 앞에 있는 대기열들 중에서 고르는 상황을 가정하고 풀어야 할듯 (대기열에 하나밖에 없거나, 아예 없는 경우는 바로 그 작업 또는 바로 다음 요청시점의 작업을 수행하는게 문제의 조건인듯)
	: "하드디스크가 작업을 수행하고 있지 않을 때에는 먼저 요청이 들어온 작업부터 처리합니다." -> 이 조건의 이해가 제대로 안되어 있음.

*/

function solution(jobs) {
    
    //요청시점 먼저 들어온 순서대로 정렬
    jobs = jobs.sort(function (a,b) {
        return a[0] - b[0];
    });
    
    let jobDict = {};
    
    for (let i = 0; i< jobs.length; i++){
       jobs[i] = [i, ...jobs[i]];
       jobDict[i] = jobs[i];
         
    }
    
    console.log(jobDict);

    let sumTime = 0;
    
    let time = 0;
    
    let readyQueue = [];    
    
    let done = [];
    
    
    
    while (Object.keys(jobDict).length >0){
        
    
        readyQueue = Object.values(jobDict).filter(elem => elem[1] <= time);
        
        
        //현재 시점에서 대기 중인 작업이 없을 때
        if (readyQueue.length < 1) {
            time = jobs[0][0];
            continue;
        }
        
                
        //대기 중인 작업이 있을 때 -> 이 중 소요시간이 최소인 작업을 선택
        readyQueue.sort(function (a,b) {
        return a[2] - b[2];
        });
        
        
        //jobs 원소 빼고
        delete jobDict[readyQueue[0][0]];

        time += readyQueue[0][2];
        
        console.log(time - readyQueue[0][1]);
        
        sumTime += time - readyQueue[0][1];
        

        
    }
    
    let answer = sumTime/jobs.length;
    return answer;
}