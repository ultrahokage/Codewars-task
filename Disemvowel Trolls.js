// function disemvowel(str){
//     return str.replace(/[eio]/, '')
// }

function disemvowel(str , i = 0){
    let arr = String(str);


    for(i; i < arr.length; i++){
        arr.split('');

        if(arr[i] === 'a'){
            return disemvowel(arr.replace('a', ''), i + 1);
        }
        if(arr[i] === 'r'){
            return disemvowel(arr.replace('a', ''), i + 1);
        }
        if(arr[i] === 'A'){
            return disemvowel(arr.replace('A', ''), i + 1);
        }
        if(arr[i] === 'i'){
            return disemvowel(arr.replace('i', ''), i + 1);
        }
        if(arr[i] === 'I'){
            return disemvowel(arr.replace('I', ''), i + 1);
        }
        if(arr[i] === 'e'){
            return disemvowel(arr.replace('e', ''), i + 1);
        }if(arr[i] === 'E'){
            return disemvowel(arr.replace('E', ''), i + 1);
        }
        if(arr[i] === 'o'){
            return disemvowel(arr.replace('o', ''), i + 1);
        }
        if(arr[i] === 'O'){
            return disemvowel(arr.replace('O', ''), i + 1);
        }
        if(arr[i] === 'u'){
            return disemvowel(arr.replace('u', ''), i + 1);
        }
        if(arr[i] === 'U'){
            return disemvowel(arr.replace('U', ''), i + 1);
        }
        if(arr[i] === '\n'){
            return disemvowel(arr.replace('u', ''), i + 1);
        }
        if(arr[i] === '?'){
            return disemvowel(arr.replace('u', ''), i + 1);
        }
    }
    return arr;
}

let n = disemvowel('Wht r y, \muYu cmmunst?');
    // "Ths wbst s fr lsrs LL!")
console.log(n);