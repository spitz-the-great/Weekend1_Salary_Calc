console.log('js');

$( document ).ready(readyNow);

function readyNow(){
    console.log('jq')
}

class Employee{
    constructor(firstName, lastName, ID, title, empSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.ID = ID;
        this.title = title;
        this.empSalary = empSalary;
    }
}