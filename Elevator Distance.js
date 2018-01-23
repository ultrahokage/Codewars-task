function elevatorDistance(array) {
    let sum = 0;
    let resOfTwo = 0;

    for(let i = 0; i < array.length; i++) {
        if(array[i] === array[i + 1]){
            sum += 0;
        }
        if(array[i] < array[i + 1]){
            resOfTwo = ( array[i + 1] - array[i] );
            sum += resOfTwo;
        }
        if(array[i] > array[i + 1]){
            resOfTwo = ( array[i] - array[i + 1] );
            sum += resOfTwo;
        }
    }
    console.log(sum);
    return sum;
}

let a = elevatorDistance([5,2,8]);
let b = elevatorDistance([1,2,3]);
let c = elevatorDistance([7,1,7,1]);
