const submitDOM = document.querySelector('button');
const orderDOM = document.querySelector('.order');
const nameDOM = document.querySelector('#customer');
const sriubaDOM = document.querySelector('#sriuba');
const pagrindinisPatiekalasDOM = document.querySelector('#patiekalas');
const desertasDOM = document.querySelector('#desertas');
const allGerimaiDOM = document.querySelectorAll('input[name="gerymas"]');

function arNoriu(DOM) {
    return DOM.checked ? 'nori' : 'nenori';
}

function kurisPazymetas(DOMlist) {
    for (const itemDOM of DOMlist) {
        if (itemDOM.checked) {
            return itemDOM.value;
        }
    }
}

submitDOM.addEventListener('click', (e) => {
    e.preventDefault();

    orderDOM.innerText = `Uzsakovas vardu ${nameDOM.value} ${arNoriu(sriubaDOM)} sriubos, ${arNoriu(pagrindinisPatiekalasDOM)} pagrindinio patiekalo, ${arNoriu(desertasDOM)} deserto ir ${kurisPazymetas(allGerimaiDOM)} yra pasirinktas gerymas.`;
})