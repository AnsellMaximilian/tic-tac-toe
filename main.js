
// Gameboard module
const gameBoard = (function(){
    let grids = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

    const getGrids = () => grids;

    const updateGrids = (position, newValue) => {
        grids[position] = newValue;
    }

    const gameBoard = document.querySelector("#game-board");
    
    const display = () => {
        grids.forEach(function(grid, index){
            var gridDiv = document.createElement("div");
            gridDiv.classList.add("grid");
            gridDiv.dataset.position = index;
            gridDiv.textContent = grid;

            gridDiv.addEventListener("click", (function(){ game.placeMarker(event); }));
            gameBoard.appendChild(gridDiv);
        });
    }

    const resetBoard = () => {
        const winnerDisplay = document.querySelector("#winner-display");
        winnerDisplay.style.display = "none";
        gameBoard.innerHTML = "";
        grids = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        display();
    }

    return {
        display,
        updateGrids,
        getGrids,
        resetBoard
    }

})();

// Player object
const Player = (name, marker) => {

    const getName = () => name;
    const getMarker = () => marker;

    return {
        getName,
        getMarker
    }

}


// Game module
const game = (function(){
    const winningCombos = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
        [0, 4, 8], [2, 4, 6] // Diagonal
    ];

    const playerOne = Player("Pinkman", "x");
    const playerTwo = Player("Walter", "o");

    let currentPlayer = playerTwo;
    
    const startGame = () => {
        const replayButton = document.querySelector("#replay-button");
        replayButton.addEventListener("click", gameBoard.resetBoard ); 
        gameBoard.display();
    }

    const placeMarker = (gridEvent) => {
        let grid = gridEvent.target;
        const marker = currentPlayer.getMarker();
        if (grid.textContent == " "){
            grid.textContent = marker;
            gameBoard.updateGrids(parseInt(grid.dataset.position), marker);
            checkWin(grid);

            changeCurrentPlayer();
        }else {
            alert(`DUMBASS ${currentPlayer.getMarker()}`);
        }
    
    }

    const changeCurrentPlayer = () => {
        currentPlayer = currentPlayer == playerOne ? playerTwo : playerOne;
    }

    const checkWin = (grid) => {
        const marker = currentPlayer.getMarker();
        const grids = gameBoard.getGrids();
        winningCombos.forEach(function(combo, index){
            if(combo.includes(parseInt(grid.dataset.position))){
                if(grids[combo[0]] == marker && grids[combo[1]] == marker && grids[combo[2]] == marker){
                    displayWinner(combo);
                }
            }
        });
    }

    const displayWinner = (combo) => {
        combo.forEach(function(position){
            let grid = document.querySelector(`div[data-position="${position}"]`);
            grid.style.backgroundColor = "rgb(42, 255, 31)";
        });

        const winnerDisplay = document.querySelector("#winner-display");
        const winnerMessage = document.querySelector("#winner-msg");
        winnerDisplay.style.display = "block";
        winnerMessage.textContent = `Congratulations, ${currentPlayer.getName()}`;

    }

    return {
        startGame,
        placeMarker,
        currentPlayer
    }
})();

game.startGame();