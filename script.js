
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith'; 
var age = 28; 

var fullName = firstName + ' ' + lastName;

var fullAge = true;

console.log(fullAge);

var job;
console.log(job);

job = 'developer';
console.log(job);

//variable naming rules
var _3 = 3;
var johnMark = 'John and Mark';



/**************************
Variable mutation and type coercion
*/

var firstName = 'John';
var age = 28; 

console.log(firstName + ' ' + age);

var job, isMarried; 
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation

age = 'twenty eight';
job = 'driver'; 

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');

console.log(firstName + ' ' + lastName);



var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//math operators
yearJohn = now -ageJohn; 
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(x);


/************************
* Operator Precedence
*/

var now = 2018; 
var yearJohn = 1989; 
var fullAge = 18; 

var isFullAge = now - yearJohn >= fullAge; //true

console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35; 
var average = (ageJohn + ageMark) / 2;
console.log(average);

//multiple assignments
var x, y;

x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 - 6 //26
console.log(x, y);

// 2 + 4 + 5 left to right
// assignment operator works from right to left

// More operators
//assignment operators
x *= 2; 
console.log(x);
x += 10;
console.log(x);

//increments
x ++; 
console.log(x);

// 1. Storing Mark and John's mass in kg and height in meters. 
var mMass = 80; 
var mHeight = 1.80;
var jMass = 90;
var jHeight = 1.75;

//2. Calculate both their BMIs. 
//BMI = mass/(height * height)

var mBMI = mMass / (mHeight * mHeight);
var jBMI = jMass / (jHeight * jHeight);

// 3 Create a boolean variable about whether Mark has a higher BMI than John. 

var mBMI_jBMI = mBMI > jBMI;

// Print a string to the console containing the variable from step 3.

console.log('Is Marks BMI higher than Johns? ' + mBMI_jBMI);


/**********************************
* If / else statements
*/ 

var firstName = 'John';
var civilStatus = 'single'; 

if (civilStatus === 'married') {
	console.log(firstName + ' is married');
}
else {
	console.log(firstName + ' is single.')
}

var isMarried = true;

if (isMarried) {
	console.log(firstName + ' is married');
}
else {
	console.log(firstName + ' is single.')
}


/*********************************
* Boolean logic
*/

var firstName = "John";
var age = 20; 

if (age < 13) {
	console.log(firstName + " is a boy");
}
else if (age >= 13 && age < 20) {
	console.log(firstName + " is a teenager");
}
else if (age >= 20 && age < 30) {
	console.log(firstName + " is a young man");
}
else {
	console.log(firstName + " is a man");
}

/*********************************
* The ternary Operator and Switch Statements
*/

var firstName = "John";
var age = 16; 

age >= 18 ? console.log(firstName + " drinks beer.")
: console.log(firstName + " drinks juice.");

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18){
	var drink = "beer";
}
else {
	var drink = "juice";
}

// Swicth statement
var job = "instructor";

switch (job) {
	case "teacher":
	case "instructor":
		console.log(firstName + " teaches kids how to code.");
		break;
	case "driver":
		console.log(firstName + " drives an uber in London");
		break;
	case "designer":
		console.log(firstName + " designs beautiful websites.");
		break;
	default:
		console.log("John does something else.");
}

var firstName = "John";
var age = 20; 

if (age < 13) {
	console.log(firstName + " is a boy");
}
else if (age >= 13 && age < 20) {
	console.log(firstName + " is a teenager");
}
else if (age >= 20 && age < 30) {
	console.log(firstName + " is a young man");
}
else {
	console.log(firstName + " is a man");
}

var age = 38;

switch (true) {
	case age < 13:
		console.log(firstName + " is a boy");
		break;
	case age >=13 && age < 20:
		console.log(firstName + " is a teenager");
		break;
	case age >= 20 && age <30:
		console.log(firstName + " is a young man");
		break;
	default:
		console.log(firstName + " is a man");
}


/*********************************
* Truthy and falsy values
*/

/*********************************
* Coding challenge 2
*/
//1
var game1John = 189;
var game2John = 120;
var game3John = 103;
	
var game1Mike = 116;
var game2Mike = 94;
var game3Mike = 123;

var game1Mary = 180;
var game2Mary = 120;
var game3Mary = 200;

var johnAverage = (game1John + game2John + game3John)/3;
var mikeAverage = (game1Mike + game2Mike + game3Mike)/3;
var maryAverage = (game1Mary + game2Mary + game3Mary)/3;

//2

if (johnAverage > mikeAverage && johnAverage > maryAverage){
	console.log ("John's team is better, with an average score of " + johnAverage + " .");
}
else if (johnAverage < mikeAverage && mikeAverage > maryAverage) {
	console.log ("Mike's team is better, with an average score of " + mikeAverage + " .");
}
else if (maryAverage > johnAverage && maryAverage > mikeAverage){
	console.log("Mary's team is the best, with an average score of " + maryAverage);
}
else{
	console.log("Both teams are evenly matched.");
}



/******************************
*Functions
*/
//
function calculateAge(birthYear) {
	return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageJane = calculateAge(1948);
var ageMike = calculateAge(1969);

console.log(ageJohn);
console.log(ageJane);
console.log(ageMike);


function yearsUntilRetirement(year, firstName) {
	var age = calculateAge(year);
	var retirement = 65 - age;

		if (retirement > 0){
			console.log(firstName + " retires in " + retirement + " years");
		}
	else {
			console.log(firstName + " is already retired.");
	}

}

yearsUntilRetirement(1990, "Sukh");
yearsUntilRetirement(1993, "Tania");
yearsUntilRetirement(1948, "Mum");

// functions can call other functions


/****************************************
* Function statements and expressions
*/


function whatDoYouDo(job, firstName){
}

// Function expression
var whatDoYouDo = function(job, firstName) {
	switch(job) {
		case "teacher":
			return firstName + " teaches kids how to code";
		case "driver":
			return firstName + " drives an ubder in London.";
		case "designer":
			return firstName + " designs studios.";
		default:
			return firstName + " is currently looking.";
	}
};

console.log(whatDoYouDo("teacher", "Sukh"));
console.log(whatDoYouDo("designer", "Tania"));
console.log(whatDoYouDo("unemployed", "Mum"));

/****************************************
* Arrays
*/

// Initialise new array
var names = ["Sukh", "Emily", "Marlon"];
var years = new Array(1990, 1982, 2000);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[5] = "Mary";
names[names.length] = "Sangha";
console.log(names);

//different data types

var john = ["John", "Smith", 1990, "teacher", false];

john.push("blue");
john.unshift("Mr", "Andrew");

console.log(john);

john.pop();
john.pop();
john.pop();
john.shift();

console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf("designer") === -1 ? "John is not a designer" : "John is a designer";

console.log(isDesigner);


/******************************
* Coding Challenge 3
*/


function tipCalculator(bill){

	var percentage;
	if (bill < 50){
		percentage = .2;
	}
	else if (bill >= 50 && bill < 200){
		percentage = .15;
	}
	else {
		percentage = 0.1;
	}
	return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
			tipCalculator(bills[1]),
			tipCalculator(bills[2])];

var finalValues = [bills[0] + tips [0],
				  bills[1] + tips [1],
				  bills[2] + tips [2]];

console.log(tips, finalValues);

/********************************
* Objects and properties
*/

// Object literal
var john = {
	firstName: "John",
	secondName: "Andrews",
	age: 26,
	car: "Ford Fiesta",
	married: true,
	kids: 2
};

console.log(john.married);
console.log(john["secondName"]);
var x = "age";
console.log(john["age"]);

john.job = "policeman";
john.car = "Ferrari";

console.log(john.job);
console.log(john.car);

// new Object declaration
var jane = new Object();
jane.name = "Jane";
jane.birthYear = 1987;
jane["lastName"] = "Sangha";
console.log(jane);

/************************
* Objects and Methods
*/

var john = {
	firstName: "John",
	secondName: "Andrews",
	age: 26,
	car: "Ford Fiesta",
	married: true,
	kids: 2,
	birthYear: 1990,
	calcAge: function(){
		this.age = 2018 - this.birthYear;
	}
};

john.calcAge();
console.log(john);

/******************************
* Coding Challenge 4
*/

// 1 - Create an object with properties for both Mark and John, with their full name, mass and height. 

var Mark = {
	firstName: "Mark",
	lastName: "Smith",
	mass: 90,
	height: 1.88,
	calcBMI: function(){
		this.BMI = this.mass / (this.height * this.height);
		return this.BMI;
}
};

var John = {
	firstName: "John",
	lastName:  "Sanders",
	mass: 74,
	height: 1.79,
	calcBMI: function(){
		this.BMI = this.mass / (this.height * this.height);
		return this.BMI;
}
};

John.calcBMI();
Mark.calcBMI();
console.log(John.BMI, Mark.BMI);

/*************************
* Loops and Iteration
*/

for (var i = 1; i <= 20; i += 2){
	console.log(i);
}

var john = ["John", "Smith", 1990, "teacher", false];

//for loop
for (var i = 0; i < john.length; i++){
	console.log(john[i]);
}

//while loop
var i = 0;
while(i < john.length){
	console.log(john[i]);
	i++;
}

// continue and break statements

var john = ["John", "Smith", 1990, "teacher", false, "blue"];

for (var i = 0; i < john.length; i++){
	if (typeof john[i] !== "string") continue;
	console.log(john[i]);
}

for (var i = 0; i < john.length; i++){
	if (typeof john[i] !== "string") break;
	console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--){
	console.log(john[i]);
}

/*****************************
* Coding Challenge 4
*/


var john = {
	fullName: "John Smith",
	bills: [124, 48, 268, 180, 42],
	calcTip: function(){
		this.tips = [];
		this.finalValues = [];
		
		for (var i = 0; i < this.bills.length; i++)
		{
			// Determine percentage based on tipping rules
			var percentage;
			var bill = this.bills[i];
			
			if (bill < 50){
				percentage = 0.2;
			} else if (bill >= 50 && bill < 200){
				percentage = 0.15;
			} else {
				percentage = 0.1;
			}
			
			//Add results to the corresponding arrays
			this.tips[i] = bill * percentage;
			this.finalValues[i] = bill + bill * percentage;
		}
	}
};

john.calcTip();
console.log(john);


// Part Two

var mark = {
	fullName: "Mark Miller",
	bills: [77, 475, 110, 45],
	calcTip: function(){
		this.tips = [];
		this.finalValues = [];
		
		for (var i = 0; i < this.bills.length; i++)
		{
			// Determine percentage based on tipping rules
			var percentage;
			var bill = this.bills[i];
			
			if (bill < 100){
				percentage = 0.2;
			} else if (bill >= 100 && bill < 300){
				percentage = 0.1;
			} else {
				percentage = 0.25;
			}
			
			//Add results to the corresponding arrays
			this.tips[i] = bill * percentage;
			this.finalValues[i] = bill + bill * percentage;
		}
	}
};

// which family paid the highest tips on average
function calcAverage(tips) {
	var sum = 0;
	for (var i = 0; i < tips.length; i++){
		sum += tips[i];
	}
	return sum / tips.length;
}

// do all the calculations
mark.calcTip();
console.log(mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(mark, john);

if (john.average > mark.average){
	console.log(john.fullName + " John's family paid higher tips, with an average of " + john.average);
} else if (mark.average > john.average) {
	console.log(mark.fullName + " Mark's family paid higher tips, with an average of " + mark.average);
}
