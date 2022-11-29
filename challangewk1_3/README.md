# Net Salary Calculator
This is a small program that outputs the total net salary of an employee after they input their basic salary and benefits.

## Instructions
The program prompts the user to input their gross salary and total benefits. it then deducts the employees monthly deductions and the outputs the employees net salary.

#parameters
The user inputs their gross salary and total benefits. The program then deducts; NHIF contribution, NSSF contribution, Payee tax aand then returns the total net salary.

#Language used
The program is build using Javascript and HTML

#How it works
The program uses a number of functions to calculate different parameters and then finaly returns the total net salary of the employee. 

 1)The function grosspay() is used to compute the the total gross salary

 2)The function calnssf() is used to calculate nssf

 3) The function calcpayee uses an if-statement calcpayee is used to calculate the payee tax

 4) The function calnhif uses switch-case statement to compute the appropriate nhif deduction

after all the computations are complete the program returns the total net salary plus gross salary of the employee.

##WARNING: Bug!!
at the time of completing the project, the programmer had strugled to achive one requirement. When prompted to input the gross salary and benefits, the progrem saves the data as a "string" variable thus making it imposible to perform arithmetic calculations on the data. An attempt to parse the inputed data as integers using the parseint() function was performed but failed. the rest of the program works and this can be proven by hard coding the required integers into the appropriate variables. Perhaps a nother deveoper with better experince can assist in fixing the bug.



#Requirements
This program should run on any modern web browser as it uses standard HTML & Javascript and no special installations are required

##Support
For further information on the program you can contact the developer via email: brian.baraza@moringaschool.com

#Contribution
This project is open source. the code is available for any developer wishing to update or explore the project. Other developers are welcome to try and fix the bug stated above.

