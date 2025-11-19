function sum(a, b) {
    return a + b;
}

function multiply(a, b){
    return a * b;
}

function division(a, b){
    return a/b;
}

// Oefening: multiply, division.

// Oefening: maak een functie showCalculation die 3 paramterers heeft. 2 getallen, en een van onze functies.

function showCalculation(num1, num2, func) {
   console.log(func(num1, num2))
}

console.log(showCalculation(1, 1, sum)) // 2

console.log(showCalculation(1, 1, multiply)) // 1

console.log(showCalculation(10, 2, division)) // 5


const name = 'yaron';


function selectRandomStudent(arr){
    return arr[arr.length * Math.random() | 0];
}


const age = 21;
const students = ['Yme', 'Arne', 'Mert'];



console.log(sum(age, 12));

console.log(20);

console.log(selectRandomStudent(students));

function showMessage() {
    console.log('Answer Checker Message');
}

function checkAnswer(answer, solution, callback) {
    if (answer == solution) {
        callback()
        return true;
    }else {
        callback()
        return false;
    }
}

checkAnswer('ja', 'ja', showMessage);