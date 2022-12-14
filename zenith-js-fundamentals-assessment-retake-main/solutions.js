// Your solutions will go here :)
function lowerCase(input){
    if(typeof input !== 'string'){
        return false;
    }else{
        return input.toLowerCase();
    }
}

function isAllLowerCase(input){
    if(typeof input === 'string'){
        if(input.toLowerCase() === input){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

function isAllUpperCase(input){
    if(typeof input === 'string'){
        return input.toUpperCase() === input;  
    }else
    return false;
}

function isNotPalindrome(input){ 
    if(typeof input === 'string')  {
        if(input.toLowerCase().split("").reverse().join("") === input.toLowerCase()){
         return false; 
    }else{
        return true;
    }
    }else{
        return true;
    }  
}

function isNumeric(input){
   return !isNaN(input) && typeof input !== "boolean" && input !== null;
}

function multiplyBy2(input){
    if(!isNaN(input) && typeof input !== "boolean" && input !== null){
        return input * 2;
    }else{
        return false;
    }
}

function convertHourToSec(input){
    let min = 0;
    let sec = 0
    if(isNumeric(input) && input >= 0){
        min = input * 60;
        sec = min  * 60;
        return sec;
    }else{
        return false;
    }
}

function getLowestNumber(a, b, c){
    if(isNumeric(a) && isNumeric(b) && isNumeric(c)){
        if(a < b && a < c){
            return a;
        }else if(b < a && b < c){
            return b;
        }else{
            return c;
        }
    }else{
        return false;
    }
}

function addStringLengths(input1, input2){
    if(typeof input1 === 'string' && typeof input2 === 'string'){
        return input1.length + input2.length;
    }else{
        return false;
    }
}

function subtract(a, b){
    if(isNumeric(a) && isNumeric(b)){
        return a - b;
    }else{
        return false;
    }
}

function calculateChange(cost, paid){
    let result = 0;
    if(isNumeric(cost) && isNumeric(paid)){
        result = cost - paid;
        result = result.toFixed(2);
        return "$" + result;
    }else{
        return false;
    }
}