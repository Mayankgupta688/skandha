var name = "Mayank"

function invokeData() {
    console.log(this.length)
}

var userInfo = {
    length: 10,
    name: "Anshul",
    getData: function() {
        console.log(this.name)
    }
}

var userInfoOther = {
    length: 20,
    name: "Ankit"
}

userInfo.getData.call(userInfoOther)

invokeData()

invokeData.call(userInfo);

invokeData.call(window);

invokeData.call(userInfoOther);