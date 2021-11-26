const getContainer = document.querySelector(".grid-container");
const _board = [];
let nextMove = 'X';

function gameOver() {
console.log("hi")
}

function gameTie() {
console.log("hi")
}

function gameWon() {
console.log("hi")
}


// const gameBoard = (function() { // Module
//   const getContainer = document.querySelector(".grid-container")
  
//   let _board = [...Array(9)].map(x => x = '');
//   let _draw = ''

//   function method() {
//       for (const thing in _board) {
//           _draw += `<div class="cell">${_board[thing]}</div>`
//       }
//       getContainer.innerHTML = _draw
//   }
  
//   return {
//   	method: method
//   }
  	
// })();

// gameBoard.method()

// const createPlayers = (name, symbol) => { // Function Factory
//     const sample = () => { console.log("Hello")} // Auto goes to prototype
//     return { name, symbol, sample };
// }

// const user = createPlayers('Player One', 'x');
// const computer = createPlayers('Computer', 'o');

// console.log(user.sample())
