function solution(board){
    var answer = 0;
    var tmpBoard = board;

    for(var i = 0; i < tmpBoard.length; i++) {
        for(var j = 0; j < tmpBoard[i].length; j++) {
            if(tmpBoard[i][j] === 1) {
                if(answer < countOne(tmpBoard, i, j)) {
                    answer = countOne(tmpBoard, i, j);
                }
            }
        }
    }

    return answer;
}

function countOne(board, rowIndex, colIndex) {
    var count = 0;
    var maxRect = 0;
    for(var i = colIndex; i < board[rowIndex].length; i++) {
        if(board[rowIndex][i] === 1) {
            count++;
        }
    }
    
    if(board.length - rowIndex < count) {
        return 0;
    }

    var rowCnt = 1;
    for(var i = 0; i < count; i++) {
        if(!searchCol(board, rowIndex + 1, colIndex, count)) {
            if(maxRect < rowCnt * rowCnt) {
                maxRect = rowCnt * rowCnt;
            }
            return maxRect;
        }
        rowCnt++;
    }
    
    return count * count;
}

function searchCol(board, rowIndex, colIndex, count) {
    var flag = true;

    for(var i = colIndex; count == 0; count--) {
        if(board[rowIndex][i] !== 1) {
            return false;
        }
    }
    
    return true;
}