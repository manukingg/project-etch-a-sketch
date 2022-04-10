let screenWidth = window.innerHeight;
let containerSize = screenWidth * 0.45;
let cellAmount = 16
let cellSize = containerSize/cellAmount;
let body = document.querySelector('body');
let gridContainer = document.createElement('div');

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
    createContainer(containerSize);
    for (let i = 0; i < cellAmount; i++){
        for (let j = 0; j < cellAmount; j++){
            gridContainer.appendChild(createCell(cellSize));
        }
    }
}

createGrid(cellAmount);

const pixels = document.querySelectorAll('.gridCell');
pixels.forEach((gridElement) => {
    gridElement.addEventListener('mouseover', function (e) {
        e.target.style.background = 'black';
    })
})