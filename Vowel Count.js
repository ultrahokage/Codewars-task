function getCount(str) {
    let vowelsCount = 0;

        for(let i = 0; i < str.length; i++){
            if(str[i] === ('a')) vowelsCount += 1;

            if(str[i] === 'e') vowelsCount += 1;

            if(str[i] === 'i' ) vowelsCount += 1;

            if(str[i] === 'o') vowelsCount += 1;

            if(str[i] === 'u') vowelsCount += 1;
        }


    return vowelsCount;
}
let k = getCount("o a kak ushakov lil vo kashu kakao");
console.log(k);