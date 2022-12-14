function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const randomNamesArray = ["Harry", "Ross", "Bruce", "Cook", "Carolyn", "Morgan", "Albert", "Walker", "Randy", "Reed", "Larry", "Barnes", "Lois", "Wilson", "Jesse", "Campbell", "Ernest", "Rogers", "Theresa", "Patterson", "Henry", "Simmons", "Michelle", "Perry", "Frank", "Butler", "Shirley"]
let randomName = randomNamesArray[Math.floor(Math.random() * randomNamesArray.length)];
const exampleObject = {"firstName": "Grace", "lastName": "Hopper"};
const exampleArray = ['Grace Hopper', 'Ada Lovelace', 'Margaret Hamilton', 'Sandi Metz'];


function randomPositiveEvenNumber() {
    var randomNumber = getRandomIntInclusive(1, 1000);
    if (randomNumber % 2 !== 0) {
        return randomPositiveEvenNumber()
    }

    return randomNumber;
}

// this function generates a random number that is both positive and odd
function randomPositiveOddNumber() {
    var randomNumber = getRandomIntInclusive(1, 1000);
    if (randomNumber % 2 === 0) {
        return randomPositiveOddNumber();
    }

    return randomNumber;
}

// this function generates a random number that is both negative and even.
function randomNegativeEvenNumber() {
    var randomNumber = getRandomIntInclusive(1, 1000);
    if (randomNumber % 2 === 0) {
        return randomNumber;
    }

    return randomNegativeEvenNumber();
}

// this function generates a random number that is both negative and odd.
function randomNegativeOddNumber() {
    var randomNumber = getRandomIntInclusive(1, 1000);
    if (randomNumber % 2 === 0) {
        return randomNegativeOddNumber();
    }

    return randomNumber;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


// The next 4 lines create variables that hold these generated random numbers

var positiveEvenNumber = randomPositiveEvenNumber()
var positiveOddNumber = randomPositiveOddNumber();
var negativeEvenNumber = randomNegativeEvenNumber();
var negativeOddNumber = randomNegativeOddNumber();
let randomPositiveNumericString = getRandomIntInclusive(1, 1000).toString();
let randomNegativeNumericString = (getRandomIntInclusive(1, 1000) * -1).toString();
let randomNegativeNumber = (getRandomIntInclusive(1, 1000) * -1);
let randomPositiveNumber = getRandomIntInclusive(1, 1000);
let randomPositiveFloatString = getRandomArbitrary(1, 1000).toFixed(2)
let randomNegativeFloatString = getRandomArbitrary(-1, -1000).toFixed(2)
let randomPositiveFloat = Number(getRandomArbitrary(1, 1000).toFixed(2))
let randomNegativeFloat = Number(getRandomArbitrary(-1, -1000).toFixed(2))
const emptyString = "";
const notANumber = NaN;


function randomizeNumbers() {
    randomPositiveNumericString = getRandomIntInclusive(1, 1000).toString();
    randomNegativeNumericString = (getRandomIntInclusive(1, 1000) * -1).toString();
    randomNegativeNumber = (getRandomIntInclusive(1, 1000) * -1);
    randomPositiveNumber = getRandomIntInclusive(1, 1000);
}

const Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let firstUpperCaseLetter = Alphabet[Math.floor(Math.random() * Alphabet.length)].toUpperCase();
let secondUpperCaseLetter = Alphabet[Math.floor(Math.random() * Alphabet.length)].toUpperCase();

let firstLowerCaseLetter = Alphabet[Math.floor(Math.random() * Alphabet.length)];
let secondLowerCaseLetter = Alphabet[Math.floor(Math.random() * Alphabet.length)];

function randomizeName() {
    randomName = randomNamesArray[Math.floor(Math.random() * randomNamesArray.length)];
}

function randomizeAll() {
    randomizeNumbers();
    randomizeName()
}

describe('lowerCase', function () {

    describe("Core Functionality", function () {

        it('should be a declared function', function () {
            expect(lowerCase).toBeDefined();
        });
        it(`should return "${randomName.toLowerCase()}" when passed the string "${randomName}"`, function () {
            expect(lowerCase(randomName)).toBe(randomName.toLowerCase());
        });
        it(`should return "${randomName.toLowerCase()}" when passed the string "${randomName.toUpperCase()}"`, function () {
            expect(lowerCase(randomName.toUpperCase())).toBe(randomName.toLowerCase());
        });
        it(`should return "${randomName.toLowerCase()}" when passed the string "${randomName.toLowerCase()}"`, function () {
            expect(lowerCase(randomName.toLowerCase())).toBe(randomName.toLowerCase());
        });
        it(`should return "${firstUpperCaseLetter.toLowerCase()}" when passed the string "${firstUpperCaseLetter}"`, function () {
            expect(lowerCase(firstUpperCaseLetter)).toBe(firstUpperCaseLetter.toLowerCase());
        });
        it(`should return "${firstLowerCaseLetter}" when passed the string "${firstLowerCaseLetter}"`, function () {
            expect(lowerCase(firstLowerCaseLetter)).toBe(firstLowerCaseLetter);
        });

    });

    describe("Validation", function () {

        it(`should return false when called without passing an argument`, function () {
            expect(lowerCase()).toBeFalse()
        });
        it(`should return false when passed argument undefined`, function () {
            expect(lowerCase(undefined)).toBeFalse()
        });
        it(`should return false when passed argument null`, function () {
            expect(lowerCase(null)).toBeFalse()
        });
        it(`should return false when passed the number ${randomPositiveNumber}`, function () {
            expect(lowerCase(randomPositiveNumber)).toBeFalse()
        });
        it(`should return false when passed the number ${randomNegativeNumber}`, function () {
            expect(lowerCase(randomNegativeNumber)).toBeFalse()
        });
        it(`should return false when passed the boolean true`, function () {
            expect(lowerCase(true)).toBeFalse()
        });
        it(`should return false when passed the boolean false`, function () {
            expect(lowerCase(false)).toBeFalse()
        });
        it(`should return false when passed an object`, function () {
            expect(lowerCase(exampleObject)).toBeFalse()
        });
        it(`should return false when passed an array`, function () {
            expect(lowerCase(exampleArray)).toBeFalse()
        });

    });

});


describe('isAllLowerCase', function () {

    describe("Core Functionality", function () {

        it('should be a declared function', function () {
            expect(isAllLowerCase).toBeDefined();
        });
        it(`should return false when passed the string "${randomName}"`, function () {
            expect(isAllLowerCase(randomName)).toBeFalse();
        });
        it(`should return true when passed the string "${randomName.toLowerCase()}"`, function () {
            expect(isAllLowerCase(randomName.toLowerCase())).toBeTrue();
        });
        it(`should return false when passed the string "${randomName.toUpperCase()}"`, function () {
            expect(isAllLowerCase(randomName.toUpperCase())).toBeFalse();
        });
        it(`should return false when passed the string "${firstUpperCaseLetter}"`, function () {
            expect(isAllLowerCase(firstUpperCaseLetter)).toBeFalse();
        });
        it(`should return true when passed the string "${firstLowerCaseLetter}"`, function () {
            expect(isAllLowerCase(firstLowerCaseLetter)).toBeTrue()
        });

    });

    describe("Validation", function () {

        it(`should return false when called without passing an argument`, function () {
            expect(isAllLowerCase()).toBeFalse()
        });
        it(`should return false when passed argument undefined`, function () {
            expect(isAllLowerCase(undefined)).toBeFalse()
        });
        it(`should return false when passed argument null`, function () {
            expect(isAllLowerCase(null)).toBeFalse()
        });
        it(`should return false when passed the number ${randomPositiveNumber}`, function () {
            expect(isAllLowerCase(randomPositiveNumber)).toBeFalse()
        });
        it(`should return false when passed the number ${randomNegativeNumber}`, function () {
            expect(isAllLowerCase(randomNegativeNumber)).toBeFalse();
        });
        it(`should return false when passed the boolean true`, function () {
            expect(isAllLowerCase(true)).toBeFalse();
        });
        it(`should return false when passed the boolean false`, function () {
            expect(isAllLowerCase(false)).toBeFalse();
        });
        it(`should return false when passed an object`, function () {
            expect(isAllLowerCase(exampleObject)).toBeFalse();
        });
        it(`should return false when passed an array`, function () {
            expect(isAllLowerCase(exampleArray)).toBeFalse();
        });

    });

});

describe('isAllUpperCase', function () {

    describe("Core Functionality", function () {

        it('should be a declared function', function () {
            expect(isAllUpperCase).toBeDefined();
        });
        it(`should return false when passed the string "${randomName}"`, function () {
            expect(isAllUpperCase(randomName)).toBeFalse();
        });
        it(`should true when passed the string "${randomName.toUpperCase()}"`, function () {
            expect(isAllUpperCase(randomName.toUpperCase())).toBeTrue();
        });
        it(`should return false when passed the string "${randomName.toLowerCase()}"`, function () {
            expect(isAllUpperCase(randomName.toLowerCase())).toBeFalse();
        });
        it(`should return true when passed the string "${firstUpperCaseLetter}"`, function () {
            expect(isAllUpperCase(firstUpperCaseLetter)).toBeTrue();
        });
        it(`should return false when passed the string "${firstLowerCaseLetter}"`, function () {
            expect(isAllUpperCase(firstLowerCaseLetter)).toBeFalse();
        });

    });

    describe("Validation", function () {

        it(`should return false when called without passing an argument`, function () {
            expect(isAllUpperCase()).toBeFalse()
        });
        it(`should return false when passed argument undefined`, function () {
            expect(isAllUpperCase(undefined)).toBeFalse()
        });
        it(`should return false when passed argument null`, function () {
            expect(isAllUpperCase(null)).toBeFalse()
        });
        it(`should return false when passed the number ${randomPositiveNumber}`, function () {
            expect(isAllUpperCase(randomPositiveNumber)).toBeFalse()
        });
        it(`should return false when passed the number ${randomNegativeNumber}`, function () {
            expect(isAllUpperCase(randomNegativeNumber)).toBeFalse()
        });
        it(`should return false when passed the boolean true`, function () {
            expect(isAllUpperCase(true)).toBeFalse()
        });
        it(`should return false when passed the boolean false`, function () {
            expect(isAllUpperCase(false)).toBeFalse()
        });
        it(`should return false when passed an object`, function () {
            expect(isAllUpperCase(exampleObject)).toBeFalse()
        });
        it(`should return false when passed an array`, function () {
            expect(isAllUpperCase(exampleArray)).toBeFalse()
        });

    });

});

describe('isNotPalindrome', function () {

    const palindromeStrings = ["Anna","Civic","Kayak","Level","Madam","Repaper","Rotator","Racecar","Tenet"]
    const firstPalindromeWord = palindromeStrings[Math.floor(Math.random() * palindromeStrings.length)];
    const secondPalindromeWord = palindromeStrings[Math.floor(Math.random() * palindromeStrings.length)];
    const thirdPalindromeWord = palindromeStrings[Math.floor(Math.random() * palindromeStrings.length)];

    describe("Core Functionality", function () {

        it('should be a declared function', function () {
            expect(isNotPalindrome).toBeDefined();
        });
        it(`should return false when passed the string "${firstPalindromeWord}"`, function () {
            expect(isNotPalindrome(firstPalindromeWord)).toBeFalse();
        });
        it(`should true when passed the string "${randomName}"`, function () {
            expect(isNotPalindrome(randomName)).toBeTrue();
        });
        it(`should return false when passed the string "${secondPalindromeWord.toLowerCase()}"`, function () {
            expect(isNotPalindrome(secondPalindromeWord.toLowerCase())).toBeFalse();
        });
        it(`should return true when passed the string "${randomName.toLowerCase()}"`, function () {
            expect(isNotPalindrome(randomName.toLowerCase())).toBeTrue();
        });
        it(`should return false when passed the string "${thirdPalindromeWord.toUpperCase()}"`, function () {
            expect(isNotPalindrome(thirdPalindromeWord.toUpperCase())).toBeFalse();
        });
        it(`should return false when passed an empty string`, function () {
            expect(isNotPalindrome("")).toBeFalse();
        });

    });

    describe("Validation", function () {

        it(`should return true when called without passing an argument`, function () {
            expect(isNotPalindrome()).toBeTrue()
        });
        it(`should return true when passed argument undefined`, function () {
            expect(isNotPalindrome(undefined)).toBeTrue()
        });
        it(`should return true when passed argument null`, function () {
            expect(isNotPalindrome(null)).toBeTrue()
        });
        it(`should return true when passed the number ${randomPositiveNumber}`, function () {
            expect(isNotPalindrome(randomPositiveNumber)).toBeTrue()
        });
        it(`should return true when passed the number ${randomNegativeNumber}`, function () {
            expect(isNotPalindrome(randomNegativeNumber)).toBeTrue()
        });
        it(`should return true when passed the boolean true`, function () {
            expect(isNotPalindrome(true)).toBeTrue()
        });
        it(`should return true when passed the boolean false`, function () {
            expect(isNotPalindrome(false)).toBeTrue()
        });
        it(`should return true when passed an object`, function () {
            expect(isNotPalindrome(exampleObject)).toBeTrue()
        });
        it(`should return true when passed an array`, function () {
            expect(isNotPalindrome(exampleArray)).toBeTrue()
        });

    });

});

describe('multiplyBy2', function () {

    describe("Core Functionality", function () {

        const firstInt = getRandomIntInclusive(30, 40)
        const secondInt = getRandomIntInclusive(1, 20)

        const thirdInt = getRandomIntInclusive(30, 40)
        const forthInt = getRandomIntInclusive(1, 20)

        it('should be a declared function', function () {
            expect(multiplyBy2).toBeDefined();
        });
        it(`should return ${firstInt * 2} when passed the argument ${firstInt}`, function () {
            expect(multiplyBy2(firstInt)).toBe(firstInt * 2);
        });
        it(`should return ${secondInt * 2} when passed the argument "${secondInt}"`, function () {
            expect(multiplyBy2(secondInt.toString())).toBe(secondInt * 2);
        });
        it(`should return ${-thirdInt * 2} when passed the argument ${-thirdInt}`, function () {
            expect(multiplyBy2(-thirdInt)).toBe(-thirdInt * 2);
        });
        it(`should return ${0} when passed the argument ${0}`, function () {
            expect(multiplyBy2(0)).toBe(0);
        });
    });

    describe("Validation", function () {

        it(`should return false when called without passing an argument`, function () {
            expect(multiplyBy2()).toBeFalse()
        });
        it('should return false when a non numeric string is passed as argument', function () {
            expect(multiplyBy2(randomName)).toBeFalse()
        });
        it(`should return false when undefined is passed as argument`, function () {
            expect(multiplyBy2(undefined)).toBeFalse()
        });
        it(`should return false when null is passed as argument`, function () {
            expect(multiplyBy2(null)).toBeFalse()
        });
        it(`should return false when the boolean true is passed as argument`, function () {
            expect(multiplyBy2(true)).toBeFalse()
        });
        it(`should return false when the boolean false is passed as argument`, function () {
            expect(multiplyBy2(false)).toBeFalse()
        });
        it(`should return false when an object is passed as argument`, function () {
            expect(multiplyBy2(exampleObject)).toBeFalse()
        });
        it(`should return false when an array is passed as argument`, function () {
            expect(multiplyBy2(exampleArray)).toBeFalse()
        });

    });

});

describe('convertHourToSec', function () {

    describe("Core Functionality", function () {

        const firstInt = getRandomIntInclusive(30, 40)
        const secondInt = getRandomIntInclusive(1, 5)
        const thirdInt = getRandomIntInclusive(1, 10)


        it('should be a declared function', function () {
            expect(convertHourToSec).toBeDefined();
        });
        it(`should return ${firstInt * 3600} when passed the argument ${firstInt}`, function () {
            expect(convertHourToSec(firstInt)).toBe(firstInt * 3600);
        });
        it(`should return ${secondInt * 3600} when passed the argument "${secondInt}"`, function () {
            expect(convertHourToSec(secondInt.toString())).toBe(secondInt * 3600);
        });
        it(`should return ${thirdInt * 3600} when passed the argument ${thirdInt}`, function () {
            expect(convertHourToSec(thirdInt)).toBe(thirdInt * 3600);
        });
        it(`should return ${0} when passed the argument ${0}`, function () {
            expect(convertHourToSec(0)).toBe(0);
        });
    });

    describe("Validation", function () {

        it(`should return false when called without passing an argument`, function () {
            expect(convertHourToSec()).toBeFalse()
        });
        it('should return false when a negative number is passed as argument', function () {
            expect(convertHourToSec(randomNegativeNumber)).toBeFalse()
        });
        it('should return false when a non numeric string is passed as argument', function () {
            expect(convertHourToSec(randomName)).toBeFalse()
        });
        it(`should return false when undefined is passed as argument`, function () {
            expect(convertHourToSec(undefined)).toBeFalse()
        });
        it(`should return false when null is passed as argument`, function () {
            expect(convertHourToSec(null)).toBeFalse()
        });
        it(`should return false when the boolean true is passed as argument`, function () {
            expect(convertHourToSec(true)).toBeFalse()
        });
        it(`should return false when the boolean false is passed as argument`, function () {
            expect(convertHourToSec(false)).toBeFalse()
        });
        it(`should return false when an object is passed as argument`, function () {
            expect(convertHourToSec(exampleObject)).toBeFalse()
        });
        it(`should return false when an array is passed as argument`, function () {
            expect(convertHourToSec(exampleArray)).toBeFalse()
        });

    });

});


describe('getLowestNumber', function () {

    describe("Core Functionality", function () {

        const firstInt = getRandomIntInclusive(30, 40)
        const secondInt = getRandomIntInclusive(1, 20)
        const thirdInt = getRandomIntInclusive(50, 60)
        const forthInt = getRandomIntInclusive(1, 20)
        const fifthInt = getRandomIntInclusive(30, 40)
        const sixthInt = getRandomIntInclusive(1, 20)

        it('should be a declared function', function () {
            expect(getLowestNumber).toBeDefined();
        });
        it(`should return ${Math.min(firstInt,secondInt,thirdInt)} when passed the arguments (${firstInt},${secondInt},${thirdInt})`, function () {
            expect(getLowestNumber(firstInt,secondInt,thirdInt)).toBe(Math.min(firstInt,secondInt,thirdInt));
        });
        it(`should return ${Math.min(sixthInt,forthInt,-fifthInt)} when passed the arguments ("${sixthInt}",${forthInt},${-fifthInt})`, function () {
            expect(getLowestNumber(sixthInt.toString(),forthInt,-fifthInt)).toBe(Math.min(sixthInt,forthInt,-fifthInt));
        });

    });

    describe("Validation", function () {

        it(`should return false when called without passing an argument`, function () {
            expect(getLowestNumber()).toBeFalse()
        });
        it('should return false when a non numeric string is passed as an argument', function () {
            expect(getLowestNumber(randomPositiveEvenNumber(),randomName,randomPositiveNumber)).toBeFalse()
        });
        it(`should return false when undefined is passed as an argument`, function () {
            expect(getLowestNumber(randomPositiveNumber,undefined,randomPositiveNumber)).toBeFalse()
        });
        it(`should return false when null is passed as an argument`, function () {
            expect(getLowestNumber(null,randomPositiveNumericString,randomPositiveNumber)).toBeFalse()
        });
        it(`should return false when the boolean true is passed as an argument`, function () {
            expect(getLowestNumber(true,randomPositiveNumber,randomPositiveNumber)).toBeFalse()
        });
        it(`should return false when the boolean false is passed as an argument`, function () {
            expect(getLowestNumber(randomPositiveNumber,false,randomPositiveNumber)).toBeFalse()
        });
        it(`should return false when an object is passed as an argument`, function () {
            expect(getLowestNumber(exampleObject,randomPositiveNumber,randomPositiveNumericString)).toBeFalse()
        });
        it(`should return false when an array is passed as an argument`, function () {
            expect(getLowestNumber(randomPositiveNumericString,randomPositiveNumber,exampleArray)).toBeFalse()
        });

    });

});

describe('addStringLengths', function () {

    describe("Core Functionality", function () {

        const firstInt = getRandomIntInclusive(2000, 10000)
        const secondInt = getRandomIntInclusive(1, 21000)

        const randomNameOne = randomNamesArray[Math.floor(Math.random() * randomNamesArray.length)];
        const randomNameTwo = randomNamesArray[Math.floor(Math.random() * randomNamesArray.length)];
        const randomNameThree = randomNamesArray[Math.floor(Math.random() * randomNamesArray.length)];
        const randomNameFour = randomNamesArray[Math.floor(Math.random() * randomNamesArray.length)];


        it('should be a declared function', function () {
            expect(addStringLengths).toBeDefined();
        });
        it(`should return ${randomNameOne.length + randomNameTwo.length} when passed the arguments ("${randomNameOne}","${randomNameTwo}")`, function () {
            expect(addStringLengths(randomNameOne,randomNameTwo)).toBe(randomNameOne.length + randomNameTwo.length);
        });
        it(`should return ${randomNameThree.length} when passed the arguments ("${randomNameThree}","")`, function () {
            expect(addStringLengths(randomNameThree,"")).toBe(randomNameThree.length);
        });
        it(`should return ${"".length + "".length} when passed the arguments ("", "")`, function () {
            expect(addStringLengths("", "")).toBe("".length + "".length);
        });
        it(`should return ${randomNameFour.length + firstInt.toString().length} when passed the arguments ("${randomNameFour}","${firstInt}")`, function () {
            expect(addStringLengths(randomNameOne,randomNameTwo)).toBe(randomNameOne.length + randomNameTwo.length);
        });
        it(`should return ${"code".length + "up".length} when passed the arguments ("code", "up")`, function () {
            expect(addStringLengths("code", "up")).toBe("code".length + "up".length);
        });
    });

    describe("Validation", function () {

        it(`should return false when called without passing an argument`, function () {
            expect(addStringLengths()).toBeFalse()
        });
        it('should return false when a number is passed as an argument', function () {
            expect(addStringLengths(randomName,randomPositiveNumber)).toBeFalse()
        });
        it(`should return false when undefined is passed as an argument`, function () {
            expect(addStringLengths(randomName,undefined)).toBeFalse()
        });
        it(`should return false when null is passed as an argument`, function () {
            expect(addStringLengths(null,randomName)).toBeFalse()
        });
        it(`should return false when the boolean true is passed as an argument`, function () {
            expect(addStringLengths(true,randomName)).toBeFalse()
        });
        it(`should return false when the boolean false is passed as an argument`, function () {
            expect(addStringLengths(randomName,false)).toBeFalse()
        });
        it(`should return false when an object is passed as an argument`, function () {
            expect(addStringLengths(exampleObject,randomName)).toBeFalse()
        });
        it(`should return false when an array is passed as an argument`, function () {
            expect(addStringLengths(randomName,exampleArray)).toBeFalse()
        });


    });

});



describe('subtract', function () {

    describe("Core Functionality", function () {

        const firstInt = getRandomIntInclusive(30, 40)
        const secondInt = getRandomIntInclusive(1, 20)

        const thirdInt = getRandomIntInclusive(30, 40)
        const forthInt = getRandomIntInclusive(1, 20)

        it('should be a declared function', function () {
            expect(subtract).toBeDefined();
        });
        it(`should return ${firstInt - secondInt} when passed the arguments (${firstInt},${secondInt})`, function () {
            expect(subtract(firstInt,secondInt)).toBe(firstInt - secondInt);
        });
        it(`should return ${firstInt - forthInt} when passed the arguments ("${firstInt}",${forthInt})`, function () {
            expect(subtract(firstInt.toString(),forthInt)).toBe(firstInt - forthInt);
        });
        it(`should return ${-thirdInt - secondInt} when passed the arguments (${-thirdInt},"${secondInt}")`, function () {
            expect(subtract((-thirdInt),secondInt.toString())).toBe(-thirdInt - secondInt);
        });

    });

    describe("Validation", function () {

        it(`should return false when called without passing an argument`, function () {
            expect(subtract()).toBeFalse()
        });
        it('should return false when a non numeric string is passed as an argument', function () {
            expect(subtract(randomPositiveEvenNumber(),randomName)).toBeFalse()
        });
        it(`should return false when undefined is passed as an argument`, function () {
            expect(subtract(randomPositiveNumber,undefined)).toBeFalse()
        });
        it(`should return false when null is passed as an argument`, function () {
            expect(subtract(null,randomPositiveNumericString)).toBeFalse()
        });
        it(`should return false when the boolean true is passed as an argument`, function () {
            expect(subtract(true,randomPositiveNumber)).toBeFalse()
        });
        it(`should return false when the boolean false is passed as an argument`, function () {
            expect(subtract(randomPositiveNumber,false)).toBeFalse()
        });
        it(`should return false when an object is passed as an argument`, function () {
            expect(subtract(exampleObject,randomPositiveNumericString)).toBeFalse()
        });
        it(`should return false when an array is passed as an argument`, function () {
            expect(subtract(randomPositiveNumericString,exampleArray)).toBeFalse()
        });

    });

});





describe('calculateChange', function () {

    describe("Core Functionality", function () {

        const firstTotal = getRandomIntInclusive(5, 10)
        const secondTotal = getRandomIntInclusive(25, 50)
        const thirdTotal = getRandomIntInclusive(120, 200)

        const firstSubtract = getRandomIntInclusive(1, 4)
        const secondSubtract = getRandomIntInclusive(9, 19)
        const thirdSubtract = getRandomIntInclusive(19, 99)

        const randomCents = [.05,.25,.85,.50,.75]

        const firstCents = randomCents[Math.floor(Math.random() * randomCents.length)];
        const secondCents = randomCents[Math.floor(Math.random() * randomCents.length)]
        const thirdCents = randomCents[Math.floor(Math.random() * randomCents.length)]



        it('should be a declared function', function () {
            expect(calculateChange).toBeDefined();
        });
        it(`should return "${"$" + (firstTotal - (firstSubtract + firstCents)).toFixed(2)}" when passed the arguments (${firstTotal},${firstSubtract + firstCents})`, function () {
            expect(calculateChange(firstTotal,(firstSubtract + firstCents))).toBe("$" + (firstTotal - (firstSubtract + firstCents)).toFixed(2));
        });
        it(`should return "${"$" + ((secondTotal + secondCents) - secondSubtract).toFixed(2)}" when passed the arguments (${secondTotal + secondCents},"${secondSubtract}")`, function () {
            expect(calculateChange((secondTotal + secondCents),secondSubtract.toString())).toBe("$" + ((secondTotal + secondCents) - secondSubtract).toFixed(2));
        });
        it(`should return "${"$" + ((thirdTotal + thirdCents) - thirdSubtract).toFixed(2)}" when passed the arguments (${thirdTotal + thirdCents},"${thirdSubtract.toFixed(2)}")`, function () {
            expect(calculateChange((thirdTotal + thirdCents),thirdSubtract.toFixed(2))).toBe("$" + ((thirdTotal + thirdCents) - thirdSubtract).toFixed(2));
        });


    });

    describe("Validation", function () {

        it(`should return false when called without passing an argument`, function () {
            expect(calculateChange()).toBeFalse()
        });
        it('should return false when a non numeric string is passed as an argument', function () {
            expect(calculateChange(randomPositiveEvenNumber(),randomName)).toBeFalse()
        });
        it(`should return false when undefined is passed as an argument`, function () {
            expect(calculateChange(randomPositiveNumber,undefined)).toBeFalse()
        });
        it(`should return false when null is passed as an argument`, function () {
            expect(calculateChange(null,randomPositiveNumericString)).toBeFalse()
        });
        it(`should return false when the boolean true is passed as an argument`, function () {
            expect(calculateChange(true,randomPositiveNumber)).toBeFalse()
        });
        it(`should return false when the boolean false is passed as an argument`, function () {
            expect(calculateChange(randomPositiveNumber,false)).toBeFalse()
        });
        it(`should return false when an object is passed as an argument`, function () {
            expect(calculateChange(exampleObject,randomPositiveNumericString)).toBeFalse()
        });
        it(`should return false when an array is passed as an argument`, function () {
            expect(calculateChange(randomPositiveNumericString,exampleArray)).toBeFalse()
        });

    });

});


var SpecListSelector = window.setInterval(function () {
    const button = document.querySelector("body > div > div.jasmine-alert > span.jasmine-menu.jasmine-bar.jasmine-failure-list > a")
    if (button) {
        clearInterval(SpecListSelector)
        button.click();
    }
}, 5);
