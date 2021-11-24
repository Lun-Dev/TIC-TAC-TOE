let gameBoard = ['','','','','','','','','']

const createPlayers = (name, symbol) => { // Function Factory
    return { name, symbol };
}

const user = createPlayers('Player One', 'x');
const computer = createPlayers('Computer', 'o');

console.log(user.name);
console.log(user.symbol);
console.log(computer.name);
console.log(computer.symbol);