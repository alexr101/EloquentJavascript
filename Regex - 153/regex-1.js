//Eloquent Javascript - REGEX

var rpattern = /abc/;

//Regex Shortcuts
// \d Any digit character
// \w An alphanumeric character (“word character”)
// \s Any whitespace character (space, tab, newline, and similar) 
// \D A character that is not a digit
// \W A nonalphanumeric character
// \S A nonwhitespace character
// . Any character except for newline

var rcheckNumbers = /[0-9]/;
var rcheckNumbersD = /\d/;

console.log( rpattern.test("abcdefg") ); //true
console.log( rcheckNumbers.test("holiday") + " " + rcheckNumbersD.test("holiday") ); //false & false
console.log( rcheckNumbers.test("december 25th") + " " + rcheckNumbersD.test("december 25th")); //true & true

//Check date time with regex

var rdateTimeNumeric = /\d\d-\d\d-\d\d \d\d:\d\d/;

console.log( rdateTimeNumeric.test("24-01-12 13:54") ); //true
console.log( rdateTimeNumeric.test("24-jan-12 13:54") ); //false

//Special characters lose their meaning when inside of brackets
//This regex searches for any digits or periods
//The period won't check for "any character except for newline" like it usually does

var rtext = /[\d.]/;

console.log( rtext.test("Hey there buddy.") ); //true
console.log( rtext.test(".") ); //true

//Use ^ to invert the search
//This will return true if anything DOESNT match the regex
var rnotBinary = /[^01]/;

console.log( rnotBinary.test(01010100100101) ); //false
console.log( rnotBinary.test(01020010010102) ); //true

var rcontainSpecialChar = /[^\d\w]/; //true anything doesn't match "any digit & any character"

console.log( rcontainSpecialChar.test("alexr101") ); //false it contains words & number
console.log( rcontainSpecialChar.test("alexr101!") ); //true it 

//+ allows character to match 1 or more times...I think there's gonna be a amount of matches function later...look at rdateFormat
var rDoubtOne = /[\d+]/;

console.log( rDoubtOne.test(1111) ); //true

//? makes the preceding char optional - good for words that have common varied spellings
var rneighbor = /neighbou?r/;
var rcouldve = /could'?ve/;

console.log( rneighbor.test("neighbour") + " " + rneighbor.test("neighbor") ); //true & true
console.log( rcouldve.test("could've") + " " + rcouldve.test("couldve") ) //true & true

//You can specify the amount of matches by adding curly braces and declaring the range!

var rdateFormat = /\d{1,2}:\d{1,2}:\d{4} \d{1,2}:\d{2}/;

console.log( rdateFormat.test("1:13:2014 1:23") ); //true
console.log( rdateFormat.test("1:13:14 1:23") ); //false --year is not in correct in format


//UNDERSTAND JQUERYS rcheckableType

var rcheckableType = ( /^(?:checkbox|radio)$/i ); //doesn't contain any characters out of checkbox or radio
var domCheckbox = document.getElementById("check");

console.log( domCheckbox.type );
console.log( rcheckableType.test( domCheckbox.type ) );


//EXEC Keyword
/*
	return an object of the match
	or null if no match found

	Object contains:
	0: string
	1: index
	2: text being tested

	object: ["100", index: 19, input: "this is the number 100 and 25"]

*/

var rdigits = /(\d+)+/;

console.log(rdigits.exec("this is the number 100 and 25")); //?
console.log(rdigits.exec("space 25").index); //6



















