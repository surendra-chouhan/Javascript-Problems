var temp = 0;
var rand_num = [];

for (i = 0; i < 10; i++){
    rand_num[i]=Math.floor(100 + Math.random() * 899);
}
console.log(rand_num);

for(i = 0; i < rand_num.length; i++){
    for(j = i+1; j < rand_num.length; j++){
        if(rand_num[i] > rand_num[j]){
            temp = rand_num[i];
            rand_num[i] = rand_num[j];
            rand_num[j] = temp;
        }
    }
}
console.log("Second largest is : " + rand_num[rand_num.length - 2]);
console.log("Second smallest is : " + rand_num[1]);