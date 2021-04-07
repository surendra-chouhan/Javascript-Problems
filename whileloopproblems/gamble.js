var startFrom = 100;
var placeBet = 1;
var won = 0;
var lost = 0;

while(startFrom > 0 && startFrom < 200){
    var bet = Math.floor(Math.random() * 10) % 2;

    if(bet == 0){
        startFrom++;
        console.log("Won");
        won++;
    }
    else {
        startFrom--;
        console.log("Lost");
        lost++;
    }

    console.log("Total number of times the bet is made is : " + (won + lost));
    console.log("Number of times the bet is won is : " + won);
    console.log("Number of times the bet is lost is : " + lost);
}