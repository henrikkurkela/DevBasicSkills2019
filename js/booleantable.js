/* Boolean Table generation function */
function generateBooleanTable() {
    let table = document.getElementById("booleantable");
    let operator = document.getElementById("booleanoperation").value;
    table.innerHTML = '';
    if (operator == "collapse") {
        return;
    } else {
        let row = table.insertRow(0);
        let cell = row.insertCell(0);
        cell.innerHTML = "A";
        cell = row.insertCell(1);
        cell.innerHTML = "B";
        cell = row.insertCell(2);
        cell.innerHTML = operator;
        for (let i = 0; i < 2; i++) {
            row = table.insertRow();
            for (let j = 0; j < 2; j++) {
                cell = row.insertCell();
                cell.innerHTML = i;
                cell = row.insertCell();
                cell.innerHTML = j;
                cell = row.insertCell();
                switch (operator) {
                    case "and":
                        cell.innerHTML = !!(i && j);
                        break;
                    case "nand":
                        cell.innerHTML = !(i && j);
                    case "or":
                        cell.innerHTML = !!(i || j);
                        break;
                    case "nor":
                        cell.innerHTML = !(i || j);
                        break;
                    case "xor":
                        if ((i == 0 && j == 1) || (i == 1 && j == 0)) cell.innerHTML = true;
                        else cell.innerHTML = false;
                        break;
                    case "xnor":
                        if ((i == 0 && j == 0) || (i == 1 && j == 1)) cell.innerHTML = true;
                        else cell.innerHTML = false;
                        break;
                }
                row = table.insertRow();
            }
        }
    }
    return;
}