var heads = 0;
var tails = 0;
var limit = 11;

while (heads != limit && tails != limit){
    var flip = Math.floor(Math.random() * 10) % 2;
    console.log(flip)

    if (flip == 0){
        console.log("Heads");
        heads++;
    }
    else{
        console.log("Tails");
        tails++;
    }
}