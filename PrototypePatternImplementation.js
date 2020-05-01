
function Employee(name, age, salary=1000) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype.getName = function() {
    console.log(this.name)
}

debugger;
Employee.prototype.bonus = 30;

var employeeOne = new Employee("Mayank", 20)
employeeOne.getName()

employeeOne.__proto__.bonus = 2000;

var employeeTwo = new Employee("Prasad", 20)
employeeTwo.getName()

console.log("Bonus: " + employeeTwo.bonus)

// New Keyword:

//  1. Creates New Memory Address
//  2. Points that memory address by variable
//  3. During Execution, in the memory space adds properties...
//  4. Copy Prototype into __proto__



function abc() {

}

console.log("wrugef")