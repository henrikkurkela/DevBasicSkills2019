/* Set up Event Listener for Enter key in Base Converter Tool */
document.getElementById("value").addEventListener("keyup", function (event) {
    let input = document.getElementById("value");
    let result = document.getElementById("result");
    let inputbase = document.getElementById("valuebase");
    let resultbase = document.getElementById("resultbase");
    if (input.value != "") {
        result.value = baseConverter(input.value, inputbase.value, resultbase.value);
    } else {
        result.value = "";
    }
});

/* Base Converter Select Onchange function */
function triggerBaseConverter() {
    let input = document.getElementById("value");
    let result = document.getElementById("result");
    let inputbase = document.getElementById("valuebase");
    let resultbase = document.getElementById("resultbase");
    if (input.value == "") {
        return;
    } else {
        result.value = baseConverter(input.value, inputbase.value, resultbase.value);
    }
}

/* Base Converter function */
function baseConverter(value, base, targetbase) {
    let tempvalue;
    try {
        tempvalue = parseInt(value, base);
    } catch (error) {
        alert("Conversion Failed!");
        return "ERROR";
    }
    if (tempvalue.toString(targetbase) == "NaN") {
        alert("Conversion Failed!");
        return "NaN";
    }
    else return tempvalue.toString(targetbase);
}