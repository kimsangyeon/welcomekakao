function solution(sticker) {
	var answer = 0;
    var length = sticker.length;
    var sum, max = 0;
    for(var i = 0; i < 3; i++) {
        sum = sticker[i];
        for(var j = i + 2; j < length; j += 2) {
            if(i === 0 && j === length - 3) {
                sum += sticker[j];
                break;
            }
            if(i !== 0 && j === length - 1) {
                sum += sticker[j];
                break;
            }
            if(j === length - 2) {
                if(sticker[j] > sticker[j + 1]) {
                    sum += sticker[j];
                } else {
                    sum += sticker[j + 1];
                }
                break;
            }
            
            if(sticker[j] + sticker[j + 2] > sticker[j + 1]) {
                sum += (sticker[j] + sticker[j + 2]);
                j += 2;
            } else {
                sum += sticker[j + 1];
                j += 1;
            }
        }
        if(sum > max) {
            max = sum;
        }
    }
    answer = max;
    
	return answer;
}