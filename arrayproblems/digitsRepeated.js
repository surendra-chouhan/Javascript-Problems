var range = [];
for(j = 0; j <= 100; j++) {
    range[j] = j;
}
console.log("The range is : " + range);

var array = [];
var counter = 0;
for(i = range[0]; i < range.length; i++){
    var num = i;
    if(num < 10) {
        continue;
    }
    else{
        var s = 0;
        var rev = "";
        var temp = num;
        
        while(num > 0){
            s = parseInt(num % 10);
            num = parseInt(num / 10);
            rev = parseInt((rev * 10) + s);
        }

        if(temp == rev){
            array[counter++] = temp;
            console.log(array);
        }
    }
}
console.log("The digits that are repeated twice are : " + array);