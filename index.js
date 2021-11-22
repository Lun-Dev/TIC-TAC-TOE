function GameBoard() {

}

const playerFactory = (sign) => {
    return { sign };
}

const player = playerFactory('x')
const computer = playerFactory('o')