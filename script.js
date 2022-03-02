const gridCont = document.querySelector("#gridCont");
const reset = document.querySelector("#reset")

reset.addEventListener("click", () => {
    resetGrid();
});

///////////////////////functions//////////////////////////

function loadGrid(input) {
    for(let i=1;i<=input;i++) {
        let gridRow = document.createElement("div");
        gridCont.appendChild(gridRow).className="gridRow";
        for(let x=1;x<=input;x++) {
            let gridBox = document.createElement("div");
            gridBox.addEventListener("mouseenter", () => {
                gridBox.style.backgroundColor="black";
            });
            gridRow.appendChild(gridBox).className="gridBox";
        }
    }
}

function resetGrid() {
    const gridBoxes = document.querySelectorAll(".gridBox");
    gridBoxes.forEach((gridBox) => {
        gridBox.style.backgroundColor="white";
    });
}

loadGrid(16);