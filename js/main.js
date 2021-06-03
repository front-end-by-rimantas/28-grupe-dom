let rezultatas = 0;

const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const numberDOM = document.querySelector('.number');
const resetDOM = document.querySelector('.reset');

minusDOM.addEventListener('click', () => {
    numberDOM.innerText = --rezultatas;
})

plusDOM.addEventListener('click', () => {
    numberDOM.innerText = ++rezultatas;
})

resetDOM.addEventListener('click', () => {
    rezultatas = 0;
    numberDOM.innerText = rezultatas;
})