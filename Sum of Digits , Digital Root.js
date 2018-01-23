function digital_root(n) {
    let sum = 0;

    let all = String(n).split("");

    for(let i = 0; i < all.length;i++) {
        sum += Number(all[i]);
    }
    if(all.length > 2) {
        return digital_root(sum);
    }
    return sum;
}

let k = digital_root(92332);
console.log(k);