function bit(n) {
    let num = n.toString(2);
    let result = 0;
    for(let i = 0; i < num.length; i++){

        if(num[i] == 1){
            result += 1;
        }
    }
    return result;
}
let n = bit(1234);
console.log(n);