
// Gameboard module
const gameBoard = (function(){
    let grids = ["x", "x", "x", "x", "x", "x", "x", "x", "x"];

    const gameBoard = document.querySelector("#game-board");

    const display = () => {
        grids.forEach(function(grid, index){
            var gridDiv = document.createElement("div");
            gridDiv.classList.add("grid");
            gridDiv.textContent = grid;

            gridDiv.addEventListener("click", placeChoice(index) );
            gameBoard.appendChild(gridDiv);
        });
    }

    const placeChoice = (e) => {
        console.log(this)
    }

    return {
        display
    }

})();

gameBoard.display();

// Player object
const Player = () => {


}