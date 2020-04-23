// Immediately Invoked Function Expression


var returnedData = (function() {
    console.log("Hello")

    var a = "data"

    function returnFunction() {
        console.log(a)
    }

    return returnFunction
})()

returnedData();





