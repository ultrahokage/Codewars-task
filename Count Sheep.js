function lostSheep(friday,saturday,total) {
    let firstNum = 0;
    let secondNum = 0;
    let thirdNum = total;


    for (let i = 0; i < friday.length; i++) {
        firstNum += friday[i];
    }

    for(let i = 0; i < saturday.length; i++){
        secondNum += saturday[i];
    }
    return thirdNum - (firstNum + secondNum);
}

let n = lostSheep([2,2], [2,3,4], 123);
console.log(n);