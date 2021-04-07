const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number : ", num =>{
    prime(parseInt(num));
    readline.close();
})

function prime(num) {
    var flag = 0;
    for(var i = 2; i <= (num/2); i++){
        if (num % i == 0)
            flag = 1;
    }

    if (flag == 1)
        console.log(num + " is not a prime number");
    else
        console.log(num + " is a prime number");
}