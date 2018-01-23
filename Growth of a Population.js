function nbYear(p0, percent, aug, p, i = 0) {

    let result;

    if (p0 >= p) {
        return i;
    }
    else {
        i += 1;
        result = p0 + p0 * (percent / 100) + aug;
        return nbYear(result, percent, aug, p, i);
    }
}

let n = nbYear(1500, 5, 100, 5000);
console.log(n);