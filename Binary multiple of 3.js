function binary(arg1) {
    let arr = String(arg1).split('');
    let sum = 0;
    let pow = 0;
    let number = 2;

    console.log(arr);
    console.log(arr.length);

    for(let i = 0; i < arr.length; i++) {
        if((arr[i]) > String.fromCharCode(49) || (arr[i]) < String.fromCharCode(48)) return false;
    }

    for(let i = arr.length - 1; 0 <= i ; i--){
        console.log(arr[i]);
        if(Number(arr[i]) === 0) {
            sum += number*0;
        }
        if(Number(arr[i]) === 1) {
            sum += Math.pow(number, (pow));
        }
        pow++;
    }
    if (!(sum % 3 === 0)){
        return false;
    }
    return true;
}

let n = binary("1110");
console.log(n);