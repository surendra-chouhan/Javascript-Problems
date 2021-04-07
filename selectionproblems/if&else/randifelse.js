var i = 0;
var j = 0;
var k = 0;

for(i = 0; i < 5; i++) {
    var rand=Math.floor(100 + Math.random() * 899);
    console.log(rand);

    if(j > rand){
        var maximum=j;
    }
    else{
        j=0+rand;
    }

    if(k == 0){
        k=rand;
    }

    if(rand < k){
        k=0+rand;
    }
    else{
        minimum=k;
    }
}

console.log("Maximum is: "+maximum);
console.log("Minimum is: "+minimum);