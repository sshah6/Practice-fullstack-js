console.log("Checking if the the paths work.");

//Finding the years of the below date of birth
function calculate_age(dob){
    let diff = Date.now() - dob.getTime();
    let ageDate = new Date(diff);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
// console.log(calculate_age(new Date(1992,02,28)));

//Checking the functions used above
var seconds = Date.now()/1000; // this shows the todays date in milli second
var minutes = seconds / 60;
var hours = minutes / 60;
var days = hours / 24;
var months = days / 30;
var years = months / 12;

// console.log(years);
//console.log((1970 + years) - 1993); //the date shows todays date - jan, 1, 1970

//The above functions in a shorter way
const birthday = new Date().getFullYear() - Object("28-02-1992").split("-")[2];
// console.log(birthday);

//If two numbers are divisible on each other print 1 otherwise 0
function areDivisible (num1, num2){
    if(num1 % num2 === 0 || num2 % num1 === 0)
        console.log("1");
    else
        console.log(0);
}
// areDivisible(4, 12);
// areDivisible(3, 10);

//Given two integers and return an array of odd numbers between them
function printOdds(num1, num2){
    if(num1 >= num2)
    return null;
    let array  = [];
        for(var i = num1; i < num2; i++){
            if(i % 2 != 0){
                array.push(i);
            }    
        }
    return array;
}
// console.log(printOdds(4, 20));
// console.log(printOdds(25, 21));
//###################### 11 functions must known by programmers###########

//Map function
var weeklyReadings = [20, 22, 20.5, 19, 21, 21.5, 23];
//reading is arrow function
const mapedWeeklyReadings = weeklyReadings.map(reading => reading + 1.5);
//console.log(mapedWeeklyReadings);

//in simple function
const mapedReadingsSimple = weeklyReadings.map(function reading(temps){
    return temps + 1.5;
});
console.log(mapedReadingsSimple);

//Filter Functions
const colderDays = weeklyReadings.filter(dayTemprature => {
    return dayTemprature <= 20;
});
// console.log(colderDays);
// console.log("The colder days were: " + colderDays.length);

//in simple functions

const colderDaysSimple = weeklyReadings.filter(function dayTemp(temp){
    return temp <= 20;
});
console.log(colderDaysSimple);
console.log('The colder days reads: ' + colderDaysSimple.length);

//Reduce functions
const numbers = [1, 2, 3, 4, 5, 6];
const factorial = numbers.reduce((acc, item) => acc * item, 1);
console.log(factorial);

//in simple function type
const factorialSimple = numbers.reduce(function factor(acc, item){
    return acc * item;
});
console.log(factorialSimple);

//How to find certain object out of a list of objects
const persons = [
    {
        name: 'Person 1',
        age: 32
    },
    {
        name: 'Person 2',
        age: 40
    },
];
let over_35 = false;
for(var i = 0; i < persons.length; i++){
    if(persons[i].age > 35){
        over_35 = true;
        break;
    }
}
if(over_35){console.log("There is over 35.");}

//The above function using some function
if(persons.some(person => {
    return person.age > 35;
})){
    console.log("Found over 35.");
}

//Every Function
const entries = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3  
    },
];
if(entries.every(entry => {
    return Number.isInteger(entry.id) &&  entry.id > 0;
})){
    console.log("All entries are valid id.");
}