const gridCont = document.querySelector("#gridCont");
const resetBtn = document.querySelector("#reset");
const slider = document.querySelector(".slider");
const sliderVal = document.querySelector("#sliderVal");
const rainbowBtn = document.querySelector("#rainbow");

let rainbVal=0;

resetBtn.addEventListener("click", () => {
    resetGrid();
});

rainbowBtn.addEventListener("click", () => {
    if(rainbVal===0) {
        rainbVal=1;
        rainbowBtn.style.border="inset 4px #ed6e4a";
        rainbowBtn.style.backgroundColor="#ed6e4a"
    } else {
        rainbVal=0;
        rainbowBtn.style.border="outset 4px #ec9076";
        rainbowBtn.style.backgroundColor="#ec9076"
    }
})

slider.addEventListener("change", () => {
    resize();
    loadGrid(slider.value);
    sliderVal.textContent=`${slider.value}`;
})

///////////////////////functions//////////////////////////

function randColor() {
    let color="";
    for(let i=1;i<=3;i++){
        color=color+(Math.floor(Math.random()*256)).toString(16);
    }
    return color;
}

function loadGrid(input) {
    for(let i=1;i<=input;i++) {
        let gridRow = document.createElement("div");
        gridCont.appendChild(gridRow).className="gridRow";
        for(let x=1;x<=input;x++) {
            let gridBox = document.createElement("div");
            gridBox.addEventListener("mouseenter", () => {
                if(rainbVal===0){
                    gridBox.style.backgroundColor="black";
                } else {
                    console.log(randColor());
                    gridBox.style.backgroundColor=`#${randColor()}`;
                }
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
