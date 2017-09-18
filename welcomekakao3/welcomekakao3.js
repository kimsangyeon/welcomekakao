function solution(v) {
    var answer = [];
    var aLoc = v;
    var xArr = [aLoc[0][0], aLoc[1][0], aLoc[2][0]];
    var yArr = [aLoc[0][1], aLoc[1][1], aLoc[2][1]];
    
    for(var i = 0, length = xArr.length; i< length; i++) {
        if(1 > xArr[i] || xArr[i] > 1000000000) {
            return [];
        }
    }
    
    xArr.sort(function(a, b) { return a - b; });
    yArr.sort(function(a, b) { return a - b; });
    
    x = xArr[0] == xArr[1] ? xArr[2] : xArr[0];
    y = yArr[0] == yArr[1] ? yArr[2] : yArr[0];
    
    answer.push(x);
    answer.push(y);
    
    return answer;
}