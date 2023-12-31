const submit = document.getElementById('submit');
const table = document.getElementById("calculator");

function onClickCell1() {
    square();
}

function onClickCell2() {
    squareRoot();
}

function onClickCell3() {
    percent();
}

function onClickCell4() {
    show('π');
}

function onClickCell5() {
    sin();
}

function onClickCell6() {
    cos();
}

function onClickCell7() {
    tan();
}

function onClickCell8() {
    log();
}

let rowsAdded = false;                              //To ensure that the rows are added only once.


submit.addEventListener("click", e => {
    
    let Choice = document.getElementById("select").value;
     if (Choice === "SIM") {

        while (table.rows.length > 6) {
            table.deleteRow(1);                         //need some fixing.
        }

        rowsAdded = false;
    }

     else if (!rowsAdded && Choice === "SCI") {

        let row1 = table.insertRow(1);
        let row2 = table.insertRow(2);

        let cell1 = row1.insertCell(0);
        let cell2 = row1.insertCell(1);
        let cell3 = row1.insertCell(2);
        let cell4 = row1.insertCell(3);

        let cell5 = row2.insertCell(0);
        let cell6 = row2.insertCell(1);
        let cell7 = row2.insertCell(2);
        let cell8 = row2.insertCell(3);

        cell1.className = cell2.className = cell3.className = cell4.className = cell5.className = cell6.className = cell7.className = cell8.className = "operator";

        cell1.onclick = onClickCell1;    //When used square() directly, the function executed as soon as i shifted to scientific calculator
        cell2.onclick = onClickCell2;
        cell3.onclick = onClickCell3;
        cell4.onclick = onClickCell4;
        cell5.onclick = onClickCell5;
        cell6.onclick = onClickCell6;
        cell7.onclick = onClickCell7;
        cell8.onclick = onClickCell8;

        cell1.innerText = "x²";
        cell2.innerText = "√";
        cell3.innerText = "%";
        cell4.innerText = "π";
        cell5.innerText = "sin";
        cell6.innerText = "cos";
        cell7.innerText = "tan";
        cell8.innerText = "log";

        rowsAdded = true;
    }
    });


function clr() {
    document.getElementById("input").value = ""
}

function del() {
    document.getElementById("input").value = document.getElementById("input").value.slice(0, -1)
}

let result = " ";

function show(input) {
    if (input == "ans") {
        document.getElementById("input").value += result
    }
    else if (input == "π") {
        document.getElementById("input").value += Math.PI
    }
    else {
        document.getElementById("input").value += input
    }
}

//For Simple Calculator

function calculate() {
    let x = document.getElementById("input").value
    result = eval(x)
    document.getElementById("input").value = result
}

//For scientific Calculator

function square() {
    let inputValue = document.getElementById("input").value;
    const result = inputValue ** 2;
    document.getElementById("input").value = result;
}

function squareRoot() {
    let inputValue = document.getElementById("input").value;
    const result = Math.sqrt(inputValue);
    document.getElementById("input").value = result;
}

function percent() {
    let inputValue = document.getElementById("input").value;
    const result = inputValue / 100;
    document.getElementById("input").value = result;
}

function sin() {
    let inputValue = document.getElementById("input").value;
    const radians = inputValue * Math.PI / 180
    const result = Math.sin(radians);                              //Math.sin() takes radian value.
    document.getElementById("input").value = result;
}

function cos() {
    let inputValue = document.getElementById("input").value;
    const radians = inputValue * Math.PI / 180
    const result = Math.cos(radians);
    document.getElementById("input").value = result;
}

function tan() {
    let inputValue = document.getElementById("input").value;
    const radians = inputValue * Math.PI / 180
    const result = Math.tan(radians);
    document.getElementById("input").value = result;
}

function log() {
    let inputValue = document.getElementById("input").value;
    const result = Math.log10(inputValue);
    document.getElementById("input").value = result;
}