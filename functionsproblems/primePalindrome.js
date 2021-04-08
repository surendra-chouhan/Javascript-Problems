function prime(num){
    var flag = 0;
    for(i = 2; i <= num/2; i++){
        if(num % i ==0)
            flag = 1;
    }
    if(flag == 1)
        console.log(num + " is not a prime number");
    else
        console.log(num + " is a Prime Number");
}

function palindromeCheck(num){
    var remainder, originalNumber;
    var reversedNumber = 0;
    originalNumber = num;

    while(num > 0){
        remainder = num % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        num = parseInt(num / 10);
    }

    if (originalNumber == reversedNumber){
        console.log("Number " + originalNumber + " is Palindrome");
        return reversedNumber;
    }
    else{
        console.log("Number " + originalNumber + " is not a Palindrome");
        return reversedNumber;
    }
}

var read = require("readline-sync");
var num1 = read.question("Enter a number : ");
num1 = parseInt(num1);
prime(num1);
var palindrome = palindromeCheck(num1);
prime(palindrome);