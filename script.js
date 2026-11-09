// ==========================
// Part 1: Date Display
// ==========================
// TODO:
// 1. Create a Date object
var currentDate = new Date();
// 2. Get the current month, day, and year
var month = String(currentDate.getMonth() + 1).padStart(2, "0");
var day = String(currentDate.getDay() + 1).padStart(2, "0");
var year = String(currentDate.getFullYear() + 1).padStart(4, "0");
// 3. Adjust month if needed (JavaScript months are 0-based) DONE
// 4. Add leading zeros to month/day if needed
// 5. Create a string in the format: "Today is MM/DD/YYYY"
var dateOutput = "Today is " + month + "/" + day + "/" + year;
// 6. Display the result in the element with id="dateOutput"
document.getElementById("dateOutput").textContent = dateOutput;

// ==========================
// Part 2: Number Conversion
// ==========================
// TODO:
// 1. Create at least 4 separate variables:
// - at least 2 numeric strings (example: "42")
// - at least 1 decimal string (example: "19.75")
// - at least 1 non-numeric string (example: "hello")
var num1 = "42";
var num2 = "24";
var decimal = "19.75";
var nonnum = "How is going";
// TODO:
// 2. For EACH variable:
var values = [num1, num2, decimal, nonnum];
var numberResults = "";
for (var i = 0; i < values.length; i++) {
    var original = values[i];
    var converted = Number(original);
    var isNaN = Number.isNaN(converted);
    var isInt = Number.isInteger(converted);

    numberConversionOutput += "original: " + original +
        "converted: " + converted +
        "isNaN: " + isNaN +
        "isInt: " + isInt +
        "<br>";
}
document.getElementById("numberConversionOutput").textContent = dateOutput;

//
// a. Convert the value using Number()
// b. Check if it is NaN using Number.isNaN()
// c. Check if it is an integer using Number.isInteger()
// TODO:
// 3. For EACH value, create a sentence showing:
// - original value
// - converted value
// - whether it is NaN
// - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"
// TODO:
// 4. Combine all your results into ONE string
// (you can use + to join multiple strings)
// TODO:
// 5. Display the final result inside the element:
// id="numberConversionOutput"
// ==========================
// Part 3: Math & Formatting
// ==========================
// TODO:
var mathResults = "";
var num3 = 25;
var num4 = 8.9;

var additionResult = num3 + num4;
var divisionResult = num4 / num3;
var fixedDecimal = divisionResult.toFixed(2);

mathOutput += "additionResult: " + additionResult +
    "divisionResult: " + divisionResult +
    "fixedDecimal: " + fixedDecimal +
    "<br>";

document.getElementById("mathOutput").textContent = mathOutput;

// 1. Create at least 2-3 numeric variables
//
// 2. Perform calculations:
// - at least one addition
// - at least one other operation (subtract, multiply, or divide)
//
// 3. Use at least ONE of the following:
// - toFixed()
// - toLocaleString()
// - Number.parseInt()
// - Number.parseFloat()
//
// 4. Build a string showing your results
//
// 5. Display the results inside the element with id="mathOutput"
// ==========================
// Part 4: Conditionals
// ==========================
// TODO:
var conditionMessage = "";
if (Number.isNaN("abc")) {
    conditionMessage += "Input is not a number <br>";
}
else {
    conditionMessage += "Input is a number <br>";
}

if (Number.isInteger(4)) {
    conditionMessage += "Input is a integer <br>";
}
else {
    conditionMessage += "Input is not an integer <br>";
}

document.getElementById("conditionMessage").textContent = conditionMessage;

// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
// (append it to an existing section or create a new message)