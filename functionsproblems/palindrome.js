var read = require("readline-sync");
var num1 = read.question("Enter a number : ");
num1 = parseInt(num1);
var num2 = read.question("Enter second number : ");
num2 = parseInt(num2);
console.log(palindromeCheck(num1));
console.log(palindromeCheck(num2));


function palindromeCheck(num){
    var remainder, originalNumber;
    var reversedNumber = 0;
    originalNumber = num;

    while(num > 0){
        remainder = num % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        num = parseInt(num / 10);
    }

    if (originalNumber == reversedNumber)
        console.log("Number " + originalNumber + " is Palindrome");
    else
        console.log("Number " + originalNumber + " is not a Palindrome");
}