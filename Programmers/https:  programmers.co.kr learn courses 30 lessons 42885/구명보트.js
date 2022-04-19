Greedy하게 풀면 되지 않을까? 복잡하게 생각할 것 없이.


우선 크기 순으로 정렬.

맨 뒤에 큰 거 하나 잡고, 
while people.length > 0 : 
	while (합 <= limit) : 맨앞부터 하나씩 추가해나가기 (queue 처럼 추가된건 원래 people배열에서 제거해주고)	
	while을 벗어나면 count+ 해주고 다음으로 continue;
	

