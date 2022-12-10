console.log("testing routes for array ext exercises");


//(1)
var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
function allIndexOf(arr, element){
    let indexArr = [];          //declaring an empty array to store the indexes we match
    for(let i = 0; i < arr.length; i++){ 
        if(element == arr[i]){  //if the element(string) matches the elements of array
            indexArr.push(i);   //it pushes the indexes of that element into array
        }
    }
    return indexArr;
}   
//console.log(allIndexOf(fruits, "banana"));// should return the array [0, 3]
//console.log(allIndexOf(fruits, "apple"));

//(2)
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
function removeAll(array, value){
    for(let i = 0; i < array.length; i++){
        if(value === array[i]){   //when the value entered matches the value in the array
            delete array[i]; //delete that matched value
        }
    }
    return array;
}
//removeAll(bugs, "ant");
//console.log(bugs.filter(removeAll));//filter bring clears the empty spots of the deleted elements

//(3)
let longest;
let len = 0;
function getLongestString(arr){
    for(let i = 0; i < arr.length; i++){  // looping thro the array
        if(arr[i].length > len){            //if an element of the array is larger than 0,
            len = arr[i].length;         //then thats the longest element in the array each time
            longest = arr[i]; //at the end that store the longest
        }
    }
    return longest;
}
//console.log(getLongestString(bugs));

//(4)
let shortest;
let lgt = 100;
function getShortestString(arr){
    for(let i = 0; i < arr.length; i++){
        if( arr[i].length < lgt){ //first loop if an element of the array is shorter then 100 and the next loops compares to the stored value
         lgt = arr[i].length;   //setting the stores value to lgt variable
            shortest = arr[i];  //at the end the unmatched value is the shortest
        }
    }
    return shortest;
}
//console.log(getShortestString(bugs));

//(5)
//console.log("hello")
function addTwoArrays(arr1, arr2){
    if(typeof arr1 == 'object' || typeof arr2 =='object'){
        //console.log("hello");
        arr1 = arr1.join("");   // joins the first array
        arr2 = arr2.join("");   //joins the second array
        let sum = arr1 + arr2; //concatenate the string made from joining two arrays
        return sum.split(""); //because it still a string it just splits them and change them to array again
    }
}
let a = ['b', 'e', 'a'];
let b = ['u', 't', 'i' , 'f', 'u', 'l'];
//console.log(addTwoArrays(a, b));

//(6)
let getUniqueValues = (arr) => { //Arrow functions value should be stored in a variable
    if(typeof arr === 'object'){
      let unique = arr.filter((element, index) => arr.indexOf(element) === index);
        //First filtering thro, compares index(element) to element of array and return only uniques
      return unique;
    }
}
let array = ['A', 'B', 'A', 'C', 'B'];
//console.log(getUniqueValues(array));

//(6)
var quotes = [
    "Stay Hungry. Stay Foolish. Steve Jobs",
    "Good Artists Copy, Great Artists Steal. Pablo Picasso",
    "Argue with idiots, and you become an idiot. Paul Graham",
    "Be yourself; everyone else is already taken. Oscar Wilde",
    "Simplicity is the ultimate sophistication. Leonardo Da Vinci"];

    let getRandomQuotes = (arr) => {
        let random = Math.floor(Math.random() * ((quotes.length) - 0)) + 1;//creating random number
        //console.log(random);
        return arr[random - 1]; //returning the random indexes of array made by random function
    }
   //console.log(getRandomQuotes(quotes)); 

//(7)
function getIndexesOf(val, string){
    let indexArray = [];
    for(let i = 0; i < string.length; i++){
        if(val === string[i]){
            indexArray.push(i);
        }
    }
return indexArray;
}
//console.log(getIndexesOf("o", "coolbox"));

//(8)
function removeAll(val, input){
    let resultArr = [];
    for(let i = 0; i < input.length; i++){
        if(val === input[i]){  
            delete input[i];   
        }
        resultArr.push(input[i]);
    }
    return resultArr.join("").split("");
}
// console.log(removeAll(1, [1,3,1,4,3,2,1]));
// console.log(removeAll("a", ["b","a","n","a","a"]));

//(9) a function that returns the first 10 fibonacci number
function firstTenFibonacciNumbers(){
    let n1 = 0;
    let n2 = 1;
    let nextTerm;
    for(let i = 0; i <= 10; i++){
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}
//firstTenFibonacciNumbers();

//(10)
function firstTenFibonacciInput(input){
    let n1 = 0;
    let n2 = 1;
    let nextTerm;
    for(let i = 0; i <= input; i++){
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}
//firstTenFibonacciInput(100);

//(11)
function moveFirstToLast(arr){
    let first = arr.shift();
    arr.push(first);
    return arr;
}
//console.log(moveFirstToLast([1,2,3,4]));

//(12)
function zip(arr1, arr2){
    
    
    for(let i = 0; i <= arr1.length + arr2.length; i++){
        combo = new Array();
        let arr1Val = arr1.shift();
        let arr2Val = arr2.shift();
        combo.push(arr1Val, arr2Val); 
        console.log(combo);   
    } 
}
zip([1, 2, 3], [4, 5, 6]);
zip(["a", "b", "c"], ["x", "y", "z"]) 

