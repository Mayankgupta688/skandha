function Employee(name, age) {
    var name = name
    var age = age
    var designation = "Developer"
    var salary = 18;
    var bonus = 1;

    function bonusEligible() {
        if((getSalary() + bonus) > 10) {
            return true;
        }
        return false;
    }

    function getSalary() {
        return salary;
    }
    
    return {
        name: name,
        age: age,
        designation: designation,
        bonusEligible: bonusEligible
    }
}

// --14000

// --10000



var emp1 = Employee("MAyank", 10);
//emp1.getSalary();

var emp2 = Employee("Prasad", 8)
//emp2.getSalary();

var emp1000 = Employee("Vinit", 9)
//emp1000.getSalary()

debugger;

function Employee1() {
    var data = Employee();
    return data;    
}

var userDetails = Employee();
userDetails.bonusEligible()

var data1 = Employee1()
