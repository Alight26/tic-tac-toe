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
        row1: [1, 1, 1],
        row2: [2, 2, 2],
        row3: [3, 3, 3],

        printGameboard(){
            for (let key in this) {
                if (Array.isArray(this[key])) {
                    console.log(this[key].join(' '));
                }
            }
        },

    };

}

const gameboard = Gameboard();
gameboard.printGameboard();

function gameController(
    playerOneName = "player one",
    playerTwoName = "player two"
) {
    const board = Gameboard();
    
    // two players playing the gamed
    const players = [{
        name: playerOneName,
        symbol: "X"
    },
    {
        name: playerTwoName,
        symbol: "O"
    },
];

    const playerTurn = players[0];
    
    // that player is gonna make there move




}


// player object
function player(name, symbol) {
    return{
        name,
        symbol,

        }
};

const player1 = player("player1", "X");
const player2 = player("Player2", "O");



//user input 
//create a user input function
// create another function that will call those with the player objects
//prompt 1 and 2 go in as the array values
//if index not an X or O replace with player symbol

