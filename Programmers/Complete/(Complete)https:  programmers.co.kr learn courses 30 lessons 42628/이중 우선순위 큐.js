
/*
최소힙과 최대힙을 병렬적으로 만들어야 됨

Insert : 각 힙에 insert메서드로 insert해주고

Delete : 최소 최대값 제거인데, 매칭되는 힙은 delete메서드 쓰면 될거고, 반대 매칭되는 힙은 어차피 leaf에 해당되는 값이니까 그냥 지우면 될듯(다만 그 부모노드의 경우 해당자식은 null로 바꿔주고)
*/


//[자바스크립트 자료구조] 힙(Heap) - (1) 최소힙, 최대힙 구현
//https://nyang-in.tistory.com/153

// let operations = ['I 16', 'D 1'];
// let operations = ['I 7', 'I 5', 'I -5', 'D -1'];

function solution(operations) {
  class Heap {
    constructor() {
      this.items = [];
    }

    //값을 서로 바꾸는 메소드

    swap(index1, index2) {
      let temp = this.items[index1]; // items의 index1의 값을 temp(임시공간)에 담음

      this.items[index1] = this.items[index2]; // index1에 index2의 값을 저장

      this.items[index2] = temp; // index2에 아까 index1의 값을 temp에 넣어놓은 값을 저장
    }

    //부모 인덱스 구하는 메소드

    parentIndex(index) {
      return Math.floor((index - 1) / 2);
    }

    //왼쪽 자식 인덱스 구하는 메소드

    leftChildIndex(index) {
      return index * 2 + 1;
    }

    //오른쪽 자식 인덱스 구하는 메소드

    rightChildIndex(index) {
      return index * 2 + 2;
    }

    //부모 노드 구하는 메소드

    parent(index) {
      return this.items[this.parentIndex(index)];
    }

    //왼쪽 자식 노드 구하는 메소드

    leftChild(index) {
      return this.items[this.leftChildIndex(index)];
    }

    //오른쪽 자식 노드 구하는 메소드

    rightChild(index) {
      return this.items[this.rightChildIndex(index)];
    }

    //최대 힙의 경우 최댓값을 반환하고 최소 힙의 경우 최솟값을 반환하는 메소드

    peek() {
      return this.items[0];
    }

    //힙의 크기(항목 개수)를 반환하는 메소드

    size() {
      return this.items.length;
    }
  }
  class MinHeap extends Heap {
    // MinHeap 클래스는 Heap 클래스를 상속받았으므로 Heap 클래스의 메소드를 모두 사용할 수 있다.

    bubbleUp() {
      let index = this.items.length - 1;

      while (
        this.parent(index) !== undefined &&
        this.parent(index) > this.items[index]
      ) {
        this.swap(index, this.parentIndex(index));

        index = this.parentIndex(index);
      }
    }

    bubbleDown() {
      let index = 0;

      while (
        this.leftChild(index) !== undefined &&
        (this.leftChild(index) < this.items[index] ||
          this.rightChild(index) < this.items[index])
      ) {
        let smallerIndex = this.leftChildIndex(index);

        if (
          this.rightChild(index) !== undefined &&
          this.rightChild(index) < this.items[smallerIndex]
        ) {
          smallerIndex = this.rightChildIndex(index);
        }

        this.swap(index, smallerIndex);

        index = smallerIndex;
      }
    }

    // 힙에 원소를 추가하는 함수

    add(item) {
      this.items[this.items.length] = item;

      this.bubbleUp();
    }

    // 힙에서 원소를 빼내는 함수

    // 최소 힙이라면 최솟값이 빠져나올 것이고 최대힙이라면 최댓값이 빠져나온다.

    poll() {
      let item = this.items[0]; // 첫번째 원소 keep

      this.items[0] = this.items[this.items.length - 1]; // 맨 마지막 원소를 첫번째 원소로 복사

      this.items.pop(); // 맨 마지막 원소 삭제

      this.bubbleDown();

      return item; // keep해둔 값 반환
    }
  }
  class MaxHeap extends MinHeap {
    //MaxHeap의 경우 MinHeap을 상속받았으므로 MinHeap의 모든 함수를 사용할 수 있지만 bubbleUp과 bubbleDown은 Overriding(재정의)하였다.
    bubbleUp() {
      let index = this.items.length - 1;
      while (
        this.parent(index) !== undefined &&
        this.parent(index) < this.items[index]
      ) {
        this.swap(index, this.parentIndex(index));
        index = this.parentIndex(index);
      }
    }

    bubbleDown() {
      let index = 0;

      while (
        this.leftChild(index) !== undefined &&
        (this.leftChild(index) > this.items[index] ||
          this.rightChild(index) > this.items[index])
      ) {
        let largerIndex = this.leftChildIndex(index);
        if (
          this.rightChild(index) !== undefined &&
          this.rightChild(index) > this.items[largerIndex]
        ) {
          largerIndex = this.rightChildIndex(index);
        }
        this.swap(largerIndex, index);
        index = largerIndex;
      }
    }
  }

  let elems = [];

  const minheap = new MinHeap();
  const maxheap = new MaxHeap();

  for (let elem of operations){
      
      console.log(elems);
      
      //Insert라면
      if (elem.indexOf("I")>-1){
          elems.push(parseInt(elem.slice(2)));
          continue;
      }
      
      if (elem == "D 1"){
          let maxheap = new MaxHeap();
          
          for (let item of elems){
              maxheap.add(item);
          }
          
          let maxElem = maxheap.poll();
          
          let index = elems.indexOf(maxElem); 
          elems.splice(index, 1);
          continue;


      }
       if (elem == "D -1"){
          let minheap = new MinHeap();
          
          for (let item of elems){
              minheap.add(item);
          }
          
          let minElem = minheap.poll();
          
          let index = elems.indexOf(minElem); 
          elems.splice(index, 1);
          continue;
          
           
      }
    
      
  }
    
  if (elems.length < 1){
      return [0,0];
  }

    
  let miheap = new MinHeap();
  let maheap = new MaxHeap(); 
    
  for (let item of elems){
      miheap.add(item);
      maheap.add(item);
  }

  let minElem = miheap.poll();
  let maxElem = maheap.poll();
    
  return [maxElem, minElem];
  
 
}

