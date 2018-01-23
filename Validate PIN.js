function validatePIN(pin) {
    let arr = Array.isArray(pin);
    let L = pin.length;

    if (L !== 4 && L !== 6) {
        return false;
    }
    for (let i = 0; i < L; i++) {

        if (!Number.isInteger(Number(pin[i]))) {
            return false;
        }
    }

    return true;
}

let n = validatePIN("0000");
let n1 = validatePIN("05555");
console.log(n);
console.log(n1)