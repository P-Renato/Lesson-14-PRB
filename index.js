console.log(add(5,4))

function add(a, b){
    return a+b
}

console.log(add(2,1))

//=============================


// console.log(sum(2,4)) Will throw an error: Cannot access 'sum' before initialization

const sum = (a,b) => {
    console.log("Hello from 'sum' funciton." )
    return a+b
}

console.log(sum(1,1))

// ====================================

const myArr = [2, 5, 7]

myArr.push(3) // Adding to the array
myArr.sort()  // it sorts the array

console.log(myArr)

// Now we are gonna make each item in the array * 10

const result = []
for (let i=0; i<myArr.length; i++){
    result.push(myArr[i] * 10)
}
console.log(result)

// ===================================== map is better if I want to change the array items and still have an array

const result2 =  myArr.map(  (item) => { return item * 10 } )  // the same as below
const result3 = myArr.map(  (item) => item * 10 )            // the same as above but shorter
console.log("result2 is  ", result2)
console.log("result3 is  ", result3)

// squared math =========================

const squ = (num)=>{
    return num ** 2
}

const result4 = []
for (let i=0; i<myArr.length; i++){
    result4.push(myArr[i] * myArr[i])
}

console.log(result4) // this is an array

for (let i=0; i<myArr.length; i++){ // this is not an array
    console.log(squ(myArr[i]))  // squ is being used as function
}

// =====================
const x = 4
const result5 = myArr.forEach((x)=> squ(x)) // x is a parameter
console.log(result5)

//==============================

const filteredArr = myArr.filter((x)=> x<5)

console.log(filteredArr)