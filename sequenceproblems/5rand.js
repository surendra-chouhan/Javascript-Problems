var i =0;
var sum =0;
for(i=0; i < 5; i++) {
    var x = Math.floor(Math.random() * 100);
    sum = sum + x;
}
console.log("Sum is : " + sum)
console.log("Average is : " + sum/5);