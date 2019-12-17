/* Random Values Radio Button onchange function */
function randomGenerate() {
    let mode = document.querySelector('input[name="numbermode"]:checked').value;
    let start = parseInt(document.getElementById('randomstart').value, 10);
    let stop = parseInt(document.getElementById('randomstop').value, 10);
    let amount = parseInt(document.getElementById('randomamount').value, 10);
    let table = document.getElementById("randomtable");
    table.innerHTML = "";
    if ((start.toString(10) == "NaN") || (stop.toString(10) == "NaN") || (amount.toString(10) == "NaN")) {
        return;
    } else if (start >= stop) {
        return;
    } else if (amount <= 0) {
        return;
    }
    if (amount > 1000) amount = 1000;
    for (let i = 0; i < amount; i++) {
        let row = table.insertRow();
        let cell = row.insertCell();
        if (mode == "integer") {
            cell.innerHTML = Math.round(Math.random() * (stop - start) + start);
        } else if (mode == "float") {
            cell.innerHTML = Math.random() * (stop - start) + start;
        }
    }
}
