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
// grid gameboard turned into an object
function Gameboard(){
    return {
        row1: [1, 2, 3],
        row2: [4, 5, 6],
        row3: [7, 8, 9],
        printGameboard(){
            for (let key in this) {
                if (Array.isArray(this[key])) {
                    console.log(this[key].join(' '));
                }
            }
        }
    };

}

const gameboard = Gameboard();
gameboard.printGameboard();


// player object
function player(name, symbol) {
    return{
        name,
        symbol,
    };
};

let player1 = player("player1", "X");
let player2 = player("Player2", "O");


