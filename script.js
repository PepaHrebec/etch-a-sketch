const gridCont = document.querySelector("#gridCont");

function loadGrid() {
    for(let i=1;i<=16;i++) {
        let gridBox = document.createElement("div");
        gridBox.textContent=`${i}`;
        gridCont.appendChild(gridBox).className="gridBox";
    }
}

loadGrid();