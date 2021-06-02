/*
Surasti h1 (antraste)
Perrasyti h1 elemento teksta i "Zuikio darzas"

Surasti visus darzoves
Kiekvienos darzoves teksta pakeisti i "Israuta darzove"
*/

const h1DOM = document.querySelector('h1');
h1DOM.innerText = 'Zuikio darzas';

const darzovesDOM = document.querySelectorAll('li');
for (let i = 0; i < darzovesDOM.length; i++) {
    darzovesDOM[i].innerText = 'Israuta darzove';
}