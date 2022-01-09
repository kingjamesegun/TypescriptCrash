var numid = 5;
var company = "KingJames";
var isPublished = true;
var x = 'Hello';
var num = [1, 2, 3, 4, 4];
var arr = [1, 2, 3, "Hello"];
arr.push(false);
// Tuple
var person = [1, "James", true];
var employee;
employee = [
    [1, "James"],
    [2, "Imole"],
    [3, "Tolu"]
];
// Union
var pid = 22;
pid = "James";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
var user = {
    id: 1,
    name: "James"
};
// Type Assertion Asserting another type
var cid = 1;
var customerId = cid;
var customerRegistered = cid;
cid = false;
// customerId = true
customerRegistered = true;
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// Void
function log(message) {
    console.log(message);
}
log("Hello");
var user1 = {
    id: 1,
    name: "James"
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
// class
var Person = /** @class */ (function () {
    function Person() {
        // runs when the class is initiated outside
        console.log("Hello");
    }
    return Person;
}());
var brad = new Person();
