console.log('js');

$(document).ready(readyNow);

function readyNow() {
    console.log('jq')
    $('.submitButton').on('click', addEmp);
    $('#totalLine').html('<div id="totalLine">Monthly Total: $0 </div>')
    $('#tableActual').on('click', '.deleteButton', removeEmp);
} // end readyNow


employees = [];
let monthlyTotal = 0;
let arrayIndex = 0;
let salaryToRemove = 0;
// end global vars


class Employee {
    constructor(firstName, lastName, ID, title, empSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.ID = ID;
        this.title = title;
        this.empSalary = empSalary;
    }
} // end Employee


function removeEmp() {
    console.log('in removeEmp');
    idTag = $(this).attr('id');
    $(this).closest('tr').empty();
    $(this).closest('tr').remove();
    salaryById(idTag, employees);
    removeById(idTag, employees);
    console.log(idTag);
    
    return true;
}

function salaryById(ID, array){
    for( i = 0; i < array.length; i++){
        if( array[i].ID == ID){
            salaryToRemove = array[i].empSalary;
        }
    }

    monthlyTotal -= salaryToRemove;
    $('#totalLine').html('<div id="totalLine">Monthly Total: $' + monthlyTotal + '</div>');
}


function removeById(ID, array){
    console.log('in removeById');
    for ( i = 0; i< array.length; i++){
        if( array[i].ID == ID){
            array.splice(i,1);
        }
    } // takes the employee.ID, finds the index of the object in the array and removes the object
} // end removeById

function dupSearch(ID, array) {
    for (i = 0; i < array.length; i++) {
        if (array[i].ID == ID) {
            return true;
        }
        else return false;
    } // takes the employee.ID entered in the input and searches array for duplicate
} // end dupSearch


function addEmp() {
    let fName = $('#firstNameInput').val();
    let lName = $('#lastNameInput').val();
    let iD = $('#idInput').val();
    let title = $('#empTitleInput').val();
    let salary = parseInt($('#salaryInput').val());
    if (dupSearch(iD, employees) === true) {
        alert("Duplicate ID");
    }
    else {
        newEmp(fName, lName, iD, title, salary);
    }
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
            + '<button id="' + employee.ID + '" class="deleteButton">Delete</button></td></tr>');


    }
    console.log(employees[employees.length - 1]);
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