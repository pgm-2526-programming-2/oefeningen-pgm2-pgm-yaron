//oefening 1

let auto = {
    merk: "Toyota",
    model: "Camry",
    jaar: 2022,
    kleur: "blauw"
};
console.log(auto)

auto.kleur = "rood";
console.log(auto);

console.log(auto.merk);

auto.brandstof = "bezine";
console.log(auto);

delete auto.jaar;
console.log(auto);

//oefening 2

let persoon = {
    naam: "Anna",
    leeftijd: 25,
    adres: {
        straat: "hoofdstraat",
        nummer: 123,
        stad: "stadsville"
    }
};
console.log(persoon);

console.log(persoon.adres.nummer);

persoon.telefoon = "+324123456789";
console.log(persoon)

let extraInfo = {
    hobby: "slapen",
    favorieteKleur: "rood",
    favorieteEten: "pasta"
}

persoon = {...persoon, ...extraInfo}
console.log(persoon);

//oefening 3

function zijnObjectenIdentiek(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }

    return true;
}


const objectA = { a: 1, b: 2, c: 3 };
const objectB = { a: 1, b: 2, c: 3 };

console.log(zijnObjectenIdentiek(objectA, objectB));