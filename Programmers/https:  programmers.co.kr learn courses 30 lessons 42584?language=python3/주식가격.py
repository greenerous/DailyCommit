def solution(prices):
    answer =[]
    while(len(prices) >1):
        
        if len(prices) == 1:
            answer.append(0)
            break
        
        for i in range(1,len(prices)):
            if prices[0] > prices[i]:
                answer.append(i) 
                break
            if i == len(prices)-1: 
                answer.append(len(prices)-1)
                
        prices.pop(0)

    answer.append(0)
        

    return answer