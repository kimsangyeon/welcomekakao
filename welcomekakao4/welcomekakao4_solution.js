function solution(board){
    var answer = 0;
    var maxNum = 0;

    for(var i = 1; i < board.length; i++) {
        for( var j = 1; j < board[i].length; j++) {
            if(board[i][j] === 1) {
                board[i][j] += Math.min(board[i-1][j], board[i][j-1], board[i-1][j-1]);
                if(board[i][j] > maxNum) {
                    maxNum = board[i][j];
                }
            }
        }
    }

    if(board.length === 1 && board[0].length === 1 && board[0][0] > maxNum) {
        maxNum = board[0][0];
    }

    answer = maxNum * maxNum;

    return answer;
}