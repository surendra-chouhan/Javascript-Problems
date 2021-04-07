var number1, number2, number3;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter first number : ", num1 =>{
    number1 = parseInt(num1);
    // console.log("first number is " + number1)
    readline.question("Enter second number : ", num2 =>{
        number2 = parseInt(num2);
        // console.log("Second number is " + number2)
        readline.question("Enter third number : ", num3 =>{
            number3 = parseInt(num3);
            // console.log("Third number is " + number3)
            arithmetic(number1, number2, number3);
            readline.close();
        })
    })
})

function arithmetic(number1, number2, number3){
    var Q1 = number1 + number2 * number3;
    console.log(Q1);

    var Q2 = number1 % number2 + number3;
    console.log(Q2)

    var Q3 = number3 + number1 / number2;
    console.log(Q3);

    var Q4 = number1 * number2 + number3;
    console.log(Q4);

    if (Q1 > Q2 && Q1 > Q3 && Q1 > Q4)
        console.log("Q1 is maximum");
    else if (Q2 > Q1 && Q2 > Q3 && Q2 > Q4)
        console.log("Q2 is maximum");
    else if (Q3 > Q1 && Q3 > Q2 && Q3 > Q4)
        console.log("Q3 is maximum");
    else    
        console.log("Q4 is maximum");


    if(Q1 < Q2 && Q1 < Q3 && Q1 < Q4)
        console.log("Q1 is minimum");
    else if(Q2 < Q1 && Q2 < Q3 && Q2 < Q4)
        console.log("Q2 is minimum");
    else if (Q3 < Q1 && Q3 < Q2 && Q3 < Q4)
        console.log("Q3 is minimum");
    else      
        console.log("Q4 is minimum")
}
