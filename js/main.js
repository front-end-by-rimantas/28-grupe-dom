const optionDOM = document.querySelector('.option');
const buttonDOM = document.querySelector('button');
const inputDOM = document.getElementById('board');

buttonDOM.addEventListener('click', (e) => {
    e.preventDefault();
    const n = inputDOM.value;
    optionDOM.textContent = `${n}x${n}`;
})