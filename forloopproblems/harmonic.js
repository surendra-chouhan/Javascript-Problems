const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number upto which you want to calculate harmonic number : ", num =>{
    getHarmonic(parseInt(num));
    readline.close();
})

function getHarmonic(num) {
    var harmonic = 0;

    for(var i = 1; i <= num; i++) {
        harmonic += " + " + `1/`+i;
    }
    console.log(harmonic);
}