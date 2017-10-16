function solution(land) {
	var answer = 0;
    var prevIndex = -1;
    var maxNum = 0;
    
    for(var i = 0; i < land.length; i++) {
        var tmpIndex = 0;
        for(var j = 0; j < land[i].length; j++) {
            if(land[i][j] > maxNum && j !== prevIndex) {
                maxNum = land[i][j];
                land[i][tmpIndex] = maxNum;
                land[i][j] = 'x';
                tmpIndex = j;
            }
        }
        answer += maxNum;
        prevIndex = land[i].indexOf('x');
        maxNum = 0;
    }

	return answer;
}