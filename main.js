var meds = [];

function addMed() {
    event.preventDefault();
    let newMed = {
        "medName": document.getElementById("fname").value,
        "medQtd": document.getElementById("fqtd").value,
        "medClass": document.getElementById("fclass").value,
    }
    resetForm();
    window.location.href = `submit.html?medName=${newMed.medName}&medQtd=${newMed.medQtd}&medClass=${newMed.medClass}`;

}

function getMed() {
    let params = (new URL(document.location)).searchParams;
    let medName = params.get('medName'); 
    let medQtd = params.get('medQtd'); 
    let medClass = params.get('medClass'); 

    document.getElementById("info").innerHTML =
    ` <h2>${medName}</h2> 
    <h2>${medQtd}</h2> 
    <h2>${medClass}</h2> 
`
}

function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("fqtd").value = "";
    document.getElementById("fclass").value = "";
}

getMed();