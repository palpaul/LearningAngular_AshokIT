import { StudentData } from "./StudentData";
class School {
  Students: StudentData[] = [
    new StudentData(101, "JohnRambo"),
    new StudentData(102, "Nick"),
    new StudentData(103, "Smith"),
  ];

  display(): void {
    for (var i in this.Students) {
      console.log(this.Students[i]);
    }
  }
}
let scObj: School = new School(); // object creation of class
scObj.display();
