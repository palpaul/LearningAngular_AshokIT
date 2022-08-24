var demoData = /** @class */ (function () {
    function demoData() {
    }
    demoData.prototype.getData = function (empName) {
        empName = "Rahul";
        return "Hey";
    };
    return demoData;
}());
var dataObj = new demoData(); // obj creation
dataObj.getData("Rahul");
console.log(dataObj.getData("Hello"));
