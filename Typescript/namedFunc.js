function welocme() {
    console.log("Hey welcome");
}
welocme();
function add(x, y) {
    return x + y;
}
var result = add(10, 20);
console.log(result);
//anonymous funcation doesnot have any name then hoew to call it
//it always declared using exprassion see below example
console.log("anonymous function example below");
var resultAnonymous = function (x, y) {
    return x + y;
};
console.log(resultAnonymous(10, 25));
//or we can do like this also
var finalresult = resultAnonymous(10, 50);
console.log(finalresult);
function greeting(name, msg) {
    return name + " " + msg;
}
var greetmsg = greeting("GoodMorning", "Rahul");
console.log(greetmsg);
//
console.log("Optional paramter in function example below");
// here making msg paramater as optional paramter
//and option paramter must be in the last of hte paramter okk
// using  question mark (?) with name paramter name ok "?"
function greetingOptional(name, msg) {
    return name + " " + msg;
}
/*here in this greetingOptional method its requiring 2 paramter but me make it msg paramater as option so its also work fine if we pass only required parameter ok
 */
var greetmsgOPtional = greetingOptional("GoodMorning");
console.log(greetmsgOPtional);
//default paramrer( defining hte vlaue itsself in mwthod argument ok )
console.log("default paramrer in funcation example below");
function greetingDefault(name, msg) {
    if (msg === void 0) { msg = "Hi"; }
    return name + " " + msg;
}
var greetDefault = greetingDefault("Rahul");
console.log(greetDefault);
console.log("variable arguments in funcation example below");
//defining variable argument  in methods by using ... with the  varialbe name ok
function varibleArguments(msg) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return msg + " " + names.join(","); //seperating name by comma seperatos ok
}
var varPersons = varibleArguments("GoodMorning", "Rahul", "Sheelu", "Shivam");
var varPersons2 = varibleArguments("GoodMorning", "Rahul", "Sheelu", "Shivam", "Krishna", "GOpal");
console.log(varPersons);
console.log(varPersons2);
