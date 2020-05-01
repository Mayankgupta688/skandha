var userData = [1, 2, 3, 4, 5, 6, 7];

function userDetails(a, b, c,e, ...d) {
    console.log(a);
    console.log(b)
    console.log(c)
    console.log(d)
}

userDetails(...userData, 3, 4)

var emptyArray = [...userData]

console.log(emptyArray === userData)

emptyArray[2] = 10

