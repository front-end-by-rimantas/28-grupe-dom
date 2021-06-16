function time(nuo, iki, trukme) {
    iki = nuo > iki ? iki + 24 : iki;
    for (let i = nuo * 60; i <= iki * 60; i += trukme) {
        const m = i % 60;
        const h = (i - m) / 60 % 24;
        console.log(`${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}`);
    }
}

time(8, 11, 45);
time(22, 1, 45);