function greetings(){
    return 'Hallo daar!';
}

function greetings2(name){
    return 'Hallo ' + name;
}

function greetings3(name){
    if (name == undefined){
        return 'Hallo daar!'
    } 

    return 'Hallo ' + name;
}

console.log(greetings3('Lotte'));
console.log(greetings3());

console.log(greetings2('yaron'));

console.log(greetings());

function controlAge(age){
    if (age >= 18){
        return 'Je bent volwassen.';
    }
    
    return 'Je bent nog niet volwassen.';
}

console.log(controlAge(20));
console.log(controlAge(18));
console.log(controlAge(16));

function increaseByTen(number){
    return myNumber = number*10;
}

let myNumber = 20;
increaseByTen(myNumber);
console.log("Number:", myNumber);