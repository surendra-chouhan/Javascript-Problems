const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number to check its factorial : ", num =>{
    factorial(parseInt(num));
    readline.close();
})

function factorial(num) {
    var fact = 1;
    for(var i = 2; i <= num; i++)
        fact *= i;
    
    console.log("Factorial of " + num + " is : " + fact);
}