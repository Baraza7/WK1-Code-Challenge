//1st attempt

//Challenge 3: Net Salary Calculator (Toy Problem)
/*Write a program whose major task is to calculate an individual’s 
Net Salary by getting the inputs of basic salary and benefits. 
Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, 
gross salary, and net salary. */


// //prompt employee to imput their basic salary and total benefits
// let basic = prompt("What is your basic salary")
// let benefits = prompt("What is your total benefits")


// let gross = grosspay;
// let net = netpay;
// let payee = calcpayee;
// let nhif= calnhif;
// let nssf = calnssf;




// // //calculate gross salary
// function grosspay(){
//   let calcgross = (basic + benefits);
//   return calcgross
//   console.log(calcgross);
// }

// //Calculating net salary
//   function netpay(){
//   let calcnet = (gross-nhif-nssf-payee);
//   return calcnet
// }


// //Calculating nssf
//   function calnssf(){
//   let totalnssf = gross * 0.6
//   return totalnssf
//   }

// //calculating payee
// function calcpayee(calcgross){
//  if (gross < 24000) {
//   payee = gross*0.1;
// } else if (gross >= 24001 && gross <= 32333 ) {
//   payee = gross*0.25;
// } else {
//   payee = gross*0.3;
// }
// return payee
// }


// //calculating nhif
// function calnhif(gross) {
// switch (true){
//   case (gross <= 5999):
//   return 150;
//   break;
//   case (gross >6000 && gross< 7999):
//   return 300;
//   break;
//   case (gross >8000 && gross< 11999):
//   return 400;
//   break;
//   case (gross >12000 && gross< 14900):
//   return 500;
//   break;
//   case (gross >15000 && gross< 19999):
//   return 600;
//   break;
//   case (gross >20000 && gross< 24999):
//   return 750;
//   break;
//   case (gross >25000 && gross< 29999):
//   return 850;
//   break;
//   case (gross >30000 && gross< 34999):
//   return 900;
//   break;
//   case (gross >35000 && gross< 39999):
//   return 950;
//   break;
//   case (gross >40000 && gross< 44999):
//   return 1000;
//   break;
//   case (gross >45000 && gross< 49999):
//   return 1100;
//   break;
//   case (gross >50000 && gross< 59999):
//   return 1200;
//   break;
//   case (gross >60000 && gross< 69999):
//   return 1300;
//   break;
//   case (gross >70000 && gross< 79999):
//   return 1400;
//   break;
//   case (gross >80000 && gross< 89999):
//   return 1500;
//   break;
//   case (gross >90000 && gross< 99999):
//   return 1600;
//   break;
//   case (gross > 1000):
//   return 1700;
//   break;

// }
// }

// //output gross pay and net pay
// document.write("Your Gross monthly salary is: " + gross)
// document.write("Your Net monthly salary is: " + net)




// second try
    

//prompt employee to imput their basic salary and total benefits
// let x = prompt("What is your basic salary", "0");
// let y = prompt("What is your total benefits", "0");
// let basic = parseInt(x);
// let benefits = parseint(y);

let basic = 500000;
let benefits = 6000;

// //calculate gross salary
function grosspay(){
  let calcgross = basic + benefits;
  return calcgross
}

console.log(grosspay);

//Calculating nssf
  function calnssf(){
  let totalnssf = grosspay() * 0.06
  return totalnssf
  }


//calculating payee
function calcpayee(){
 if (grosspay() < 24000) {
  return grosspay() *0.1;
} else if (grosspay() >= 24001 && grosspay() <= 32333 ) {
  return grosspay*0.25;
} else {
  return grosspay()*0.3;
}

}



//calculating nhif
function calnhif() {
switch (true){
  case (grosspay() <= 5999):
  return 150;
  break;
  case (grosspay() >6000 && grosspay()< 7999):
  return 300;
  break;
  case (grosspay() >8000 && grosspay()< 11999):
  return 400;
  break;
  case (grosspay() >12000 && grosspay()< 14900):
  return 500;
  break;
  case (grosspay() >15000 && grosspay()< 19999):
  return 600;
  break;
  case (grosspay() >20000 && grosspay()< 24999):
  return 750;
  break;
  case (grosspay() >25000 && grosspay()< 29999):
  return 850;
  break;
  case (grosspay() >30000 && grosspay()< 34999):
  return 900;
  break;
  case (grosspay() >35000 && grosspay()< 39999):
  return 950;
  break;
  case (grosspay() >40000 && grosspay()< 44999):
  return 1000;
  break;
  case (grosspay() >45000 && grosspay()< 49999):
  return 1100;
  break;
  case (grosspay() >50000 && grosspay()< 59999):
  return 1200;
  break;
  case (grosspay() >60000 && grosspay < 69999):
  return 1300;
  break;
  case (grosspay() >70000 && grosspay() < 79999):
  return 1400;
  break;
  case (grosspay() >80000 && grosspay()< 89999):
  return 1500;
  break;
  case (grosspay() >90000 && grosspay() < 99999):
  return 1600;
  break;
  case (grosspay() > 100000):
  return 1700;
  break;

}
}



//Calculating net salary
  function netpay(){
  let calcnet = (grosspay()-calnssf()-calnhif()-calcpayee());
  return calcnet
}


// //output gross pay and net pay
document.write("Your Gross monthly salary is: " + grosspay() + "  but, sadly, your net salary is only : " + netpay()); 






    
