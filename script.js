const gridCont = document.querySelector("#gridCont");
const resetBtn = document.querySelector("#reset");
const slider = document.querySelector(".slider");
const sliderVal = document.querySelector("#sliderVal");

resetBtn.addEventListener("click", () => {
    resetGrid();
});

slider.addEventListener("change", () => {
    resize();
    loadGrid(slider.value);
    sliderVal.textContent=`${slider.value}`;
})

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

function resize() {
    while(gridCont.firstChild){
        gridCont.firstChild.remove();
    }
}

function resetGrid() {
    const gridBoxes = document.querySelectorAll(".gridBox");
    gridBoxes.forEach((gridBox) => {
        gridBox.style.backgroundColor="white";
    });
}

loadGrid(16);
