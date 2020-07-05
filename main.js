
// Gameboard module
const gameBoard = (function(){
    let grids = ["x", "x", "x", "x", "x", "x", "x", "x", "x"];

    const gameBoard = document.querySelector("#game-board");

    const display = () => {
        grids.forEach(function(grid, index){
            var gridDiv = document.createElement("div");
            gridDiv.classList.add("grid");

            var gridDivSpan = document.createElement("span");
            gridDivSpan.textContent = grid;
            gridDiv.appendChild(gridDivSpan);

            gameBoard.appendChild(gridDiv);
        });
    }

    return {
        display
    }

})();

gameBoard.display();

// Player object
const Player = () => {


}