function solution(board)
{
    var answer = 0;
    var lowLength = board[0].length;
    var colLength = board[0].length;
    
    var max = lowLength > colLength ? lowLength : colLength;
    
    var tmpBoard = board;
    for(var i = 0; i < tmpBoard.length; i++) {
        var count = 0;
        for(var j = 0; j < tmpBoard[i].length; j++) {
            if(tmpBoard[i][j] === 1) {
                count++;
            }
        }
        for(var k = j, nextIdx = i + 1; k < count; k++) {
            
        }
    }
    
    
    return answer;
}