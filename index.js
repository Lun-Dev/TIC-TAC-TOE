(function() {
    const _getContainer = document.querySelector(".grid-container");
    const _board = [];
    let nextMove = "X"

    function gameOver() {
    console.log("hi")
    }

    function gameTie() {
    console.log("hi")
    }

    function gameWon() {
    console.log("hi")
    }


const squareBox = (element, index) => {
        return {
            element,
            index,
            state: "",
            clicked() {
                state = nextMove; // state was blink, now it equals value in nextMove (Either X or O) 
                element.classList.remove("notClicked"); // Remove notClicked from div, since it is clicked
                element.onclick = () => {
                    return false; // Make the square unclickable
                };
                element.querySelector('p').innerHTML = state; // fill the P with state (Either X or O)
                nextMove == "X" ? (nextMove = "O") : (nextMove = "X") // if nextMove = X, change it to O; otherwise, change it to X
            }
        }
    }

    for (let i = 0; i < 9; i++) {
        const div = document.createElement('div');
        div.classList.add("square", "notClicked");
        const square = squareBox(div, i);
        div.onclick = () => { square.clicked() };
        div.appendChild(document.createElement("p"))
        _getContainer.appendChild(div);
        _board.push(square);
    }
})();

console.log(_board)

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
