console.log('js');

$(document).ready(readyNow);

function readyNow() {
    console.log('jq')
    $('.submitButton').on('click', addEmp);
    $('#totalLine').html('<div id="totalLine">Monthly Total: $0 </div>')
    $('#tableActual').on('click', '.deleteButton',  removeEmp);
} // end readyNow

employees = [];

class Employee {
    constructor(firstName, lastName, ID, title, empSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.ID = ID;
        this.title = title;
        this.empSalary = empSalary;
    }
} // end Employee

let monthlyTotal = 0;

function removeEmp(){
    console.log('in removeEmp');
    $(this).closest('tr').remove();  
    return true;
}

function addEmp() {
    let fName = $('#firstNameInput').val();
    let lName = $('#lastNameInput').val();
    let iD = $('#idInput').val();
    let title = $('#empTitleInput').val();
    let salary = parseInt($('#salaryInput').val());
    newEmp(fName, lName, iD, title, salary);
} // end addEmp

function newEmp(fName, lName, iD, title, salary) {
    employees.push(new Employee(fName, lName, iD, title, salary));
    updateEmpTable();
    updateTotal();
} // end newEmp

function updateEmpTable() {
    $('#tableActual').empty();
    for (let employee of employees) {

        $('#tableActual').append('<tr><td>'
            + employee.firstName + '</td><td>'
            + employee.lastName + '</td><td>'
            + employee.ID + '</td><td>'
            + employee.title + '</td><td>'
            + employee.empSalary + '</td><td>'
            +'<button class="deleteButton">Delete</button></td></tr>');
    }
} // end updateEmpTable

function updateTotal() {
    monthlyTotal += parseInt($('#salaryInput').val());
    $('#totalLine').html('<div id="totalLine">Monthly Total: $' + monthlyTotal + '</div>');
    overCap();
} // end updateTotal

function overCap() {
    if (monthlyTotal > 20000) {
        $('#totalLine').css("color", "red");
    }
}