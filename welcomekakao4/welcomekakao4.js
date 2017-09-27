function solution(board){
    var answer = 0;
    var tmpBoard = board;

    for(var i = 0; i < tmpBoard.length; i++) {
        for(var j = 0; j < tmpBoard[i].length; j++) {
            if(tmpBoard[i][j] === 1) {
                searchRow(tmpBoard, j)
            }
        }
    }

    return answer;
}

function searchRow(board, startIndex) {

}

function searchCol(board, startIndex) {

}

function searchReverseRow(board, startIndex) {

}

function searchReverseCol(board, startIndex) {
    
}