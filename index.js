// Javascript variables
var number1 = 50;
var number2 = 300;
document.write(number1+number2);
console.log(number1+number2);


var n= null;
console.log(n);
var a = undefined;
console.log(a);
var b;
console.log(b);


var str = "welcome to symbiotic"
console.log(str)

var marks ={
    maths : 85,
    english : 90,
    computer : 78
}
console.log(marks);

// if i want to use boolean values then,

var a1 = true
var a2 = false

console.log(a1,a2)

/* two types of datatypes in Javascript 
   1. Primitive = null, undefined, string, int, boolean, symbol
   2. Reference = arrays and objects
*/

// Arrays

var arr =[1,2,"himanshu",4,5]
console.log(arr)
console.log(arr[4])
console.log(arr[2])
console.log(arr[5])

// function creation
function avg(a,b){
    c= (a+b)/2
    return c
}

b1 = avg(10,12)
console.log(b1);


// for loop 

var array = [1,2,3,4,5,6,7,8]
console.log(array)

for (var i=0;i<array.length;i++){
    console.log(array[i])

}

array.forEach(function(element){
    console.log(element)
})

// String 

let str8 = "my name is himanshu name"
console.log(str8)

d=str8.replace("himanshu","harsh")
console.log(d)

console.log(str8.length)
console.log(str8.indexOf("name"))
console.log(str8.lastIndexOf("name"))
console.log(str8.slice(4,9))


// date 

let myDate = new Date()
console.log(myDate)

console.log(myDate.getTime())
console.log(myDate.getFullYear())
console.log(myDate.getDay())

console.log(document)
console.log(document.location)

console.log(document.getElementById('Click').style.border = '2px solid blue')

let elem = document.getElementById("Click")
console.log(elem)

let elemClass = document.getElementsByClassName("container")
console.log(elemClass)

elemClass[1].style.background = "yellow" 
elemClass[0].classList.add("bg-primary")

console.log(elemClass[0].innerHTML)
console.log(elemClass[0].innerText)


// tag name - we can access div, class, container etc' all

tn = document.getElementsByTagName("div")
console.log(tn)

createdelement = document.createElement('p')
createdelement.innerText="Symbiotic consulting group"
tn[0].appendChild(createdelement)

tn[0].innerText.background="yellow"