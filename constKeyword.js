function WorkingWithConstants() {

    let age = 10;

    age = 20;

    console.log(age)
    
    const userDetailsOne = {
        name: "MAayank",
        age: 10
    }

    const userData = [10, 20, 30]
    userData.push(40)

    userData = [10,20, 30]

    userDetailsOne.name = "Anshul";
    userDetailsOne.age = userDetailsOne.age + 50;

    //userDetailsOne = {}

    console.log(userDetailsOne.name)
    console.log(userDetailsOne.age)
}

WorkingWithConstants();