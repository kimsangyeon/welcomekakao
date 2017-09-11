function solution(arr) {
    if(!Array.isArray(arr) || Array.isArray(arr) && arr.length > 100000){
        return false;
    }
    
    var answer = true;
    var sortArr = arr.sort(function(a, b) { return a - b;});
    
    for(var i = 0, length = sortArr.length; i < length; i++) {
        if(sortArr[i] != i + 1) {
            answer = false;
            break;
        }
    }
    
    return answer;
}
