function generuotiLenta(selector, count) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: nerastas elementas');
        return false;
    }

    if (count < 0 ||
        count % 1 !== 0) {
        console.error('ERROR: skaicius turi buti teigiamas ir sveikasis');
        return false;
    }

    let HTML = '';
    for (let i = 1; i <= count; i++) {
        HTML += `<div>${i}</div>`;
    }

    DOM.innerHTML = HTML;
}

generuotiLenta('.lenta', 8);