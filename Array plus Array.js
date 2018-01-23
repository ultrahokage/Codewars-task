function arrayPlusArray(arr1, arr2) {
    let sum = 0;

    for(let i = 0; i < arr1.length; i++){
        sum += arr1[i];
    }
    arr1 = sum;

    sum = 0;
    for(let i = 0; i < arr2.length; i++){
        sum += arr2[i];

    }
    arr2 = sum;
    return arr1 + arr2; //something went wrong
}
let n = arrayPlusArray([1, 2, 3], [4, 5, 6]);
console.log(n);