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
    for(var i = colIndex; i < board[rowIndex].length; i++) {
        if(board[rowIndex][i] === 1) {
            count++;
        }
    }

    if(searchCol(board, rowIndex + 1, colIndex, count)) {
        return count * count;
    } else {
        return 0;
    }
}

function searchCol(board, rowIndex, colIndex, count) {
    var flag = true;
    for(var i = colIndex; i <= count; i++) {
        if(board[rowIndex][i] !== 1) {
            flag = false;
            break;
        }
    }

    if(flag) {
        if(rowIndex + 1 == board.length) {
            return true;
        }
        searchCol(board, rowIndex + 1, colIndex, count);
    } else {
        return false;
    }
}

