function isValidWalk(walk) {

    let n = 0;
    let s = 0;
    let e = 0;
    let w = 0;
    let count = 0;

    for(let i = 0; i < walk.length; i++){
        count += 1;
        console.log(count);
    }
    if(count === 10){
        for(let i = 0; i < walk.length; i++){

            if(walk[i] === 'n'){
                n += 1;
            }
            if(walk[i] === 's'){
                s += 1;
            }
            if(walk[i] === 'e'){
                e += 1;
            }
            if(walk[i] === 'w'){
                w += 1;
            }
        }
        if(!(n === s && e === w) || !(n === s) || !(e === w) ){
            return false;
        }
        return true;
    }
    return false;
}

let k = isValidWalk(['n','s','n','s','n','s','n','s','n','s']);
console.log(k);