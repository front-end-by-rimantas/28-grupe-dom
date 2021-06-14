const optionDOM = document.querySelector('.option');
const buttonDOM = document.querySelector('button');
const inputDOM = document.getElementById('board');
const boardDOM = document.querySelector('.board');

buttonDOM.addEventListener('click', (e) => {
    e.preventDefault();
    const n = parseInt(inputDOM.value);
    optionDOM.textContent = `${n}x${n}`;
    renderBoard(boardDOM, n);
})

function renderBoard(DOMelement, size) {
    const elementSize = 100 / size;
    let whiteBlackCellHTML = '';
    let blackWhiteCellHTML = '';
    let HTML = '';
    const whiteCellHTML = `<div class="cell" style="width: ${elementSize}%; background-color: white;"></div>`;
    const blackCellHTML = `<div class="cell" style="width: ${elementSize}%; background-color: black;"></div>`;

    for (let c = 0; c < size; c++) {
        if (c % 2 === 0) {
            whiteBlackCellHTML += whiteCellHTML;
            blackWhiteCellHTML += blackCellHTML;
        } else {
            whiteBlackCellHTML += blackCellHTML;
            blackWhiteCellHTML += whiteCellHTML;
        }
    }

    let cellHTML = '';
    for (let r = 0; r < size; r++) {
        cellHTML = r % 2 === 0 ? whiteBlackCellHTML : blackWhiteCellHTML;
        HTML += `<div class="row" style="height: ${elementSize}%;">${cellHTML}</div>`;
    }

    DOMelement.innerHTML = HTML;
}