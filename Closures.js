name = "Anshul"
age = 20

function outerFunction() {
    var name = "Mayank";
    var age = 10;

    function innerFunction() {
       console.log(otherName);
       console.log(age)

       console.log(window.name)
       console.log(window.age)
    }

    function innerFunctionOther() {
       var otherName = "20";
    }

    innerFunction();
}

outerFunction();