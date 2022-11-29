/*attempt to prompt employee to imput their basic salary and total benefits (not working) 
it seams thats the imputed data is not being converted into a number despite the use of 
"parseInt"*/

// let x = prompt("What is your basic salary", "0");
// let y = prompt("What is your total benefits", "0");
// let basic = parseInt(x);
// let benefits = parseint(y);

//alternatively we have hard coded the expected input to test if the code is working so far

let basic = 500000;
let benefits = 6000;

// //calculate gross salary
function grosspay(){
  let calcgross = basic + benefits;
  return calcgross
}


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






    
