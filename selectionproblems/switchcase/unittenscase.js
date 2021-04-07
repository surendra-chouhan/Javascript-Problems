const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number : ", num =>{
    unitstens(parseInt(num));
    readline.close();
})

function unitstens(num) {
    switch(true) {
        case num < 10:
            console.log("Units");
            break;
        case num >= 10 && num < 100:
            console.log("Tens");
            break;
        case num >= 100 && num < 1000:
            console.log("Hundreds");
            break;
        case num >= 1000 && num < 10000:
            console.log("Thousands");
            break;
        default:
            console.log("Wrong Input");
            break;
    }
}