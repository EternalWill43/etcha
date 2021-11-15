let container = document.querySelector('.container');

function paint(div) {
    div.style.backgroundColor = "black";
}

function createGrid(gridAmount) {
    for (let i = 0; i < gridAmount; i++) {
        const row = document.createElement('div');
        container.appendChild(row);

        for (let j = 0; j < gridAmount; j++) {
            const square = document.createElement('div');
            square.setAttribute('style', 'background-color: white;');
            square.classList.add('square');
            square.style.width = `${960 / gridAmount}px`;
            square.style.height = `${960 / gridAmount}px`;
            row.appendChild(square);
        }
    }
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener("mouseenter", () => { paint(square) }, true);
    });
}


function getSize() {
    num = parseInt(document.querySelector(".inp").value);
    allboxes = document.querySelectorAll('.square');
    allboxes.forEach(box => {
        box.remove();
    })
    console.log(num);
    createGrid(num);
}

function cleargrid() {
    squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    })
}
getSize();