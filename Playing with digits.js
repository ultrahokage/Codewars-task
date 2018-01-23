// Some numbers have funny properties. For example:
//
//     89 --> 8¹ + 9² = 89 * 1
//
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
//
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
//
// Given a positive integer n written as abcd...
// (a, b, c, d... being digits) and a positive integer p we want to find a positive integer k,
// if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n. In other words:
//
//     Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
//
// If it is the case we will return k, if not return -1.
//
// Note: n, p will always be given as strictly positive integers.

// function digPow(n, p){
//    let sumNumbersInPow = 0;
//    let number = 0;
//    let k = 0;

//    let array = String(n).split("");
//
//    for(let i = 0; i < array.length; i++){
//
//        number = array[i];
//        number = number**(p + i);  //number = Math.pow(number, (p + i));
//        sumNumbersInPow += number;
//        k = sumNumbersInPow / n;
//    }
//    if ((Number(n * k)) === (sumNumbersInPow)) {
//        return (k);
//    }
//    return -1;
// }

function digPow(n, p){
    let sumNumbersInPow = 0;
    let number = 0;
    let k = 0;

    let array = String(n).split("");

    for(let i = 0; i < array.length; i++){

        number = array[i];
        number = Math.pow(number, (p + i));
        sumNumbersInPow += number;
        k = (sumNumbersInPow / n);
    }
    if(! Number.isInteger(k)) return -1;

    if ((n * k) === (sumNumbersInPow)) {
        return (k);
    }
}

let i = digPow(92, 1);
let n = digPow(46288, 3);
let u = digPow(695, 2);
console.log(i);
console.log(n);
console.log(u);
