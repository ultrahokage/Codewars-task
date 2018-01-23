// var fruit = ['арбузы', 'бананы', 'Вишня'];
// fruit.sort();
// console.log(fruit);

function sortByLength (array) {
    return array.sort(function(a, b){
        return a.length > b.length;
    });
}
let n = sortByLength(["asdsad", "FAFA", "ask", "oppdkaosdfkapof", "a", "213", "22"]);
console.log(n);