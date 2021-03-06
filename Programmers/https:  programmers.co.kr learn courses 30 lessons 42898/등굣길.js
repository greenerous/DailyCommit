이거는 어릴 때 풀었던 수학문제의 응용. 푸는 방법을 알고 있어서 쉽게 풀 수 있을 듯.

모든 경우의 수 - 그 중 우물을 지나는 경우의 수

경우들을 구체적으로 구해야 함 : 우물이 하나이면 하나 지나는 경우 (우물까지의 경우의수 * 우물부터 학교까지의 경우의수)를 빼면 될테지만... 이 문제에서는 우물이 여러개일 수 있기 때문에...


모든 경우의 수 자체 계산 식 = (n+m)! / (n! * m!)

즉 빈 공간 (m+n)개 중에 오른쪽이 들어갈 m개 고르는 거랑 똑같음 (반대로 아래 n개 고르는 거랑 같기도 하고. N C m)

그러면 0 1 2 ....  m+n -1 중에서 m개 고르고, 여기에 오른 대입하고 나머지 인덱스에는 아래 대입하면 그게 각라운드별 행동패턴이 됨.

즉 조합으로 각 경우별 행동패턴 나타내는 배열 만들고, 이 배열에 따라서 라운드 시뮬레이션 해서 이동시킬 때 우물 좌표에 걸리면 그놈은 안세면 됨. 마지막 라운드까지 안걸리고 학교로 골인하면 count++

마지막으로 count / 1,000,000,007 를 리턴.



