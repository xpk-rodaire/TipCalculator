
var billTotalElement = document.getElementById("billTotal");
var numberDinersElement = document.getElementById("numberDiners");
var totalPerDinerElement = document.getElementById("totalPerDiner");
var serviceQualityElement = document.getElementById("serviceQuality");
var errorMessage = document.getElementById("errorMessage");

window.onload = function(e){ 
    var numberDiners = document.getElementById("numberDiners");
    for (var i = 1; i <= 20; ++i) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i
        numberDiners.add(option);
    }
}

function calcButtonClick() {
    var billTotal = parseFloat(billTotalElement.value);
    if (window.isNaN(billTotal)) {
        errorMessage.innerHTML = "Please enter a positive number for 'Bill Total'";
        billTotalElement.value = "";
        billTotalElement.focus();
        return;
    }
    else
    {
        errorMessage.innerHTML = "";
    }

    var numberDiners = parseInt(numberDinersElement.value);

    var tipPercent = serviceQualityElement.value / 100;

    totalPerDiner.value = "$" + ((billTotal * (1 + tipPercent)) / numberDiners).toFixed(2);
}