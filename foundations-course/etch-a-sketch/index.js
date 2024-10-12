const container=document.querySelector(".grid-container");


function gridMaker (){
    
    do {
        var grids = prompt("Number of squares per side? (max 100)");
    } while (grids > 100)
        var size = 100/grids;
    
    var existingBoxes = document.querySelectorAll('.box');
    existingBoxes.forEach(box => box.remove());
    
    for(let i=0; i < (grids*grids); i++) {
        let div = document.createElement("div");
        div.classList.add("box");
        div.addEventListener("click", () => {div.style.backgroundColor = 'black'});
        div.style.width = String(size) + "%";
        div.style.height = String(size) + "%";
        container.appendChild(div);
    }
}

gridMaker ();

