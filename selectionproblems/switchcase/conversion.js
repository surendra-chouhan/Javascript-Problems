var number;
var choice;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`Enter 1 to convert Feet to inch , 2 Feet to meter , 3 Inch to feet , 4 Meter to feet `, value => {
    console.log(`Choice is ${value}`)
    choice=parseInt(value);
    readline.question(`Enter number for conversion `, value => {
        console.log(`Number is ${value}`)
        number=parseInt(value);
        unitConversion(choice,number);
        readline.close()
    })
  })

const meterConversion=3
const inchConversion=12
  

function unitConversion(choice,number){
    var con;
    switch(choice){
        case 1:
            con=number*inchConversion;
            console.log("Feet to inch conversion is: "+con.toFixed(2));
            break;
        case 2:
            con=number/meterConversion;
            console.log("Feet to meter conversion is: "+con.toFixed(2));
            break;
        case 3:
            con=number/inchConversion;
            console.log("Inch to feet conversion is: "+con.toFixed(2));
            break;
        case 4:
            con=number*meterConversion;
            console.log("Meter to feet conversion is: "+con.toFixed(2));
            break;
        default:
            console.log("Wrong Input");
            break;
    }
}