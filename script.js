var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nome"] = document.getElementById("nome").value;
    formData["cep"] = document.getElementById("cep").value;
    formData["salario"] = document.getElementById("salario").value;
    formData["cidade"] = document.getElementById("cidade").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nome;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.cep;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salario;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.cidade;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Excluir</a>`;
}

function resetForm() {
    document.getElementById("nome").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("salario").value = "";
    document.getElementById("cidade").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nome").value = selectedRow.cells[0].innerHTML;
    document.getElementById("cep").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salario").value = selectedRow.cells[2].innerHTML;
    document.getElementById("cidade").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nome;
    selectedRow.cells[1].innerHTML = formData.cep;
    selectedRow.cells[2].innerHTML = formData.salario;
    selectedRow.cells[3].innerHTML = formData.cidade;
}

function onDelete(td) {
    if (confirm('Você tem certeza que deseja excluir este registro?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nome").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}