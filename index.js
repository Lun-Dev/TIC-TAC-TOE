(function() {
    const _getContainer = document.querySelector(".grid-container");
    const _board = [];
    let nextMove = "X"

    function gameOver(message) {
        console.log(message)
    }

    function gameTie() {
        let notTie = true;
        _board.forEach(({state}) => {
            if (state == "") { 
                notTie = false
            };
        })
            return notTie;
    }

    function gameWon() {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                _board[a].state !== "" &&
                _board[a].state === _board[b].state &&
                _board[a].state === _board[c].state
            ) {
                return true;
            }
        }
        return false;
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
                if (gameWon()) return gameOver(`The winner is player ${state}`)
                if (gameTie()) return gameOver(`Tie`)
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
