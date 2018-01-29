function divisors(integer) {
    let result = [];
    let numLength = String(integer).length;

    if (integer % 2 !== 0) {
        for (let i = 2; i <= integer; i++) {
            if(i === integer){
                result.push(i + ' ' + "is prime");
                return result.join(' ');
            }
            if(integer % i === 0 && numLength >= 2){
                for(let j = i; j < integer;j++){
                    if(integer % j === 0){
                        result.push(j);
                    }
                }
                return result;
            }
        }
    }
    else {
        for (let i = 2; i < integer; i++) {
            if (integer % i === 0) {
                result.push(i);
            }
        }
        return result;
    }
}
let n = divisors(9);
console.log(n);