  // excersice 1

// var userFirstName = prompt("What is you First name?");
// var userLasttName = prompt("What is you Lastt name?");
// var age = prompt("What is your age?");

// alert("My name is "+ userFirstName + userLasttName);
// console.log("My name is "+ userFirstName + userLasttName);
// console.log("My age is " + age);


    //excersice 2

// var yearAge = prompt("What is your Age?");

// var days = yearAge*365;

// console.log(`You'r living ${days} days in this world!` );
// alert(`Iam living ${yearAge} days`);


   //excesise 3

// var x = 10;
// var y = "a";

// console.log(y === "b" || x >= 10);
// alert(y === "b" || x >= 10);

  //excesise 4

// var x = 3;
// var y = 8;

// !(x == "3" || x === y) && !(y != 8 && x <= y)

// console.log(!(x == "3" || x === y) && !(y != 8 && x <= y))

  //excesise 5

// var str = "";
// var msg = "haha!";
// var isFunny = "false";
// console.log(!((str || msg) && isFunny)  )

   //excesise 6

//    var age = prompt("What is your age")

// if (age < 21){
//     console.log("Sorry.You are not age 21");
// }
// else if(age == 21 ){
//     console.log("Happy 21st birthday")
// }

// else{console.log("age more than 21")}

// var reminder = age % 2;

// if(reminder == 0){
//     console.log("this is not odd number, This is even Number")
// }

// else{
//     console.log("this is odd number")
// }


// var square = Math.sqrt(age);

// var perfectSquare = Number.isInteger(square);

// if(perfectSquare){
// console.log("This is perfect square")
// }

// else{
//     console.log("This is not a perfect square")
// }


  //excersise 8

// var guessNumber = prompt("Can you guess the number in my mind ?. I give three chance.");  

// if(guessNumber == 6){
//     alert("Congratulations!! You know my mind.")
// }

// else if(guessNumber < 6 ){
//     alert("You type lessthan my number") ;

// }

// else{
//     alert("You type more than my number")
// }


  //excersise 9

// var str = "rishwanth";
// var count = 0;
// while(count < str.length){
//     console.log(str[count]);
//     count++;
// }

     //excersise 10
// var num = 1;
// while (num <= 10) {
//     console.log(num);
//     num += 2;
// }

     //excersise 11

// var num = 1;

// while (num <= 20) {
//     if (num % 4 === 0) {
//         console.log(num);
//     }
//     num++;
// }

  //excersise 12

// var num = 100;
// while (num < 150) {
//   console.log(num + 1);
//   num--;
// }  


  //excersise 13  print all the numbers  btw -10 and 19  (while loop and for loop))

// var num = -10;

// while (num <= 19) {
//   console.log(num);
//   num++;
// }

// for (var i = -10; i <= 19; i++){
//   console.log(i);
// }

// ex 14 print all even numbers btw 10 and 40(while loop and for loop))

// var numbers = 10;

// while (numbers <= 40) {
//   if (numbers % 2 === 0) {
//     console.log(numbers);
//   }
//   numbers++;
// }

// for(i = 10; i < 40; i++){
//   if (i % 2 === 0) {
//     console.log(i)
//   }
// }

//ex 13 print all odd numbers btw 300 and 333  (while loop and for loop))

// var number = 300;

// while (number <= 333) {
//   if (number % 2 !== 0) {
//     console.log(number);
//   }
//   number++;
// }


// for(i = 300; i < 333; i+=2){
// console.log(i+1)
// }
   // other for method
// for(i = 300; i < 333; i++){
//   if (i % 2 !== 0) {
//     console.log(i)
//   }
// }

  //ex 14 print all numbers divisible by 5 And 3  btw 5 and 50  (while and for loop)

// var numbs = 5;

// while (numbs <= 50) {
//   if (numbs % 5 ===0 && numbs % 3 ===0) {
//     console.log(numbs);
//   }
//   numbs++;
// }
//  // for loop

// for(i = 50; i <= 50; i++){
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log(i)
//   }
// }

//ex 15 
// ask user are we there and they click yes or yeah until it will popup again and again

// var annoy =prompt("are we there?");


// while (annoy.indexOf("yeah") === -1 && annoy.indexOf("yes") === -1) {
//   var annoy = prompt("are we there?");
// }

// alert("yes you did it");

    // this is in for loop

// for(i = prompt("are you there?"); i.indexOf("yeah") === -1 && i.indexOf("yes") === -1;){
//   var i = prompt("are you there?");
// }
// alert("yes you did it")

  //ex 16  same condition in for and while loop

// for (var i = 0; i < 16; i+=8) {
//   console.log(i);
// }

// var num = 0;
// while (num < 16) {
//   console.log(num);
//   num+=8;
// }

  //ex 17  same condition in for and while loop

// var str = "ahceclwlxo";

// for (var i = 1; i < str.length; i+=2) {
//   console.log(str[i]);
// }


// var string = "ahceclwlxo";
// var count = 1;

// while (count < string.length) {
//   console.log(string[count]);
//   count+=2;
// }

  //ex 18  Functions
// var str= "rishwanth"

// function construct() {
//   console.log(str.length);
// }


   // ex 19  todo app creation

// var input = prompt("what whould you like to do?");

// var array = [];

// while (input !== "quit") {

//  if (input === "add") {
//   addItem();  
// }  
// else if(input === "list"){
//   listItems();
// }
// else if(input === "delete"){
//   deleteList();
// }
// var input = prompt("what whould you like to do?");
// }
// console.log("quit this execution!");

// function deleteList() {
//   var deleteTodo = prompt("delete somthing?");
//   array.splice(deleteTodo,1)
//   console.log("Delted item from array list:" + listItems());
// }

// function addItem(){
//   var newTodo = prompt("add somthing?");
//   var arrayList = array.push(newTodo);
//   console.log("New item added!" + arrayList) ; 
// }

// function listItems() {
//   array.forEach(element => console.log("Added Item :" + element))
// }


//Problem solving excersise

// 1. Print all even numbers from 0 – 10

// for(i = 0 ;i<=num;i+=2){
//   console.log(num)
// }

//2. Print a table containing multiplication tables

// for(i=1;i<=10;i++){
//   var table = i*12;
//   console.log(table);
// }

//3. Create a length converter function  Km to Miles

// var x = prompt("Enter Your Km. I will tell the miles.")

// function kms(km){
//   console.log("Miles = " + km*0.62137);
// }
// kms(x);

//4. Calculate the sum of numbers within an array


//5. know about your friend

// var friendName = prompt("Do you know Rishwanth?");
// var sum = 0;

// while(friendName !== "no"){
// if(friendName === "yes"){
//   console.log("Nice.!");
//   var array = [];
//   age();
//   food();
//   girl();
//   place();
//   sumArray();
// }
// else{console.log("Hoo! Thank you!")}
// var friendName = prompt("Do you know Mr. Rishwanth ?");
// }
// console.log("Thank you! You dont Know Rishwanth.")


  // // if(friendName === "yes"){
  // //   console.log("Nice.!");
  // //   var array = [];
  // //   age();
  // //   food();
  // //   girl();
  // //   place();
  // //   sumArray();
  // // }
  // // else if (friendName !== 'yes'){
  // //   console.log("Thank you! You dont Know Rishwanth.")}



// function age() {
  
//   var age = prompt("What is Rishwanth Age?");
//   if(age === "23" ){
//     console.log("yes you are write.");
//     var point = array.push(1);
//   }
//   else{console.log("sorry this is wrong .")}
// }

// function food() {
//   var food = prompt("What is Rishwanth favrite food?");
//   if(food === "biryani"){
//     console.log("yes you are write.");
//     var point = array.push(1);
//   }
//   else{console.log("sorry this is wrong .")}
// }

// function girl() {
//   var girl = prompt("Who is Rishwanth favrite girl?");
//   if(girl === "shiny" || girl === "amma"){
//     console.log("yes you are write.");
//     var point = array.push(1);
//   }
//   else{console.log("sorry this is wrong .")}
// }
// function place() {
//   var place = prompt("Where is Rishwanth's Home?");
//   if(place === "redhills"){
//     console.log("yes you are write.");
//     var point = array.push(1);
//   }
//   else{console.log("sorry this is wrong .")}
// }

// function sumArray(){
//   array.forEach(x => {
//     sum += x})
//         console.log("added sum is " + sum);
// }




// Objects Quize ex 1

// var someObject = {};

//// which of the following are valid

// someObject._name = "Hedwig";
// someObject.age = 6;

// var prop = "color";
// someObject[prop] ="red";

// someObject.123 = true;

// var someObject = {
//   friends : {
//             name : "Malfoy",
//             name : "Jeshwanth",
//             name : "Rishwanth"
//             },
//               color:"red",
//               isEvil : true
//                 };


  // var someObj = [
  //                 {movieName : "titanic",rating:5,watched : false},
  //                 {movieName : "cobra",rating:4.5,watched : true},
  //                 {movieName : "Harry Potter",rating:5,watched : false}
  //               ]
  //               function names(movie) {
  //                 let result = "You have "
  //                   if(movie.watched){
  //                       result += "watched this movie"
  //                   }
  //                   else{result += "not watched this movie"}
  //                   result += " - "+ movie.movieName;
  //                   result += " - "+ movie.rating
  //                   console.log(result);
  //               }
  // someObj.forEach(names);

            // kebab to snake change
  // var dateOfBirth = prompt("What is you date of birth?");
  // var luckyNumber = prompt("Enter Your Lucky Number");

  // function kebabToSnake(str) {
  //   //replace all dashes with
  //   var myString = str.replace(/\//g, "_");
  //   //return str
  //   return myString;
  //   //try with: "this - is -a - ---test";
  // }




  // var dateOfBirth = prompt("What is you date of birth?");
  // var luckyNumber = prompt("Enter Your Lucky Number");
  // var sum = 0;
  // function kebabToSnake(str) {
  //     //replace all dashes with
  //     var myString = str.replace(/\//g, "");
  //     //return str
  //     var valueNum = myString;
      
  //     for(i=0;i<=valueNum.length;i++){
  //         sum += Number(valueNum.charAt(i));
  //     }
      
  //    console.log(sum)
  //     //try with: "this - is -a - ---test";
  // }
  // kebabToSnake(dateOfBirth)
  
  // var nums = sum%luckyNumber;
  // if(nums === 0){
  //     console.log("you are lucky")
  // }
  // else{console.log("you are not lucky")}




