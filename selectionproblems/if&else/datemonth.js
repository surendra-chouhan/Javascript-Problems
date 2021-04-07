const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var check;
readline.question("Enter date in mm/dd/yyyy format : ", date =>{
    console.log(`Date is : ${date}` )
    check = Date.parse(date);
    checkDate(check);
    readline.close();
})

var dateFrom = "03/01/2020";
var dateTo = "06/30/2020";

var from = Date.parse(dateFrom);
var to = Date.parse(dateTo);

function checkDate(date) {
    if((check <= to && check >= from))
        console.log("True")
    else
        console.log("False")
}