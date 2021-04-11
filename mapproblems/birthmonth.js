var result = [];
var January = [];
var February = [];
var March = [];
var April = [];
var May = [];
var June = [];
var July = [];
var August = [];
var September = [];
var October = [];
var November = [];
var December = [];
var count = 0;

for(i = 0; i <= 50; i++){
    var value = Math.floor((Math.random() * 12) + 1);
    result[i] = value;
}

for(values in result){
    if (result[values] == 1){
        January[count++] = "Person" + values;
    }
    else if (result[values] == 2){
        February[count++] = "Person" + values;
    }
    else if (result[values] == 3) {
        March[count++] = "Person" + values;
    }
    else if (result[values] == 4) {
        April[count++] = "Person" + values;
    }
    else if (result[values] == 5) {
        May[count++] = "Person" + values;
    }
    else if (result[values] == 6) {
        June[count++] = "Person" + values;
    }
    else if (result[values] == 7) {
        July[count++] = "Person" + values;
    }
    else if (result[values] == 8) {
        August[count++] = "Person" + values;
    }
    else if (result[values] == 9) {
        September[count++] = "Person" + values;
    }
    else if (result[values] == 10) {
        October[count++] = "Person" + values;
    }
    else if (result[values] == 11) {
        November[count++] = "Person" + values;
    }
    else if (result[values] == 12) {
        December[count++] = "Person" + values;
    }
}

var jan = January.filter(function(e1) {
    return e1 != null;
});

var feb = February.filter(function(e2) {
    return e2 != null;
});

var mar = March.filter(function(e3) {
    return e3 != null;
});

var apr = April.filter(function(e4) {
    return e4 != null;
});

var may = May.filter(function(e5) {
    return e5 != null;
});

var jun = June.filter(function(e6) {
    return e6 != null;
});

var jul = July.filter(function(e7) {
    return e7 != null;
});

var aug = August.filter(function(e8) {
    return e8 != null;
});

var sep = September.filter(function(e9) {
    return e9 != null;
});

var oct = October.filter(function(e10) {
    return e10 != null;
});

var nov = November.filter(function(e11) {
    return e11 != null;
});

var dec = December.filter(function(e12) {
    return e12 != null;
});

var birthMonth = new Map();

birthMonth.set("01.January", jan);
birthMonth.set("02.February", feb);
birthMonth.set("03.March", mar);
birthMonth.set("04.April", apr);
birthMonth.set("05.May", may);
birthMonth.set("06.June", jun);
birthMonth.set("07.July", jul);
birthMonth.set("08.August", aug);
birthMonth.set("09.September", sep);
birthMonth.set("10.October", oct);
birthMonth.set("11.November", nov);
birthMonth.set("12.December", dec);
    
console.log("The Index Number of individuals having birthdays in the same month are : ");
for(let keys of birthMonth.keys()) {
    console.log(keys + " : " + birthMonth.get(keys));
}
