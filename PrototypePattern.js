function Employee(name, age) {
    var name = name;
    var age = age;
    var designation = "Developer";
    return {
        name: name,
        age: age,
        designation: designation
    }
}


function Person(name) {
    var name = name;
    return {
        name: name
    }
}

function getName() {
    console.log(this.name);
}
-
function getDesignation() {
    console.log(this.designation);
}

// 6000 + 4

var employeeOne = Employee("Mayank", 10)
getName.call(employeeOne)

var employeeTwo = Employee("Prasad", 10)
getName.call(employeeTwo)

var Mayank = Person("Mayank Gupta");
getName.call(Mayank)

debugger;