function time(nuo, iki) {
    for (let h = nuo; h < iki; h++) {
        for (let m = 0; m < 60; m += 1) {
            console.log(`${h}:${m < 10 ? '0' + m : m}`);
        }
    }
}

time(3, 5);