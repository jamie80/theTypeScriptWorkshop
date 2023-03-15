var daysInWeek = 7;
var name1 = "Ada Lovelace";
var isRaining = false;
var today = new Date();
var months = ["Styczeń", "Luty", "Marzec"];
var notDefined = undefined;
var nothing = null;
var add = function (x, y) { return x + y; };
var calculator = {
    add: add
};
var everything = [
    daysInWeek,
    name1,
    isRaining,
    today,
    months,
    notDefined,
    nothing,
    add,
    calculator,
];
for (var _i = 0, everything_1 = everything; _i < everything_1.length; _i++) {
    var sth = everything_1[_i];
    var type = typeof sth;
    console.log(sth, type);
}
