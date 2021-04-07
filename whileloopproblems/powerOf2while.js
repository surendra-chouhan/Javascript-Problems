var read = require("readline-sync");

var num = read.question("Enter a number : " );
num = parseInt(num);

var p = 1;
var q = 2;
const LIMIT = 256;
var i = 0;

while (i < num && p < LIMIT){
    p *= q;
    console.log(p);
    i++;
}