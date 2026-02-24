//const data = {
 //name:"Aayusa",
 //class:14,
 //age:19
//}
//console.log(data.name)
//console.log(data.class)
//console.log(data.age)
//if i need all then
//console.log(data)

//const Person = {
//name:"Aayusa",
 //class:14,
 //age:19,
 //skills:["singing","dancing","swimming","coding","teaching"]
//}
 //Person.skills.forEach((skill)=>{
  //  console.log(skill)
 //})
 //console.log(Person.name)
//console.log(Person.class)
//console.log(Person.age)
//console.log(Person.skills)


//Q.Make a Object named "Student" which has keys Name , address , roll , hobbies(in Array) , 
// friends(Array) , rank , gender.
  //const Student = {
  //  name:"Aayusa" ,
  //  address:"Butwal",
   // roll:2 ,
   // hobbies:["singing", "dancing", "reading", "coding"],
   //  friends:["pratima", "sijan", "abisha", "nisha"],
  //  rank:25,
   //  gender:"female"
 // }
      // console.log(Student.name)
      // console.log(Student.address)
      // console.log(Student.roll)
      // console.log(Student.hobbies)
      // console.log(Student.friends)
      // console.log(Student.rank)
      // console.log(Student.gender)
       
//Nested object
//const Student = {
   // name:"Ankita" ,
   // address:"Sunwal" ,
   // friends:[
    //    { 
     //       name: "pratima",
      //      address:"butwal"
      //  },
      //   {
       //     name:"sijan",
       //     address:"bhumahi"
       // }
   // ]
//}
//console.log(Student.friends[0].name)
//console.log(Student.friends[0].address)
// console.log(Student.friends[1].name)
// console.log(Student.friends[1].address)


//DAY9
//Array of Objects
//const student = [
   // {
      //  name:"Aayusa" ,
      //  age: 16 ,
      //  addTask : function addTask(){
      //      this.name="ankita"
      //  } ,
     //   hobbies:["sing" , "dance"],
     //   addHobbies:function addHobbies(){
     //       this.hobbies.push("code")
      //      this.hobbies.pop("sing")
      //  }
  //  }
   // {
    //    name:"Hari" ,
     //   age:25
   // }
//]
//console.log(student[0].name,student[1].name);
//student[0].addTask()
//console.log(student[0].name)
////addTask can be written as changename
  

//const student = [
 // {
  //  name: "RadheShyam",
  //  marks: [60, 70, 80],
  //  getTotalMarks: function () {
  //    let sum = 0;
  //    for (let i = 0; i < this.marks.length; i++) {
  //      sum += this.marks[i];
  //    }
  //    console.log("Total Marks:", sum);
  //    return sum;
  //  },
  //  hobbies: ["sing", "dance"],
  //  addHobbies: function () {
  //    this.hobbies.push("code");
  //  }
  //}
//];

const questionData = {
    id : 1,
    title : "JavaScript Quiz" ,
    totalQuestions : 3,
    questions : [
        {
            id : 101,
            question : "What is JavaScript ?" ,
            options : ["Programming Language", "Database", "Operating System", "Browser"],
            correctAnswer : "Programming Language"
        },
        {
            id : 102 ,
            question : "Which keyword is used to declare variable ?",
            options : ["var", "int","letvar", "define" ],
            correctAnswer : "var"
        },
        {
            id : 103 ,
            question : "Which symbol is used for single line commment ?",
            options : ["//" , "/* */", "#", "<!-- -->"] ,
            correctAnswer : "//"

        }
    ]
} ;
// Get All Questions 
 console.log(questionData.questions)
//Get Questions with options
questionData.questions.forEach((question)=>{
    console.log(question.question)
    console.log(question.options)
}
) 
// Access single question
// Access correct answer of a question 
