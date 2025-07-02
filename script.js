/*function Gameboard () {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }
    console.log(board);


}

*/
const gameboard = [[1,2,3],
                   [4,5,6],
                   [7,8,9]];

for(let row of gameboard){
    const gameboardString = row.join(' ');
    console.log(gameboardString);
}