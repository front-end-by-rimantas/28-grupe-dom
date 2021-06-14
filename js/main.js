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
    // const cellHTML = `<div class="cell" style="width: ${elementSize}%;"></div>`.repeat(size);
    // const rowHTML = `<div class="row" style="height: ${elementSize}%;">${cellHTML}</div>`;
    // DOMelement.innerHTML = rowHTML.repeat(size);

    let cellHTML = '';
    for (let c = 0; c < size; c++) {
        cellHTML += `<div class="cell" style="width: ${elementSize}%;"></div>`;
    }

    let HTML = '';
    for (let r = 0; r < size; r++) {
        HTML += `<div class="row" style="height: ${elementSize}%;">${cellHTML}</div>`;
    }

    DOMelement.innerHTML = HTML;
}