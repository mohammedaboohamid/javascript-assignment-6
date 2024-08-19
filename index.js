
/*

function greeting(){

    let userName=prompt("enter your name")
    alert(`good morning  ${userName}`)
}
greeting()
*/


/*

function greeting (name){
    console.log(`hey ${name}`);
    
}
greeting("aboo")


*/


/*


let myName="shon"
function greeting(name ){
    console.log(`hey ${name}`);
    
}
greeting(myName)
*/


/*

let name="aboo"
function greeting(name){
    console.log(`hey ${name.toUpperCase()}`);

}
greeting(name)
*/



/*
let capitalize=function(name){
    console.log(name.toUpperCase());
    
}
capitalize("aboo")
*/


 let name ="javascript"
let firstLetter = name.slice(0,1).toUpperCase()
let restOfTheLetters =name.slice(1,name.length).toLowerCase()
console.log(firstLetter + restOfTheLetters);



/*

let  printMyName=()=>{
    console.log("aboo");
    
}
printMyName()
*/

/*
let printMyName ="aboo"()=>{
    console.log(myName);
    
}
printMyName()
*/

//write a function that takes a number as an argument  and tells if the number is even oe odd
/*
let isEven =(num)=>{
    if(num % 2 ===0){
        console.log(`${num} is even number`);
        
    }else{
        console.log(`${num} is odd number`)
    }
}
isEven(10)


*/



//Array methods

//Push()
//adds an elament to the end of the array
/*
let arr=[1,2,3,4,5]
let newArr =arr.push("six")
console.log(newArr);
*/



//pop
//remove the last element of the array
/*
let arr=[1,2,3,4,5,]
arr.pop()
console.log(arr);

*/



//shft()
//remove the first elament from the array
/*
let arr=["apple","hp","dell","dell","lenovo","asus"]
arr.shift()
    console.log(arr);
  */



    //unshift
    //add an elament to the begin of an array

/*
    let arr=[1,2,3,4,5]
    arr.unshift("six")
    console.log(arr);
  */  



    //includes()
    //check if a particular elament included in the array
/*
    let arr =[1,2,3,4,5]
console.log(arr.includes(7));
*/


//toString()
//return a string with array values sepparated by coma

/*
let arr=["apple","hp","asus"]
let str=arr.toString()
console.log(typeof (str));
*/



//reverse()
//revesed all of the elaments in the array
/*
let arr=["apple","asus","hp"]
console.log(arr.reverse());
*/



//join()
//converts an array to string,any sepparater can be specified
/*

let arr=["apple","asus","hp"]
console.log(arr.join("+"));
*/


//concat()
//
/*
let arr1=["apple","lenovo","asus","hp"]

let arr2 =["car","bike","bus"]

let arr3 =[1,2,3]
console.log(arr1.concat(arr2,arr3));

*/



//flat
//flat method concatnates sub  array elements
/*
let arr =[1,2,[3,4],[5,6,7]]
let newArr=arr.flat ()
console.log(newArr);
*/






//slice
//slice method returns selected elaments in a new elament

/*
let arr=["apple","lenovo","asus","hp"]
let newArr=arr.slice(0,1)
console.log(newArr);
*/



//splice
//
/*
let arr=[1,2,3,4]
arr.splice(2,1,"five")
console.log(arr);
*/

/*
let arr=[1,2,3,4]
arr.splice(1,2,"two","three,",)
console.log(arr);

*/

//
/*
let arr=[1,2,3,4]
console.log(Array.isArray(arr));
*/

/*
let isArr=(arr)=>{
    console.log(Array.isArray(arr));
    
}
isArr
("string")
*/