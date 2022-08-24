interface userInterface {
  //abstract method
  getData(empName: String): String;
}
class demoData implements userInterface {
  getData(empName: String): String {
    empName = "Rahul";
    return "Hey";
  }
}

let dataObj = new demoData(); // obj creation
dataObj.getData("Rahul");
console.log(dataObj.getData("Hello"));
