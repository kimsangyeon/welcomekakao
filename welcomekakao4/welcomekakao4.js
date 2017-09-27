function solution(board){
    var answer = 0;
    var tmpBoard = board;

    for(var i = 0; i < tmpBoard.length; i++) {
        for(var j = 0; j < tmpBoard[i].length; j++) {
            if(tmpBoard[i][j] === 1) {
                searchRow(tmpBoard, i, j)
            }
        }
    }

    return answer;
}

function searchRow(board, rowIndex, colIndex) {
    for(var i = colIndex; i < board[rowIndex].length; i++) {
        if(board[rowIndex][i] === 1) {
            
        }
    }
}

function searchCol(board, rowIndex, colIndex) {

}

function searchReverseRow(board, rowIndex, colIndex) {

}

function searchReverseCol(board, rowIndex, colIndex) {
    
}