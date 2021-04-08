var read = require("readline-sync");
var choice = read.question("Enter 0 to convert Celsius to Fahrenheit or 1 for Fahrenheit to Celsius : ");
choice  = parseInt(choice);
tempConversion(choice);

var degF = 0;
var degC = 0;

function tempConversion(choice){
    switch (choice) {
        case 0:
            var num = read.question("Enter a number to convert to Fahrenheit.The number should be between 0C and 100C : ");
            degC = parseInt(num);
            degF = ((degC*9/5) + 32).toFixed(2);
            console.log("After Conversion the temperature is : " + degF + " F");
            break;
        case 1:
            var num = read.question("Enter a number to convert to Celsius. The number should be between 32F and 212F : ");
            degF = parseInt(num);
            degC = ((degF - 32) * 5/9).toFixed(2);
            console.log("After Conversion the temperature is : " + degC + " C");
            break;
    }

}