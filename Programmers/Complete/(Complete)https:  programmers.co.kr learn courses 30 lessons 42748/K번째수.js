

/*

쉬운 문제인데, 문제는 정렬 메서드를 무엇으로 정의할 지 일듯.

Merge Sort로 구현하자.


*/


function solution(array, commands) {

    let answer = [];

    for (let command of commands){
        let subArr = array.slice(command[0]-1,command[1]);
        console.log(subArr);
        subArr.sort(function (a,b) {
            return a-b;
        });

        answer.push(subArr[command[2]-1]);


    }



    return answer;
}


