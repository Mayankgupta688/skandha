function CustomCalculator() {
    var initialValue = 0

    function addFunction(value) {
        initialValue = initialValue + value;
        console.log(initialValue);
    }

    function divideFunction(value) {
        initialValue = initialValue / value;
        console.log(initialValue);
    }

    function multipleFunction(value) {
        initialValue = initialValue * value;
        console.log(initialValue);
    }

    return [addFunction, divideFunction, multipleFunction]
}

var Calculator = CustomCalculator()

Calculator[0](10)
Calculator[0](10)
Calculator[0](10)
Calculator[2](10)
Calculator[1](10)