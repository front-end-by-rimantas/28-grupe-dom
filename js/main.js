// https://www.w3schools.com/tags/tag_select.asp

function renderSelect(selector, dataList) {
    // susirandame vieta, kur zemiau kurio elemento tures nugulti naujas turinys
    const DOM = document.querySelector(selector);

    // susigeneruojame visus galimus select pasirinkimus
    let optionsHTML = '';
    for (const dataItem of dataList) {
        optionsHTML += `<option value="${dataItem}">${dataItem}</option>`;
    }

    // sukonstruojame galutini select elementa ir istatome i reikiama vieta
    const HTML = `<select>${optionsHTML}</select>`;
    DOM.insertAdjacentHTML('afterend', HTML);
}

const animals = ['zuikis', 'barsukas', 'lape', 'vilkas', 'sernas', 'stirna', 'vovere'];
renderSelect('label', animals);

// const vegetables = ['morka', 'svogunas', 'bulve'];
// renderSelect('label', vegetables);

const selectDOM = document.querySelector('select');
const buttonDOM = document.querySelector('button');
const optionDOM = document.querySelector('.option');
buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();
    optionDOM.innerText = selectDOM.value;
})