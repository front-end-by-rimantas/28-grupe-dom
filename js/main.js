const menu = [
    { href: './', title: 'Home' },
    { href: './services', title: 'Services' },
    { href: './about-us', title: 'About us' },
    { href: './contact-us', title: 'Contact us' }
];

function renderNav(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';

    let i = 0;
    while (i < data.length) {
        const menuItem = data[i];
        HTML += `<a href="${menuItem.href}">${menuItem.title}</a>`;
        i++;
    }

    DOM.insertAdjacentHTML('beforeend', `<nav>${HTML}</nav>`);
}

renderNav('header', menu);