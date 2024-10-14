// STRING METHODS


// Q1


// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;

// alert(`Hello ${fullName}!`);


// Q2


// var favouritePhone = prompt("Enter your favourite phone");
// console.log(`My favourite phone is: ${favouritePhone}`);
// console.log(`Length of string: ${favouritePhone.length}`);


// Q3


// var word = "Pakistani";
// var index = word.indexOf("n");
// console.log(`String: ${word}`);
// console.log(`Index of 'n': ${index}`);


// Q4


// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");
// console.log(`String: ${word}`);
// console.log(`Last index of 'l': ${lastIndex}`);



// Q5



// var word = "Pakistani";
// console.log(`String: ${word}`);
// console.log(`Chararter at index 3: ${word[3]}`);


// Q6


// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(" ", lastName);

// alert(`Hello ${fullName}!`);



// Q7


// var word = "Hyderabad";
// var newWord = word.replace("Hyder", "Islam");
// console.log(`City: ${word}`);
// console.log(`After replacement: ${newWord}`);



// Q8


// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var newMessage = message.replaceAll("and", "&");

// console.log(newMessage);



// Q9


// var stringNumber = "472";
// var number = parseInt(stringNumber);
// console.log(`Value: ${stringNumber}`);
// console.log(`Type: ${typeof stringNumber}`);
// console.log(`Value: ${number}`);
// console.log(`Type: ${typeof number}`);



// Q10



// var userInput = prompt("Enter any word");
// console.log(`User input: ${userInput}`);
// console.log(`Upper case: ${userInput.toUpperCase()}`);


// Q11


// var userInput = prompt("Enter a word");
// for (var i=0; i<userInput.length; i++){
// var titleCase = userInput[0].toUpperCase() + userInput[i].toLowerCase();
// }
// console.log(titleCase)



// Q12


// var num = 35.36;
// var stringNum = num.toString().replace(".", "");
// console.log(`Number: ${num}`);
// console.log(`Result: ${stringNum}`);


// Q13


// var userName = prompt("Enter username");
// var specialChar = ["@", ".", ",", "!"];
// for (var i=0; i<specialChar.length; i++){
//     if(userName.includes(specialChar[i])){
//         alert("Please enter a valid username.")
//     }
// }


// Q14




// function searchForItem(userInput) {
//     var A = ["cake", "apple pie", "cookie", "chips", "patties"];
//     userInput = userInput.toLowerCase();

//     for (var i = 0; i < A.length; i++) {
//         if (userInput === A[i]) {
//             alert(`${userInput} is available at index ${i} in our bakery`);
//             return;
//         }
//     }

//     alert(`We are sorry. ${userInput} is not available in our bakery`);
// }

// var userInput = prompt("Search by user input");
// searchForItem(userInput);


// Q15



// Q16



// var university = "University of Karachi";

// var university_array = university.split();

// console.log(university_array);



// Q17



// var userInput = prompt("Enter a string");
// var lastCharacter = userInput.charAt(userInput.length-1);
// console.log(`User input: ${userInput}`);
// console.log(`Last character of input: ${lastCharacter}`);



// Q18


// const text = "The quick brown fox jumps over the lazy dog";
// const wordToCount = "the";

// let count = 0;
// const words = text.split(" ");

// for (let i = 0; i < words.length; i++) {
//   if (words[i].toLowerCase() === wordToCount.toLowerCase()) {
//     count++;
//   }
// }


// console.log(text);
// console.log(`There are ${count} occurrence(s) of word '${wordToCount}'`)



// Chapter 21 (Changing Case)


// Q1


// var allLower = userInput.toLowerCase();


// Q2


// let x = "This IS A SAMPLE TEXT";
// x = x.toLowerCase();
// console.log(x);



// Q3


// let y = "this is a sample text";
// y = y.toUpperCase();
// console.log(y);


// Q4


// let originalString = "This IS A SAMPLE TEXT";
// let lowercaseString = originalString.toLowerCase();

// console.log(lowercaseString);


// Q5


// const myArray = ["This", "IS", "A", "SAMPLE", "TEXT"];

// const lowercaseElement = myArray[2].toLowerCase();

// console.log(lowercaseElement);


// Q6


// let originalString = "this is a sample text";
// let uppercaseString = originalString.toUpperCase();
// alert(uppercaseString);


// Q7


// var cityName = "kaRacHi";
// cityName = cityName.toLowerCase();
// cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
// console.log(cityName);



// Chapter 22 - 25 (Strings)



// Q1


// var sameWords = "captain";
// var sliceWord = sameWords.slice(1, 3);
// console.log(sliceWord);


// Q2


// let myString = "Hello, world!";
// let stringLength = myString.length;

// console.log(stringLength);


// Q3


// var animal = "elephant";
// var sliceWord = animal.slice(3, 7);
// console.log(sliceWord)


// Q4



// let myString = "Hello, world!";
// let stringLength = myString.length;

// console.log(stringLength);



// Q5


// let myString = "Hello, world!";
// let stringLength = myString.length;
// console.log("Number of characters:", stringLength);
// let slicedString = myString.slice(1, stringLength - 3);
// console.log("Sliced string:", slicedString);



// Q6



// The value of index will be 3


// Q7


// The value of index will be 16


// Q8


// let text = "Togo goes to Togo";
// let indx = text.lastIndexOf("go");

// console.log(indx);




// Q9



// if (indexNum >= 0 && indexNum < string.length) {
// }



// Q10



// let myString = "abcde";
// let charAtIndex2 = myString.charAt(2);
// console.log(charAtIndex2);


// Q11


// let text = "This is a sample text";
// let cha = text.charAt(10);

// console.log(cha);



// Q12



// let str = "Hello, world!";
// let x = str.charAt(str.length - 1);

// console.log(x);



// Q13



// let input = "Hello, world!";
// let cha = input.charAt(4);

// console.log(cha);



// MATH METHODS


// Q1



// var num = +prompt("Enter any positive integer");
// console.log(`Number: ${num}`);
// console.log(`Round off value: ${Math.round(num)}`)
// console.log(`Floor value: ${Math.floor(num)}`);
// console.log(`Ceil value: ${Math.ceil(num)}`);



// Q2



// var num = +prompt("Enter any negative integer");
// console.log(`Number: ${num}`);
// console.log(`Round off value: ${Math.round(num)}`)
// console.log(`Floor value: ${Math.floor(num)}`);
// console.log(`Ceil value: ${Math.ceil(num)}`);




// Q3



// function absoluteValue(number) {
//     if (number < 0) {
//       return -number;
//     } else {
//       return number;
//     }
//   }
  
//   // Get user input
//   let inputNumber = prompt("Enter a number:");
  
//   // Convert the input to a number
//   let number = parseFloat(inputNumber);
  
//   // Calculate the absolute value
//   let absoluteValueResult = absoluteValue(number);
  
//   // Display the result
//   console.log("The absolute value of " + number + " is " + absoluteValueResult);



// Q4



// console.log(`Random dice value: ${Math.round(Math.random()*6)}`);



// Q5



// function tossCoin() {
//     let randomNumber = Math.random();
//     if (randomNumber < 0.5) {
//       return "Heads";
//     } else {
//       return "Tails";
//     }
//   }

//   let result = tossCoin();
//   console.log("The result of the coin toss is: " + result);



// Q6



// console.log(`Random number between 1 and 100: ${Math.round(Math.random()*100)}`)



// Q7



// function parseWeight(input) {
//     // Remove non-numeric characters and convert to a number
//     let weight = parseFloat(input.replace(/[^0-9.]/g, ""));
  
//     // Check if the weight is valid
//     if (isNaN(weight) || weight <= 0) {
//       return null;
//     }
  
//     return weight;
//   }
  
//   // Get user input
//   let userInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
  
//   // Parse the user input
//   let weight = parseWeight(userInput);
  
//   // Display the result
//   if (weight) {
//     console.log("Your weight is: " + weight + " kilograms");
//   } else {
//     console.log("Invalid weight input.");
//   }



// Q8



// var userInput = +prompt("Enter a number between 1 and 10");

// var random = Math.round(Math.random()*10);


// if(userInput===random){
//     alert(`Congratulations! You won`)
// }else{
//     alert(`Try again!`)
// }



// Chapter 26 (Rounding Numbers)


// Q1


// const originalNumber = 3.14159;
// const roundedNumber = Math.round(originalNumber);


// Q2


// let origNum = 3.14159;
// let roundNum = Math.ceil(origNum);
// console.log(roundNum)



// Q3


// let origNum = 3.14159;
// let roundNum = Math.floor(origNum);



// Q4



// let originalNumber = 3.14159;
// let roundedNumber = Math.round(originalNumber);


// Q5



// let roundedNumber = Math.floor(0.5);




// Chapter 27 (Random Numbers)


// Q1


// let randomNumber = Math.round(Math.random() * 50);
// console.log(randomNumber);



// Q2


// let randomNumber = Math.random();



// Q3


// var randomNumber = Math.round(Math.random()*6);
// console.log(randomNumber);



// Q4


// var coinToss = Math.random() < 0.5 ? "Heads" : "Tails";
// console.log(`Coin toss result: ${coinToss}`)



// Chapter 28, 29 (Converting Strings)



// Q1

// let stringNumber = "123";
// let integerNumber = parseInt(stringNumber);
// console.log(integerNumber); 



// Q2



// function stringToInteger (stringNumber){
//     return parseInt(stringNumber);
// }

// var integerValue = stringToInteger("123");
// console.log(integerValue)


// Q3


// let stringNumber = "3.14159";
// let floatNumber = parseFloat(stringNumber);
// console.log(floatNumber);


// Q4



// let stringNumber = "123";
// let isNumber = !isNaN(parseFloat(stringNumber));

// console.log(isNumber);


// Q5


// let number = 123;
// let string = number.toString();
// console.log(string);



// Q6


// function numberToString(number){
//     return number.toString();
// }
// var stringValue = numberToString(42);
// console.log(stringValue)



// Q7


// let stringNumber = "3.14";
// let integerNumber = parseInt(stringNumber);
// console.log(integerNumber);



// Chapter 30 (Controlling the length of decimals)



// Q1


// var num = 123.456789;
// var newNum = num.toFixed(4).toString();
// console.log(newNum)



// Q2



// var num = 123.456789;
// num = Number(num.toFixed(2).toString());
// console.log(num);


// Q3


// if (num.toFixed(2).toString().length > 4) {}


// Q4


// var num = 123.456789;
// alert(num.toFixed(2).toString());



// DATE METHODS


// Q1


// var date = new Date();
// document.write(date)



// Q2



// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var date = new Date();
// var currentMonth = months[date.getMonth()];
// alert(`Current month: ${currentMonth}`)



// Q3



// var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var date = new Date();
// var currentDay = daysOfWeek[date.getDay()];
// alert(`Today is ${currentDay.slice(0, 3)}`)



// Q4



// var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var date = new Date();
// var currentDay = daysOfWeek[date.getDay()];
// if(currentDay==="Saturday" || currentDay==="Sunday"){
//     alert("It's Fun Day!")
// }


// Q5


// var date = new Date();
// var currentDate = date.getDate();
// if(currentDate<16){
//     console.log("First fifteen days of the month")
// }else{
//     console.log("Last days of the month")
// }



// Q6



// var date = new Date();
// var minutesSinceMidnight1970 = date.getTime()/60000;
// document.write(`Current Date: ${date} <br>`)
// document.write(`Elapsed milliseconds since January 1, 1970: ${date.getTime()} <br>`)
// document.write(`Elapsed minutes since January 1, 1970: ${minutesSinceMidnight1970}`)



// Q7



// var date = new Date();
// var hours = date.getHours();
// if(hours<12){
//     alert("It's AM");
// } else {
//   alert("It's PM");
// }



// Q8



// const laterDate = new Date(2020, 11, 31);
// console.log("Later date:", laterDate)



// Q9



// var firstRamadan = new Date(2015, 5, 18);
// var date = new Date();
// var daysPassed = (date.getTime() - firstRamadan.getTime()) / (1000*60*60*24);
// alert(`${Math.floor(daysPassed)} days have passed since 1st Ramadan, 2015`)




// Q10



// var referenceDate = new Date(2015, 11, 5, 22,50,16);
// var beginningOf2015 = new Date(2015, 0, 1);
// var differenceInMilliseconds = referenceDate.getTime() - beginningOf2015.getTime();
// var secondsElapsed = differenceInMilliseconds /1000;
// document.write(`On reference date ${referenceDate}, ${secondsElapsed} seconds had passed since beginning of 2015`)



// Q11


// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// document.write(`Current date: ${currentDate} <br>`)
// currentDate.setHours(currentHours + 1);
// document.write(`1 hour ago, it was ${currentDate}`)



// Q12



// const currentDate = new Date();
// alert(`Current date: ${currentDate}`);
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert(`100 years back, it was ${currentDate }`)



// Q13



// var age = +prompt("Enter your age:");
// var date = new Date();
// var birthYear = date.getFullYear() - age;
// document.write(`Your age is ${age} <br>`);
// document.write(`Your birth year is ${birthYear}`)



// Q14


// var customerName = prompt("Enter your name:");
// const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
// var numberOfUnits = parseFloat(prompt("Enter the number of units consumed:"));
// var chargesPerUnit = parseFloat(prompt("Enter the charges per unit:"));
// var latePaymentSurcharge = parseFloat(prompt("Enter the late payment surcharge;"));

// var netAmountPayableWithinDueDate = numberOfUnits * chargesPerUnit;
// var grossAmountPayableAfterDueDate = netAmountPayableWithinDueDate + latePaymentSurcharge;

// var roundedNetAmountPayableWithinDueDate = parseFloat(netAmountPayableWithinDueDate).toFixed(2);
// var roundedGrossAmountPayableAfterDueDate = parseFloat(grossAmountPayableAfterDueDate).toFixed(2);

// document.write("<h1>K-Electric Bill</h1> <br><br>");
// document.write("Customer Name: ", customerName, "<br>");
// document.write("Month: ", currentMonth, "<br>");
// document.write("Number of Units: ", numberOfUnits, "<br>");
// document.write("Charges per Unit: ", chargesPerUnit, "<br> <br>");
// document.write("Net Amount Payable (within Due Date): ", netAmountPayableWithinDueDate, "<br>");
// document.write("Late Payment Surcharge: ", latePaymentSurcharge, "<br>");
// document.write("Gross Amount Payable (after Due Date): ", roundedGrossAmountPayableAfterDueDate);




// FUNCTION



// Q1



// function displayCurrentDateTime() {
//     var date = new Date();
//     document.write(date)
// }
// displayCurrentDateTime();



// Q2



// function greetUser(firstName, lastName){
//     console.log(`Hello ${firstName} ${lastName}!`)
// }
// greetUser(prompt("Enter you first name"), prompt("Enter your last name"))



// Q3



// function addNumbers(num1, num2){
//     var sum = num1 + num2;
//     return sum;
// }

// var result = addNumbers(parseFloat(prompt("Enter the first number:")), parseFloat(prompt("Enter the second number:")))
// console.log(`The sum of two numbers is ${result}`)


// Q4


// function computeOperation(num1, num2, operator) {
//     var result;

//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//             case '-':
//                 result = num1 - num2;
//                 break;
//                 case '*':
//                     result = num1 * num2;
//                     break;
//                     case '/':
//                         result = num1 / num2;
//                         break;
//                         case '%':
//                             result = num1 % num2;
//                             break;
//                             default:
//                                 return "Invalid operator";
//     }
//     return result;
// }

// var result = computeOperation(parseFloat(prompt("Enter the first number:")), parseFloat(prompt("Enter the second number:")), prompt("Enter the operator (+, -, *, /, %):"));

// document.write(`The result is ${result}`)



// Q5



// function square(num){
//     if(isNaN(num)){
//         alert("Please enter a valid number")
//     }else{
//         return num * num;
//     }
// }

// var result = square(+prompt("Enter a number to get its square value:"));
// console.log(result)


// Q6


// function factorial(n){
//     if(n<0){
//         return "Factorial of a negative number is not defined."
//     } else if(n===0){
//         return 1;
//     }else{
//         var result = 1;
//         for(var i=1; i<=n; i++){
//             result *= i;
//         }
//         return result;
//     }
// }

// var factorialResult = factorial(+prompt("Enter any number to get its factorial"))
// console.log(`Factorial is ${factorialResult}`)



// Q7



// function countNumbers(startNumber, endNumber){
//     if(startNumber>endNumber){
//         for (var i=startNumber; i>=endNumber; i--){
//             console.log(i);
//         }
//     }else{
//         for (var i=startNumber; i<=endNumber; i++){
//             console.log(i)
//         }
//     }
// }

// countNumbers(+prompt("Enter the start number:"), +prompt("Enter the end number:"))



// Q8



// function calculateHypotenuse(base, perpendicular){
//     function calculateSquare(num){
//         return num * num;
//     }
//     var baseSquared = calculateSquare(base);
//     var perpendicularSquared = calculateSquare(perpendicular);
//     var hypotenuseSquared = baseSquared + perpendicularSquared;
//     var hypotenuse = Math.sqrt(hypotenuseSquared);
//     return hypotenuse;
// }

// var hypotenuse = calculateHypotenuse(+prompt("Enter the base of the right-angled triangle:"), +prompt("Enter the perpendicular of the right-angled triangle:"));

// console.log(`The hypotenuse of the right-angled triangle is ${hypotenuse.toFixed(2)}`)



// Q9




// function calculateRectangleArea(width, height) {
//     return width * height;
//   }
  
//   const area1 = calculateRectangleArea(5, 10);
//   console.log("Area of rectangle 1:", area1);
  
//   const rectangleWidth = 8;
//   const rectangleHeight = 12;
//   const area2 = calculateRectangleArea(rectangleWidth, rectangleHeight);
//   console.log("Area of rectangle 2:", area2);



// Q10



// function checkPalindrome(word){
//     var finalWord = "";
//     for(var i=word.length-1; i>=0; i--){
//         finalWord += word[i];
//     }
//     if(finalWord===word){
//         return word + " is palindrome."
//     }else{
//         return word + " is not palindrome"
//     }
// }

// var finalWord = checkPalindrome(prompt("Enter any word:"))
// console.log(finalWord)



// Q11



// function capitalizeFirstLetterOfEachWord (str){
//     var words = str.split(" ");
//     const capitalizedWords = words.map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//       });
//       return capitalizedWords.join(" ");
// }

// var capitalizedString = capitalizeFirstLetterOfEachWord(prompt("Enter any sentence:"))
// console.log(capitalizedString)



// Q12



// function findLongestWord(str){
//     var words = str.split(" ");
//     var longestWord = "";
//     for (var word of words){
//         if(word.length > longestWord.length){
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }

// var longestWord = findLongestWord(prompt("Enter any word or sentence"));
// console.log(longestWord)



// Q13



// function countLetter (str, letter){
//     str = str.toLowerCase();
//     letter = letter.toLowerCase();

//     var count = 0;

//     for (var char of str){
//         if(char===letter){
//             count++;
//         }
//     }
//     return count;
// }

// var string = 'JSResourceS.com';
// var targetLetter = 'o';


// var count = countLetter(string, targetLetter);
// console.log(`The letter ${targetLetter} appears ${count} times in ${string}`)



// Q14



// function calcCircumference(radius){
//     var circumference = 2 * Math.PI * radius;
//     return circumference;
// }

// function calcArea(radius){
//     var area = Math.PI * radius * radius;
//     return area;
// }



// var circumference = calcCircumference(5);
// var area = calcArea(5);

// console.log(`The circumference is ${circumference.toFixed(2)}`)
// console.log(`The area is ${area.toFixed(2)}`)

