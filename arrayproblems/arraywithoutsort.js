var n = 1;
var count = 0;
var random = [];

for(i = 0; i < 10; i++) {
    var a=Math.floor(100 + Math.random() * 899);
    random[i] = a;
}
console.log(random);

if(random.length < 2){
    console.log("Incoming array is not large enough");
    exit;
}

var largest = random[0];
var smallest = random[0];
var secondGreatest = 'unset';
var secondSmallest = 'unset';

for(i = 1; i < random.length; i++){
    if (random[i] > largest){
        secondGreatest = largest;
        largest = random[i];
    }
    else if (random[i] != largest && (secondGreatest = 'unset' || random[i] > secondGreatest)){
        secondGreatest = random[i]
    }
}

for(j = 0; j < random.length; j++){
    if (random[j] < smallest){
        secondSmallest = smallest;
        smallest = random[j];
    }
    else if (random[j] != largest && (secondSmallest = "unset" || random[i] < secondSmallest)) {
        secondSmallest = random[j];
    }
}

console.log("Second Greatest is : " + secondGreatest);
console.log("Second Smallest is : " + secondSmallest);