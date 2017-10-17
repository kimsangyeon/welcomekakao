function solution(land) {
	var answer = 0;
    var tmpLand = land;
    var prevIndex = -1;
    var maxNum = -1;
    
    for(var i = 0; i < tmpLand.length; i++) {
        if(prevIndex >= 0) {
            tmpLand[i][prevIndex] = -1;
        }
        maxNum = Math.max(tmpLand[i][0], tmpLand[i][1], tmpLand[i][2], tmpLand[i][3]);
        answer += maxNum;
        prevIndex = tmpLand[i].indexOf(maxNum);
    }

	return answer;
}