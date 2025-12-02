//oefening 1

const daysoftheweek = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag'];

console.log(daysoftheweek);

//oefening 2

let fruits = ['Apples', 'Pear', 'Orange'];

let shoppingCart = fruits;
shoppingCart.push('Banana');

console.log(fruits);

//oefening 3

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
];

function getal(a, b) {
    return matrix[a][b];
}

console.log(getal(0, 2));

//oefening 4

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

//oefening 5

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

let str = woorden.join('-');
console.log(str);

const woordMetB = woorden.find(woord => woord.toLowerCase().startsWith('b'));
console.log(woordMetB);

woorden.unshift('Hello');
console.log(woorden);

const twolong = woorden.every(w => w.length > 2);
console.log(twolong);

const sorting = [...woorden].sort();
console.log(sorting);

const derdeelement = woorden[2];
console.log(derdeelement);

const langerDanVier = woorden.filter(w => w.length > 4);
console.log(langerDanVier);

//oefening 6

const willekeurigeGetallen = Array.from(
  { length: 10 },
  () => Math.floor(Math.random() * 100) + 1
);
console.log(willekeurigeGetallen);

const groterDanTien = willekeurigeGetallen.filter(nummer => nummer > 10);
console.log(groterDanTien);

willekeurigeGetallen.pop();
console.log(willekeurigeGetallen);

willekeurigeGetallen.shift();
console.log(willekeurigeGetallen);

willekeurigeGetallen.push(5);
console.log(willekeurigeGetallen);

const KleinerDanTwintig = willekeurigeGetallen.every(nummer => nummer < 20);
console.log(KleinerDanTwintig);

const stringSpatie = willekeurigeGetallen.join(" ");
console.log(stringSpatie);

const som = willekeurigeGetallen.reduce((totaal, nummer) => totaal + nummer, 0);
console.log(som);

const verdubbel = willekeurigeGetallen.map(n => n * 2);
console.log(verdubbel);

const groterDanDertig = willekeurigeGetallen.some(n => n > 30);
console.log(groterDanDertig);

//oefening 7

const willekeurigeNamenArray = [
  ['Alice', 'Bob', 'Charlie'],
  ['David', 'Eva', 'Frank'],
  ['Grace', 'Hank', 'Ivy'],
  ['Jack', 'Kelly', 'Liam']
];
console.log(willekeurigeNamenArray);

const flatArray = willekeurigeNamenArray.flat();
console.log(flatArray);

const verdubbelen = willekeurigeNamenArray
.flat()
.map(naam => naam.length * 2);
console.log(verdubbelen);

const verwijderEerst = willekeurigeNamenArray.map(sub => sub.slice(1));
console.log(verwijderEerst);

willekeurigeNamenArray.pop();
console.log(willekeurigeNamenArray);

//oefening 8

function telArraysOp(array1, array2) {
    const lengte = Math.min(array1.length, array2.length);
    const resultaat = [];
    for (let i = 0; i < lengte; i++){
        resultaat.push(array1[i] + array2[i]);
    }
    return resultaat;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const result = telArraysOp(array1, array2);
console.log(result);

//oefening 9

let woordenArray = ['appel', 'peer', 'kiwi', 'banaan'];
let langstewoord = woordenArray.reduce((langste, woord) => {
    return woord.length > langste.length ? woord : langste;
}, "");

console.log(langstewoord)

//oefening 10

function filterEvenGetallen(getallen){
    return getallen.filter(nummer => nummer % 2 === 0)
}
let getallenArray = [3, 8, 15, 6, 10, 7];
let evenGetallen = filterEvenGetallen(getallenArray);
console.log(evenGetallen);
