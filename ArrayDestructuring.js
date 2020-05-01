var userArray = [10, 20, 30, 40, 50]

var [userFirstInfo, userSecondInfo, ...userOtherDetails] = userArray;

console.log(userFirstInfo)

console.log(userSecondInfo)

console.log(userOtherDetails)