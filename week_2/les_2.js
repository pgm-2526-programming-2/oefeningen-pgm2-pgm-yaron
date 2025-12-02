let fruits = ['Apples', 'Pear', 'Orange'];

let shoppingCart = fruits;
shoppingCart.push('Banana');

console.log(fruits);

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
];

function getal(a, b) {
    return matrix[a][b];
}

console.log(getal(0, 2));

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(currentnumber){
    console.log(currentnumber)
});

let hello = "Hello";
hello.split('').forEach((char) => {
    console.log(char);
});

let colors = ['red', 'blue', 'green', 'yellow'];

colors.forEach(function(currencolor, index){
    console.log(currencolor, index)
});

let woorden = [
  'mal',
  'snurkduif',
  'bromvlieg',
  'snottebel',
  'knotsgek',
  'pindakaas',
  'fluitketel',
  'smurfenmuts',
];

let str = woorden.join('- ');

console.log(str);

const woordMetB = woorden.find(woord => woord.toLowerCase().startsWith('b'));

console.log(woordMetB);

woorden.unshift('Hello');
console.log(woorden);