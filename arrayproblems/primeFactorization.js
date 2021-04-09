var read = require("readline-sync");
var num = read.question("Enter a number : ");
num = parseInt(num);
var counter = 0;
var array = [];

for(var i = 2; i <= num; i++){
    if ((num % i) == 0){
        var isPrime = 1;
        for(var j = 2; j <= i/2; j++){
            if((i % j) == 0){
                isPrime = 0;
                break;
            }
        }
        if(isPrime == 1){
            array[counter++] = i;
        }
    }
}

console.log("The prime factors of " + num + " are : " + array);