var userDetails = {
    name: "Mayank",
    age: 20, 
    designation: "Trainer", 
    salary: 1000,
    bonus: 20,
}

var obj = {
    name: "vineet",
    abc: 10
}

var blankObject = {}

for(prop in userDetails) {
    blankObject[prop] = userDetails[prop]

    if(prop == "bonus") {
        blankObject[prop] = 1000;
    }
}

var anotherBlank = {
    ...userDetails,
    ...obj
}