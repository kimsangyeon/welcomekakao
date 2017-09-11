function solution(arr) {
    if(!Array.isArray(arr) || Array.isArray(arr) && arr.length > 100000){
        return false;
    }
    
    var answer = true;
    var newArr = arr;
    var arrLength = newArr.length;
    quickSort(newArr, 0, arrLength - 1);
    
    for(var i = 0; i < arrLength; i++) {
        if(newArr[i] != i + 1) {
            answer = false;
            break;
        }
    }
    
    
    return answer;
}

function quickSort(arr, begin, end) {
    var i;
    
    if(begin < end) {
        i = patition(arr, begin, end);
        quickSort(arr, begin, i - 1);
        quickSort(arr, i + 1, end);
    }
    
    if(arr[end - 1] > arr[end] ) {
        var tmp = arr[end];
        arr[end] = arr[end - 1];
        arr[end - 1] = tmp;
    }
}

function patition(arr, begin, end) {
    var left = begin, right = end;
    var pivot = arr[left];
    var tmp;
    
    left++;
    
    while(left < right) {
        while(arr[left] < pivot && left < right) {
            left++;
        }
        
        while(arr[right] >= pivot && left <= right) {
            right--;
        }
        
        if(left < right) {
            tmp = arr[left];
            arr[left] = arr[right];
            arr[right] = tmp;
        } else {
            break;
        }
    }
    
    tmp = arr[right];
    arr[right] = arr[begin];
    arr[begin] = tmp;
    
    return right;
}