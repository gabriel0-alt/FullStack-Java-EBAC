    const form = document.getElementById("form");
    const resultado = document.getElementById("resultado")

    form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const numeroA = Number(document.getElementById('numeroA').value);
    const numeroB = Number(document.getElementById('numeroB').value);

    if (numeroA > numeroB) {
        resultado.textContent = "Número A é maior!";
        resultado.style.color = "red";

    } else if (numeroB > numeroA) {
        resultado.textContent = "Número B é maior!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Os números são iguais!";
        resultado.style.color = "orange";
    }
    });