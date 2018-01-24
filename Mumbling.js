function accum(s) {
    let res = "";
    let arr = [];
    let repeat = 0;
    let i;

    for(i = 0; i < s.length; i++) {

        if(i === 0) {
            res += s[i].toUpperCase();
            arr.push(res);

        }

        if(i >= 1){

            res = "";

            res = s[i].toUpperCase(); // make first letter UP
            for (repeat; repeat < arr.length; repeat++) {  // another low
                res += s[i].toLowerCase();
            }
            repeat = 0;  // our repeat goint to 0 evert cycle
            arr.push(res);
        }
    }

    return arr.join('-');
}
let n = accum("abcd");
console.log(n);