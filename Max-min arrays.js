function solve(arr){
    let resArr = [];
    let sortArray = arr.sort(function (a, b){
        return b - a;
    });
    let j = sortArray.length - 1;
    // if(arr.length % 2 === 0){
        for (let i = 0; i < sortArray.length / 2; i++) {
            if(i === j){
                resArr.push(sortArray[j]);
            }
            else {
                resArr.push(sortArray[i]);
                resArr.push(sortArray[j]);
                j--;
            }
        }

    // if(arr.length % 2 !== 0){
    //     for (let i = 0; i <= j; i++) {
    //         if(i === j){
    //             resArr.push(sortArray[j]);
    //         }
    //         else {
    //             resArr.push(sortArray[i]);
    //             resArr.push(sortArray[j]);
    //             j--;
    //         }
    //     }
    // }
    return resArr;
}
let n = solve([2,34,5,5,3,4]);
let n1 = solve([2,34,5,5,4]);
console.log(n);
console.log(n1);