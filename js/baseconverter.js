/* Set up Event Listener for Enter key in Base Converter Tool */
document.getElementById("value").addEventListener("keyup", function(event) {
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
        document.getElementById("value").setAttribute("style", "background-color: #5eb8ff;");
        document.getElementById("result").setAttribute("style", "background-color: #5eb8ff;");
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
        document.getElementById("value").setAttribute("style", "background-color: #9a0007;");
        document.getElementById("result").setAttribute("style", "background-color: #9a0007;");
        return "ERROR";
    }
    if (tempvalue.toString(targetbase) == "NaN") {
        document.getElementById("value").setAttribute("style", "background-color: #9a0007;");
        document.getElementById("result").setAttribute("style", "background-color: #9a0007;");
        return "NaN";
    } else {
        document.getElementById("value").setAttribute("style", "background-color: #5eb8ff;");
        document.getElementById("result").setAttribute("style", "background-color: #5eb8ff;");
        return tempvalue.toString(targetbase);
    }
}
