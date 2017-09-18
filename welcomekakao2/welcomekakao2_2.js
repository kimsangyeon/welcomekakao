function solution(arr) {
    if(!Array.isArray(arr) || Array.isArray(arr) && arr.length > 100000){
        return false;
    }
     
    var answer = true;
    var tmpArr = arr;
    var newArr = [];

    for(var i = 0; i < tmpArr.length && answer == true; i++) {
    	if(tmpArr[i] < 1) {
    		answer = false;
    	}
    	if(newArr[tmpArr[i] - 1] == tmpArr[i]) {
    		answer = false;
    	}
    	newArr[tmpArr[i] - 1] = tmpArr[i];
    }

    for(var i = 0; i < newArr.length && answer == true; i++) {
    	if(newArr[i] != i + 1) {
    		answer = false;
    	}
    }    
    
    return answer;
}