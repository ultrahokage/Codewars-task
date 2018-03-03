function pigIt(str){
    let arr = [];
    let add2 = "ay";
    let addStr = "";
    let next;
    let current = 0;

    for(let i = 1; i <= str.length; i++){
        next = 1;
        let firstLetter = str.slice(current, next += current);

        if(i === str.length){
        // console.log(firstLetter);
        //     console.log(current);
        //     console.log(next);
        //     console.log(addStr);
            addStr += firstLetter + add2;
            arr.push(addStr);
        }
        if(str[i] === ' '){
            addStr += firstLetter + add2;
            arr.push(addStr);
            current = i + 1;   // make count for slice letter after space
            addStr = "";
            i++;  // for first letter when string end
        }

        else {
                addStr += str[i];

        }

    }
    return arr.join(' ');
}

let k = pigIt("string sdad");
console.log(k);