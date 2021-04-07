const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number : ", num =>{
    getUnitTensHundreds(num);
    readline.close();
})

function getUnitTensHundreds(num) {
    if (num >= 0 && num < 10)
        console.log("Units");
    else if (num >= 10 && num < 100)
        console.log("Tens");
    else if (num >= 100 && num < 1000)
        console.log("Hundreds");
    else if (num >= 1000 && num < 10000)
        console.log("Thousands");
    else
        console.log("Wrong input");
}
