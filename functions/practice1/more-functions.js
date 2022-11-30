console.log("checking routs");
//(1)
function returnTwo(){
    return 2;
}
//console.log(returnTwo());

//(2)
function returnName(){
    return "Said";
}
//console.log(returnName());

//(3)
function addThree(number){
    return number + 3;
}
//console.log(addThree(5));

//(4)
function sayString(str){
    return str;
}
//console.log(sayString("Said"));

//(5)
function sayHowdy(){
    console.log("Howdy");
}
//sayHowdy();

//(6) function with conditions inside
function abrevToday(first){
    // if(first.toLowerCase() == "mon"){
    //     return "Monday";
    // }else if(second.toLowerCase() == "tue"){
    //     return "Tuesday";
    // }else if(third.toLowerCase() == "wed"){
    //     return "Wednesday";
    // }
    switch(first){
        case "mon":
            return "Monday";
            break;
        case "tue":
            return "Tuesday";
            break;
        case "wed":
            return "Wednesday";
            break;
        default:        
    }
}
console.log(abrevToday("mon"));
console.log(abrevToday("tue"));
console.log(abrevToday("wed"));

//######## mini function problems ########
//(1)
function returnFive(){
    return 5;
}
//console.log(returnFive());

//(2)
function isFive(input){
    if(input === 5 || input === "5")
        return true;
    else
        return false;
}
// console.log(isFive(5));
// console.log(isFive("5"));
// console.log(isFive(6));

//(3)
function isShortWord(str){
    if(str.length < 5)
        return true;
    else
        return false;
}
// console.log(isShortWord("Hi"));
// console.log(isShortWord("Hello"));
// console.log(isShortWord("codeup"));

//(4)
function isSameLength(str1, str2){
    if(str1.length === str2.length)
        return true;
    else
        return false;
}
// console.log(isSameLength("hi", "ye"));
// console.log(isSameLength("hi", "bye"));

//(5)
function getSmallerSegment(str, num){
    return str.substring(0, num);
}
//console.log(getSmallerSegment("Codeup", 3));