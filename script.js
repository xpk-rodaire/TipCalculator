"use strict";

var $ = function(id) {
    return document.getElementById(id);
}

function calcButtonClick() {
    var billTotalElement = $("billTotal");
    var billTotal = parseFloat(billTotalElement.value);
    var errorMessageElement = $("errorMessage");

    if (window.isNaN(billTotal)) {
        errorMessageElement.innerHTML = "Please enter a positive number for 'Bill Total'";
        billTotalElement.value = "";
        billTotalElement.focus();
        return;
    } else {
        errorMessageElement.innerHTML = "";
    }

    var numberDiners = parseInt($("numberDiners").value);
    var tipPercent = $("serviceQuality").value / 100;
    $("totalPerDiner").value = "$" + ((billTotal * (1 + tipPercent)) / numberDiners).toFixed(2);
}

function onServiceQualityChange() {
    var errorMessageElement = $("errorMessage");
    if ($("serviceQuality").value < 20) {
        errorMessageElement.innerHTML = "Don't be a cheap bastard!";
    } else {
        errorMessageElement.innerHTML = "";
    }
}

window.onload = function(e){ 
    for (var i = 1; i <= 20; ++i) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        var numberDinersElement = $("numberDiners");
        numberDinersElement.add(option);
    }
}