/*
Surasti visus ingredietus ir ju pavadinimus atspausdinti i console

Visu ingredienu pavadinimai turi buti didziosiomis raidemis ir sudeti i array

Isspausdinti gauta array i console

Norimas rezultatas:
['MORKOS', 'BULVES', 'SVOGUNAS', 'VANDUO', 'DRUSKA']
*/

const liDOM = document.querySelectorAll('li');
const ingredientai = [];

for (let i = 0; i < liDOM.length; i++) {
    const ingredientas = liDOM[i].innerText;
    ingredientai.push(ingredientas);
}

console.log(ingredientai);