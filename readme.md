
1.	Write short notes on Array methods with code example
•	push()
•	pop()
•	shift()
•	unshift()
•	includes()
•	toString()
•	reverse()
•	join()
•	concat()
•	flat()
•	slice()
•	splice()

ans>
push()

adds an elament to the end of the array
```js
let arr=[1,2,3,4,5]
let newArr =arr.push("six")
console.log(newArr);
```

pop()
remove the last element of the array
```js
let arr=[1,2,3,4,5,]
arr.pop()
console.log(arr);
```



shft()
remove the first elament from the array
```js
let arr=["apple","hp","dell","dell","lenovo","asus"]
arr.shift()
    console.log(arr);
  ```



unshift()
add an elament to the begin of an array
```js
    let arr=[1,2,3,4,5]
    arr.unshift("six")
    console.log(arr);
  ``` 

  

  
includes()
 check if a particular elament included in the array
```js
    let arr =[1,2,3,4,5]
console.log(arr.includes(7));
```



toString()
return a string with array values sepparated by coma

```js
let arr=["apple","hp","asus"]
let str=arr.toString()
console.log(typeof (str));
```



reverse()
revesed all of the elaments in the array
```js
let arr=["apple","asus","hp"]
console.log(arr.reverse());
```



join()
converts an array to string,any sepparater can be specified

```js
let arr=["apple","asus","hp"]
console.log(arr.join("+"));



concat()


```js
let arr1=["apple","lenovo","asus","hp"]

let arr2 =["car","bike","bus"]

let arr3 =[1,2,3]
console.log(arr1.concat(arr2,arr3));

```




flat()
flat method concatnates sub  array elements
```js
let arr =[1,2,[3,4],[5,6,7]]
let newArr=arr.flat ()
console.log(newArr);







slice
slice method returns selected elaments in a new elament
```js
let arr=["apple","lenovo","asus","hp"]
let newArr=arr.slice(0,2)
console.log(newArr);
```



splice
//
```js
let arr=[1,2,3,4]
arr.splice(2,1,"five")
console.log(arr);
```




2.	https://javascript-array-methods-quiz.netlify.app/

3.	Write a JavaScript function to check whether an `input` is an array.
ans>
```js
let arr=[1,2,3,4]
console.log(Array.isArray(arr));
```

4.	Write a JavaScript function that takes an array as an argument and returns the first element of the array.
ans>
```js
let arr=["apple","lenovo","asus","hp"]
let newArr=arr.slice(0,1)
console.log(newArr);
```

5.	Write a JavaScript function that takes an array as an argument and returns the last element of the array.

ans>
```js
let arr=[1,2,3,4,5,]
arr.pop()
console.log(arr);
```


6.	Write a simple JavaScript function to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];

ans>
```js
let arr=["red","green","white","black"]
console.log(arr.join("+"));
```
7.	Write a JavaScript program that accepts a number as input and inserts dashes (-) between each. For example, if you accept 025468 the output should be 0-2-5-4-6-8

```js
let number = 12072003
let conversation=(num)=>{
  let change = string(num).split("").map((item)=>{
    return number (iten)

  })
  return change.join("-")
}
console.log(conversation(number));


```
8.	Write a JavaScript function that checks if the given number is even or odd then returns a Boolean value (use: arrow function, return keyword, ternary operator)
ans>
```js
let number =10

let isEven =(num)=>{
  num %2===0 ? console.log("true"):
  console.log("false");


}
isEven(number)


```
9.	Create an array of guestlist. Write a javascript function that takes the user’s name as an argument and checks whether it is in the guestlist. If yes, return the string “Welcome” else, return “Sorry, good luck next time”.
ans>
```js
let guests = ["aboo","sinan","munshid","subin"]

let greeting =(names)=>{
  return names.includes("aboo")?console.log("welcome"):console.log("sorry good luck next time")
  greeting(guests)
}

```

10.	Write a javascript function that reverses a given number example: 123456789 => 987654321 (split(), reverse (), join())
```js
let number=123456789
let numReverse=(num)=>{
  let outPut = string(number).split("").reverse().join("")
  console.log(outPut)
}
numReverse(number)



```
11.	Write a JavaScript function that accepts a string as a parameter and converts the first letter into upper case.
Example: “javascript” => “Javascript”


```js


 let name ="javascript"
let firstLetter = name.slice(0,1).toUpperCase()
let restOfTheLetters =name.slice(1,name.length).toLowerCase()
console.log(firstLetter + restOfTheLetters);

```