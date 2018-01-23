function reverse(string){
    let res = "";
    let arr1 = [];


    for(let i = 0 ; i <= string.length; i++) {
        if(i === string.length){
            arr1.push(res);
        }
        if(string[i] === ' '){
            arr1.push(res);
            res = "";
        }
        else {
            console.log(string[i]);
            res += string[i];
        }
    }
    arr1.reverse();

    return arr1.join(' ');
}
let n = reverse("lool kek chel.");
console.log(n);
