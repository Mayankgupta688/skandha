var userDetails = (function Employee() {
    var name = "MAyank";
    var age = 10;
    var designation = "Developer"
    var salary = 18;
    var bonus = 1;

    function getSalary() {
        return salary;
    }

    function bonusEligible() {
        if((getSalary() + bonus) > 10) {
            return true;
        }
        return false;
    }

    return {
        name: name,
        age: age,
        designation: designation,
        bonusEligible: bonusEligible
    }
}())