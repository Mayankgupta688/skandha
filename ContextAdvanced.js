var name = "Mayank"

var userInfo = {
    length: 10,
    name: "Anshul",
    getData: function() {
        
        var data = this;

        setTimeout(function() {
            console.log(this.name)
        }, 5000)
    }
}

var userInfoOther = {
    length: 20,
    name: "Ankit"
}

userInfo.getData.call(userInfoOther)