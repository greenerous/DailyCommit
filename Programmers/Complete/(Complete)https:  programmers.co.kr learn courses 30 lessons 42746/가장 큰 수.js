/*
초기구상

다음을 numbers가 빌 때까지 반복

1. 배열 내 원소의 첫번째 값 중 가장 큰 값 
2. 1이 여러개라면, 
	1) 길이가 모두 같다면, 원소 string의 두번째 인덱스가 가장 큰 값
	2) 길이가 다르다면, 여기서 막히네... 


3. 1 또는 2의 결과를 return string에 이어 붙이고, numbers에서는 삭제 
*/

/*
실제 풀이 : 길이가 다른 경우, 실제로 연결해봐서 더 크게 나오는 결과대로 크다고 판정하면 됨 (comparator 함수 구현으로 생각하면 비교적 쉽고 간단한 문제)
*/


function solution(numbers) {

    function sorting(a,b) {


        let arrA = a.toString().split('');
        let arrB = b.toString().split('');



        if (parseInt(arrA[0]) != parseInt(arrB[0])) {
            return parseInt(arrA[0]) - parseInt(arrB[0]);

        }


        if (arrA.length == arrB.length){
            return a-b;
        }

        let aFirst = parseInt(a.toString() + b.toString());
        let bFirst = parseInt(b.toString() + a.toString());

        return aFirst > bFirst? 1:-1;




//         if (arrA.length < arrB.length){
//             for (let i = 0; i < arrB.length-arrA.length; i++){
//                 arrA.push(arrB[0]);
//             }



//             return parseInt(arrA.join('')) - parseInt(arrB.join('')); 


//         }

//         if (arrA.length > arrB.length){
//             for (let i = 0; i < arrA.length-arrB.length; i++){
//                 arrB.push(arrA[0]);
//             }



//             return parseInt(arrA.join('')) - parseInt(arrB.join('')); 


//         }


    }//sorting



    numbers.sort(sorting).reverse();

    if (numbers[0] === 0){
        return "0";
    }

    return numbers.join('');


}