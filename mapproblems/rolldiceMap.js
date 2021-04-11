var result = new Map();
var i = 0;
var one = two = three = four = five = six = 0;

while (one < 10 && two < 10 && three < 10 && four < 10 && five < 10 && six < 10) {
    var roll = Math.floor(Math.random() * 6) + 1;
    result.set(i++, roll);
    switch(roll){
        case 1:
            one++;
            break;
        case 2:
            two++;
            break;
        case 3:
            three++;
            break;
        case 4:
            four++;
            break;
        case 5:
            five++;
            break;
        case 6:
            six++;
            break;
    }
}
console.log("The result each time a die is rolled is : " );
for([key, value] of result)
    console.log(key + ' = ' + value);
console.log("The total number of times the die is rolled is : " + result.size);

var appearance = new Map();
appearance.set(1, one);
appearance.set(2, two);
appearance.set(3, three);
appearance.set(4, four);
appearance.set(5, five);
appearance.set(6, six);

console.log("The number of times each value has occured is : " );
for ([key, value] of appearance)
    console.log(key + ' = ' + value);

var biggest = appearance.get(1);
var smallest = appearance.get(1);

for (let j of appearance.values()){
    if (j > biggest)
        biggest = j;
    
    if (j < smallest)
        smallest = j;
}

console.log("The value that appeared maximum time is : " );
for (let k of appearance.keys()){
    if(appearance.get(k) == biggest)
        console.log(k);
}

console.log("The value that appeared minimum time is : " );
for (let k of appearance.keys()){
    if(appearance.get(k) == smallest)
        console.log(k);
}