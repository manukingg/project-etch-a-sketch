let containerSize = 400;
let cellAmount = 16;
let body = document.querySelector('body');
let gridContainer = document.createElement('div');
let cleanButton = document.createElement('button');
let inputSize = document.querySelector('input')
let gridSizeValue = document.querySelector('.gridSizeValue')

createGrid(cellAmount);
draw();

function createContainer(containerSize){
    gridContainer.classList.add('cellContainer');
    gridContainer.style.height = `${containerSize}px`;
    gridContainer.style.width = `${containerSize}px`;
    body.appendChild(gridContainer);

}

function createCell(cellSize){
    const gridElement = document.createElement('div');
    gridElement.style.height = `${cellSize}px`;
    gridElement.style.width = `${cellSize}px`;
    gridElement.classList.add('gridCell');
    return gridElement;
}

function createGrid(cellAmount){
    let cellSize = containerSize/cellAmount;
    createContainer(containerSize);
    for (let i = 0; i < cellAmount; i++){
        for (let j = 0; j < cellAmount; j++){
            gridContainer.appendChild(createCell(cellSize));
        }
    }
}

function reset (){
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    createGrid(cellAmount);
    draw ();
}



function draw () {
    let pixels = document.querySelectorAll('.gridCell');
    pixels.forEach((gridElement) => {
        gridElement.addEventListener('mouseover', function (e) {
            ;
            e.target.style.background = generateRandomColor();
        })
    })
}


inputSize.addEventListener('input', function(e) {
    cellAmount = e.target.value;
    gridSizeValue.textContent = `${cellAmount}x${cellAmount}`;
    reset();
})  

cleanButton.classList.add('cleanButton');
cleanButton.textContent = 'Clean';
body.insertBefore(cleanButton, gridContainer);

cleanButton.addEventListener('click', reset);

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}