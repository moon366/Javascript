//operators in operators
//1. Arithmetic operators 
let a=10
let b=5
let sum = a+b
let diff = a-b
let product = a*b
let division = a/b
let exponent = a**b
console.log(sum)
console.log(diff)
console.log(product)
console.log(division)
console.log(exponent)

//2.  Assignment operators
let c=20
c=c+1
console.log("first:",c)
c+=1
console.log("second" ,c)
c++
console.log("third" ,c)

//New
let x=20
let w=10
let y=5
let z=15

console.log(x+=1)
console.log(y+=1)
console.log(w+=1)
console.log(z+=1)
console.log(x-=1)
console.log(w/=1)
console.log(y*=1)
console.log(z**=1)

// 3.Comparison operators 
// used to compare two or more values and the result 
// returned is always boolean value that is either true or false

let k=1
let l="1"
console.log(k>l)
console.log(k<l)
console.log(k>=l)
console.log(k<=l)

// == ===
// == checks only value but ingores the data types
// === trict equality checker , checks both value as well as data types 
console.log(k==l)
console.log(k===l)
console.log(l==k)
console.log(l===k)


// WAP to convert the degree celsius to degree fahrenheit  [celsius*(9/5)+32]
let m=70
m=m*(9/5+32)
console.log("fahrenheit" ,m)
console.log("The "+celcius+" degree"+" is equal to "+fahrenheit)
