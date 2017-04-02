var rates = [0.0127, 78.6222, 0.0145, 1.1388, 0.8781];

var RUBEUR = rates[0];
var EURRUB = rates[1];
var RUBUSD = rates[2];
var USDRUB = rates[3];
var EURUSD = rates[4];
var USDEUR = rates[5]; 

var result = 0;

function convert(amount, convertFrom, convertTo) {
    if(convertFrom == "RUB" && convertTo == "EUR"){
        result = amount * RUBEUR;
    }else if(convertFrom == "EUR" && convertTo == "RUB"){
        result = amount * EURRUB;
    }else if(convertFrom == "RUB" && convertTo == "USD"){
        result = amount * RUBUSD;
    }else if(convertFrom == "USD" && convertTo == "RUB"){
        result = amount * USDRUB;
    }else if(convertFrom == "EUR" && convertTo == "USD"){
        result = amount * EURUSD;
    }else if(convertFrom == "USD" && convertTo == "EUR"){
        result = amount * USDEUR;
    }else if(convertFrom === convertTo){
        result = amount;
    }else{
        alert("invalid input");
    }
    document.write(amount + " " + convertFrom + " = " + result + " " + convertTo + "<br>");
}

convert(500, "USD", "RUB");
convert(500, "EUR", "USD");
convert(500, "RUB", "EUR");
convert(500, "USD", "USD");