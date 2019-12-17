/* Conversion Table generation function */
function generateConversionTable(collapse) {
    let table = document.getElementById("basetable");
    table.innerHTML = '';
    if (collapse == "collapse") return;
    let row = table.insertRow(0);
    let cell = row.insertCell(0);
    cell.innerHTML = "Decimal";
    cell = row.insertCell(1);
    cell.innerHTML = "Binary";
    cell = row.insertCell(2);
    cell.innerHTML = "Octal";
    cell = row.insertCell(3);
    cell.innerHTML = "Hexadecimal";
    for (let i = 1; i < 51; i++) {
        row = table.insertRow(i);
        cell = row.insertCell(0);
        cell.innerHTML = i.toString(10);
        cell = row.insertCell(1);
        cell.innerHTML = i.toString(2);
        cell = row.insertCell(2);
        cell.innerHTML = i.toString(8);
        cell = row.insertCell(3);
        cell.innerHTML = i.toString(16);
    }
    return;
}
function openoverlay() {
    document.getElementsByClassName("overlay")[0].style.display = "block";
    generateConversionTable();
}
function closeoverlay() {
    document.getElementsByClassName("overlay")[0].style.display = "none";
    generateConversionTable('collapse');
}