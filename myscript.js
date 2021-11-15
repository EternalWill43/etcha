function paint(div) {
    div.setAttribute('style', 'background-color: black;');
}

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };
    let squares = document.querySelectorAll('.grid-item');
    squares.forEach(square => {
        square.addEventListener("mouseenter", () => {paint(square)}, {propagate: false});
    })
  };
  
  makeRows(16, 16);

  function unpaint() {
      let squares = document.querySelectorAll('.grid-item');
      squares.forEach(square => {
        square.setAttribute('style', 'background-color: white;');
      });
  }

