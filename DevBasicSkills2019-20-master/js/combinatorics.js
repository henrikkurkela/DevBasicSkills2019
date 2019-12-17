/* Combinatorics Radio Button onchange function */
function combinatoricsChangeMode() {
    let mode = document.querySelector('input[name="type"]:checked').value;
    if (mode == "combinations") {
        document.getElementById("replacement").checked = false;
        document.getElementById("replacement").disabled = true;
    } else if (mode == "permutations") {
        document.getElementById("replacement").disabled = false;
    }
    return;
}

/* Combinatorics Calculation function */
function combinatoricsCalculate() {
    let mode = document.querySelector('input[name="type"]:checked').value;
    let replacement = false;
    let n = parseInt(document.getElementById("n").value, 10);
    let k = parseInt(document.getElementById("k").value, 10);
    let result = document.getElementById("combinatoricsresult");
    if ((n.toString(10) == "NaN") || (k.toString(10) == "NaN")) return;
    if (mode == "permutations") {
        replacement = document.getElementById("replacement").checked;
        if (replacement == true) {
            result.innerHTML = "Result: " + factorial(n) / factorial(n - k);
        } else if (replacement == false) {
            result.innerHTML = "Result: " + Math.pow(n, k);
        }
    } else if (mode == "combinations") {
        result.innerHTML = "Result: " + factorial(n) / (factorial(k) * factorial(n - k));
    }

}

/* Factorial function */
function factorial(number) {
    if (number > 0) return number * factorial(number - 1);
    else return 1;
}