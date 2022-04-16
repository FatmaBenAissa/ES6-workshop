//*******************1-variable Declaration*********************************
/* for(let i=0;i<10;i++){
    console.log(i)
}
console.log(i) */

/* const age=20;
console.log(age);
age=25;
console.log(age); */


//*********************2-Template literals and ternary operator**********************
/* const person={
    name:"fatma",
    age:"29",
}
console.log("Hello my name is "+person.name+" ,my age is "+person.age)
console.log(`Hell my name is ${person.name} my age is ${person.age}`) */

//**************************3-Arrow-functions*****************************
/* function sum(x,y){
    return x+y;
}
console.log(sum(5,3));

const sum2=(x,y)=>x+y;
console.log(sum2(5,3));

const prod=(x,y)=>{
return x*y
}
console.log(prod(5,3)); */

//*****************************4-Array-functions******************************
/* const students=[
    {name:"fatma", age:29},
    {name:"naima", age:32},
    {name:"alaa", age:26},
    {name:"monatssar", age:25},
];

console.log(students.find((el)=>el.age>26)); //return first element found
console.log(students.findIndex((el)=>el.name=="naima")); //return first element found
console.log(students.filter((el)=>el.age>26))

console.log(students.map((el)=>el.age+5)); // create a cope and modify it
console.log(students) */

//***********************5-Destructuring*******************************
/* const person={
    name:"fatma",
    date:{
        jj:06,
        mm:01,
        aa:1993,
    }
}
console.log(person.name)

const {name,date}=person   //destructuring
console.log(name)

const {jj,mm,aa}=date 
console.log(jj) */


//*************************6-Spreading************************
/* let arr=[1,2,6,48];
let arr2=[54,65,59,84];

let newarr=[...arr,...arr2]
console.log(newarr)

let newarr2=[...arr,"fatma",...arr2]
console.log(newarr2) */