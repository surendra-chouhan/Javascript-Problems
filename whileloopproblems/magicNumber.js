var read = require("readline-sync");

console.log("Think of a number between 1 to 100");
var min = 1;
var max = 100;
var num = 0;
var flag = 0;

while (flag == 0){
    num = Math.round((min + max)/2);
    console.log("Is your number greater or lesser than " + num);
    var condition = read.question("If greater than enter 0 or if smaller than enter 1 or if it is equal than enter any other number : ");
    condition = parseInt(condition);

    if (condition == 0){
        min = num;
        max = max;
    }
    else if (condition == 1){
        min = min;
        max = num;
    }
    else{
        flag++;
        console.log("The number is : " + num);
    }
}