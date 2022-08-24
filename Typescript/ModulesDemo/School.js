"use strict";
exports.__esModule = true;
var StudentData_1 = require("./StudentData");
var School = /** @class */ (function () {
    function School() {
        this.Students = [
            new StudentData_1.StudentData(101, "JohnRambo"),
            new StudentData_1.StudentData(102, "Nick"),
            new StudentData_1.StudentData(103, "Smith"),
        ];
    }
    School.prototype.display = function () {
        for (var i in this.Students) {
            console.log(this.Students[i]);
        }
    };
    return School;
}());
var scObj = new School();
scObj.display();
