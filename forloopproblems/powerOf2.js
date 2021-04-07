const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number : ", num =>{
    getPowersOf2(parseInt(num));
    readline.close();
})

function getPowersOf2(num) {
    var p = 1;
    var q = 2;

    for(var i = 0; i < num; i++){
        p *= q;
        console.log(p)
    }
}