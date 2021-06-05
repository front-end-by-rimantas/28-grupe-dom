const buttonDOM = document.querySelector('button');
const spanDOM = document.querySelector('span');
const messageInputDOM = document.querySelector('#message');
const backgroundInputDOM = document.querySelector('#bg-color');
const textColorInputDOM = document.querySelector('#text-color');

messageInputDOM.style.color = 'red';

buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();
    spanDOM.innerText = messageInputDOM.value;
    messageInputDOM.value = '';
    spanDOM.style.backgroundColor = backgroundInputDOM.value;
    spanDOM.style.color = textColorInputDOM.value;
})