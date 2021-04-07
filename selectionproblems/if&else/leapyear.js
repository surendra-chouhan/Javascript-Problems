const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter year : ", year =>{
    checkYear(year);
    readline.close();
})

function checkYear(year) {
    if (year%4 == 0)
        if (year%100 == 0)
            if(year%400 == 0)
                console.log("It is a leap year");
             else
                console.log("It is not a leap year");
        else
            console.log("It is a leap year");
    else
        console.log("It is not a leap year");
}