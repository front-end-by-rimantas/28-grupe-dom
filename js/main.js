const lentaDOM = document.querySelector('.lenta');
const namuRezultatasDOM = lentaDOM.querySelector('[data-komanda="namu"]');
const sveciuRezultatasDOM = lentaDOM.querySelector('[data-komanda="sveciu"]');

const aiksteleDOM = document.querySelector('.aikstele');

const namuKomandaDOM = aiksteleDOM.querySelector('[data-komanda="namu"]');
const namuTaskaiDOM = namuKomandaDOM.querySelectorAll('button');

const sveciuKomandaDOM = aiksteleDOM.querySelector('[data-komanda="sveciu"]');
const sveciuTaskaiDOM = sveciuKomandaDOM.querySelectorAll('button');

let namuRezultatas = 0;
let sveciuRezultatas = 0;

for (let i = 0; i < 3; i++) {
    namuTaskaiDOM[i].addEventListener('click', () => {
        namuRezultatas += i + 1;
        namuRezultatasDOM.innerText = namuRezultatas;
    })

    sveciuTaskaiDOM[i].addEventListener('click', () => {
        sveciuRezultatas += i + 1;
        sveciuRezultatasDOM.innerText = sveciuRezultatas;
    })
}