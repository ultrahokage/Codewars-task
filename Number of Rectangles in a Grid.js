function numberOfRectangles(m, n ,rectCount = 0) {

    rectCount = n*m*(1+n)*(1+m)/4;


//     sumN = n(1+n)/2
//     sumM = m(1+m)/2
//    2 * 3 * (1 + 2) * (1 + 3)/4 = 18
    return rectCount;
}

let k = numberOfRectangles(3, 2);
console.log(k);