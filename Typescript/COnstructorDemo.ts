class User {
  userId: number;
  userName: String;
  //creting a constructor using constructor keyword itsself
  constructor(uId: number, uName: String) {
    this.userId = uId;
    this.userName = uName;
  }
}

let userObj = new User(101, "JohnRambo");
console.log("User Id : " + userObj.userId);
console.log("User Name: " + userObj.userName);
