/*
Surasti visus ingredietus ir ju pavadinimus atspausdinti i console

Visu ingredienu pavadinimai turi buti didziosiomis raidemis ir sudeti i array

Isspausdinti gauta array i console
*/

const liDOM = document.querySelectorAll('li');
console.log(liDOM);

for (let i = 0; i < liDOM.length; i++) {
    const ingredientas = liDOM[i].innerText;
    console.log(ingredientas);
}