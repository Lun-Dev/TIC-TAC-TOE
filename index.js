let gameBoard = (function() {
	let _board = [...Array(9)].map(x => x = '');
  
  function method() {
  	console.log(_board)
  }
  
  return {
  	method: method
  }
  	
})();

gameBoard.method()

const createPlayers = (name, symbol) => { // Function Factory
    const sample = () => { console.log("Hello")} // Auto goes to prototype
    return { name, symbol, sample };
}

const user = createPlayers('Player One', 'x');
const computer = createPlayers('Computer', 'o');

console.log(user.sample())
