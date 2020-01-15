//question 1
var startOfCourse = "first";

//question 2
var person = {
    name: "Hans Nilsen",
    age: 25
};

//question 3
var outOfStock = false;

if(outOfStock === true) {
    console.log("Out of stock");
}

else {
    console.log("In stock");
}

//question 4
var number = [5, 10, 15, 30, 35];
for(var index = 0; index < number.length; index++){
    console.log(number[index]);
}

//question 5
for  (var numberCounter = 15 ; numberCounter <= 25; numberCounter ++) {
    console.log(numberCounter);
}

//question 6
for  (numberCounter2 = 15 ; numberCounter2 <= 20; numberCounter2 ++) 
if(numberCounter2 === 20){
    console.log(numberCounter2);
}

//question 7
var barn = [
    {
        animal: "donkey",
        amount: 12,
        arived: true
    },
    {
        animal: "goose",
        amount: 7,
        arived: false
    }
];

for(var barnInformation = 0; barnInformation <barn.length; barnInformation++){
    console.log(barn[barnInformation].amount)
    console.log(barn[barnInformation].arived)
}

//question 8
function whatIDontLike(nopeToThis) {
    console.log("I don't like " + nopeToThis);
}

whatIDontLike("Coconunt");

//question 9
function subtracNumbers(numerOne, numberTwo){
    console.log(numerOne - numberTwo);
}

subtracNumbers(10, 2);

//question 10
var barnAnimals = []
function myBarnAnimals(animals) {
    barnAnimals.push(animals);
}
myBarnAnimals("Hen's");
console.log(barnAnimals);
