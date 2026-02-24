//DAY1:
// var, let and const in js
// var a=10;
// var a=20;
// console.log(a)
// Var is global scoped that can be re-declared
// Let is block scoped variable that cannot be re-declared
// let b=20;
// let b=30;


//Day3: Conditional statement is Javascript 
let k=20;
let l= 30;
let m=40;
// if statement 
// if(k>l){
//     console.log(k+" m is greater")
// }
// else{
//     console.log(l+" m is greater")
// }
// else if

//if(k>l && k>m) {
   // console.log(m+" m is greater")
// }
//Q3. The user has got marks in one subject let assume the marks can be from (1 TO 100) we need to find the gread got by students based on his marks.
let marks= 100
if(marks>40){
    if (marks>90){
        console.log("you got A+")
    }
    else if (marks>80 && marks<90){
        console.log("you got A")
    }
    else if (marks>70 && marks<80){
        console.log("you got B+")
    }
    else if (marks>60 && marks<70) {
        console.log("you got B")
    }
}
else {
 console.log("you got fail")
}

//Q1: Declare four variables w,x,y,z and find largest/ greatest among them using if else if condition.
let w=100;
let x=50;
let y=70;
let z=90;
 if (w>x && w>y && w>z) {
    console.log("w+ is greater")
 }
 else if ()

  //Q4. using the if else-if statement, calculate the electricity bill based on units consumed:  
// conditions: 
//up to 50 units = rs.3 per unit
//51-150 units = rs. 5 per unit
//Above 150 units= rs.8 per unit 

//Q2. Using if else-if statement, display " your BMI [BMI value] is perfect" 