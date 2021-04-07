var start, end;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter the starting number : ", num =>{
    start = parseInt(num);
    readline.question("Enter the ending number : ", num => {
        end = parseInt(num);
        getPrimeRange(start, end);
        readline.close();
    })
})

function getPrimeRange(start, end) {
    console.log("The Prime Numbers between " + start + " and " + end + " are : ");
    for (var i = start; i <= end; i++){
        var count = 0;
        for(var j = 1; j <= i; j++){
            if (i % j == 0)
                count += 1;
        }

        if (count == 2)
            console.log(i);
    }
}