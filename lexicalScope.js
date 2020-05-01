

salutationData = "Hi...";

lexicalScoping()

function lexicalScoping() {

    var salutationData = "Sample";

    console.log("Outer: " + salutationData)

    function innerFunction() {

        var salutationData = "Inner Data";

        console.log("Inner: " + salutationData)

        function deepinnerFunction() {
            console.log("Deep Inner: " + salutationData)
        }

        deepinnerFunction();
    }

    innerFunction()

    console.log("Outer: " + salutationData)
}

console.log(salutationData);

var salutationData;
