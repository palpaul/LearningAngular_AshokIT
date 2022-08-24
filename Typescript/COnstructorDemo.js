var User = /** @class */ (function () {
    //creting a constructor using constructor keyword itsself
    function User(uId, uName) {
        this.userId = uId;
        this.userName = uName;
    }
    return User;
}());
var userObj = new User(101, "JohnRambo");
console.log("User Id : " + userObj.userId);
console.log("User Name: " + userObj.userName);
