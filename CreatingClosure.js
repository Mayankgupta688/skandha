function OuterFunction() {
    var name = "Mayank";

    function innerFunction() {
        var age = 20;
        console.log(name);
        innerFunctionTwo()
    }

    function innerFunctionTwo() {
        console.log("User Name: " + name)
    }

    return innerFunction;
}

var returnFunction = OuterFunction();

returnFunction();