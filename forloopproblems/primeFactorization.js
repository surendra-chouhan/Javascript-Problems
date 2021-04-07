const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number : ", num =>{
    primeFactorization(parseInt(num));
    readline.close();
})

function primeFactorization(num){
    console.log("Prime factors of " + num + " are : ");
    for (var i = 2; i <= num; i++){
        if (num % i == 0){
            var isPrime = 1;
            for(var j = 2; j <= i/2; j++){
                if (i % j == 0)
                    isPrime = 0;
                    break;
            }

            if (isPrime == 1)
                console.log(i);
        }
    }
}