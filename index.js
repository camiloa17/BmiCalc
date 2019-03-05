var height = 0;
var weight = 0;

var kgm = true;

function bmiCalc(weight, height) {
    var bmi = 0;
    if (kgm === true) {
        bmi = (weight / (Math.pow(height, 2))).toFixed(2);
        return bmi;
    } else if (kgm === false) {
        bmi = ((weight / Math.pow(height, 2) * 703)).toFixed(2);
        return bmi;
    }

}

$("#kgmchanger").on("click",function(){
    kgm =!kgm;

    if (kgm == true){
        $("#heightlabel").text("Your Height in M");
        $("#weightlabel").text("Your Weight in Kg");
        $("#kgmchanger").attr("value", "Change to Inches/lb");

    } else if (kgm == false){
        $("#heightlabel").text("Your Height in Inches");
        $("#weightlabel").text("Your Weight in lb");
        $("#kgmchanger").attr("value","Change to m/kg");
    }
});

$("#numbersubmit").on("click", function(){
    height = parseFloat($("#heightform").val());
    weight = parseFloat($("#weightform").val());
    var bmi = bmiCalc(weight, height);
    $("#result").text(bmi + " BMI");
    checkState(bmi);
    return false;
});


function checkState(bmiNum){
    if(bmiNum < 18.5){
        $("#resultsTitle").text("Your Results");
        $("#resultsText").text("You are underweight");
    } else if (bmiNum > 18.5 && bmiNum <= 25){
        $("#resultsTitle").text("Your Results");
        $("#resultsText").text("You are OK!");
    } else if (bmiNum > 25 && bmiNum <= 30) {
        $("#resultsTitle").text("Your Results");
        $("#resultsText").text("You are Overweight");
    } else if (bmiNum > 30) {
        $("#resultsTitle").text("Your Results");
        $("#resultsText").text("You are Really Overweight");
    }
};



