var read = require("readline-sync");

var arr = [];
for(i = 0; i < 5; i++){
    num = read.question("Enter number : ");
    arr[i] = parseInt(num);
}
console.log(arr);

var n = arr.length;
var found = 0;

console.log("The three numbers whose sum gives Zero is : ");
for(i = 0; i < n-2; i++){
    for(j = i+1; j < n-1; j++){
        for(k = j+1; k < n; k++){
            z = arr[i] + arr[j] + arr[k];
            if (z == 0){
                console.log(arr[i] + " " + arr[j] + " " + arr[k]);
                found = 1;
            }
        }
    }
}

if (found == 0){
    console.log("Do not Exist");
}