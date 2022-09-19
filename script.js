  var enterSalary = document.querySelector("#yourSalary");
  var numberOfWorkingDays = document.querySelector("#numberOfDays");
  var enterLopHours = document.querySelector("#lopHours");
  var enterLeaveDays = document.querySelector("#leaveDays");
  var buttonClick = document.querySelector("#checkSalary");
  var outPut = document.querySelector("#output");


 function calculations(yourSalary,numberOfWorkingDay,lopHours,leaveDays){
 var oneDaySalary = yourSalary / numberOfWorkingDay ;
    var oneHourSalary = oneDaySalary/9;
    var totalLopAmount = oneHourSalary*lopHours;
    var totalLeaveDays = leaveDays*oneHourSalary*9;
    var addTotalLop = totalLopAmount + totalLeaveDays;
    var finalSalary = yourSalary-addTotalLop;
    // return finalSalary;
    //  console.log(finalSalary);
   outPut.value = finalSalary;

 }
  function clickFunction(){
       calculations(Number(enterSalary.value),Number(numberOfWorkingDays.value),Number(enterLopHours.value),Number(enterLeaveDays.value));
    // console.log(calcFunction);
    
  }

  buttonClick.addEventListener("click", clickFunction);
