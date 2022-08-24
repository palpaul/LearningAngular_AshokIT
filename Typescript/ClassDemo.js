var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getStuGrade = function () {
        if (this.stuMarks > 75) {
            return "Grade A";
        }
        else if (this.stuMarks < 75 && this.stuMarks > 60) {
            return "Grade B";
        }
        else
            return "Grade C";
    }; // method closed
    return Student;
}()); //class end
//now need to create an object of the class using new keyword and outside of the class
var obj = new Student(); // object creation
obj.stuName = "JOhn Rambo";
obj.stuMarks = 94;
obj.stuRank = 3;
console.log(obj.stuName + " got the : " + obj.getStuGrade());
var obj2 = new Student(); // object creation
obj2.stuName = "Smith";
obj2.stuMarks = 74;
obj2.stuRank = 3;
console.log(obj2.stuName + " got  the : " + obj2.getStuGrade());
