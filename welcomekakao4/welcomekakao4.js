function solution(board){
    var answer = 0;
    var tmpBoard = board;

    for(var i = 0; i < tmpBoard.length; i++) {
        for(var j = 0; j < tmpBoard[i].length; j++) {
            if(tmpBoard[i][j] === 1) {
                countOne(tmpBoard, i, j)
            }
        }
    }

    return answer;
}

function countOne(board, rowIndex, colIndex) {
    var count = 0;
    for(var i = colIndex; i < board[rowIndex].length; i++) {
        if(board[rowIndex][i] === 1) {
            count++;
        }
    }

    if(searchCol(board, rowIndex, i, count)) {
        return count * count;
    } else {
        return false;
    }
}

function searchCol(board, rowIndex, colIndex, count) {
    for(var i = rowIndex; i < count; i++) {
        if(board[i][colIndex] !== 1) {
            return false;
        }
    }

    if(searchReverseRow(board, i, colIndex, count)) {
        return true;
    } else {
        return false;
    }
}

function searchReverseRow(board, rowIndex, colIndex, count) {
    for(var )
}

function searchReverseCol(board, rowIndex, colIndex, count) {
    
}

function searchRow(board, rowIndex, colIndex, count) {
    
}

