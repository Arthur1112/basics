// 1. Write a function that adds two numbers together
// 2. Create a function that returns the number of true values there are in an array.
// const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]
// 3. Write a function that receives a car object as an argument and outputs the cars make and model.
// 4. Write a function to get the first element in an array.

//Question 1.
function myFunc(a, b) {
    let c = a + b;
    console.log(c)
}
myFunc(5, 5)

//Question 2.
// const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]
// // function trueArray(a){
// //     for (count = 0; count < a.length; count++){
// //         if(a[count] === true){
// //             count += 1
// //             console.log(count)
// //         }
// //     }
// // }
// // trueArray(testArray)
// count = 0
// if (testArray = true){
//     let c = count++
//     console.log(c)
// } while (count < testArray.length);



//Question 3.
let car = {
    make: 'Ford',
    model: 'Mustang',
    year: 2012,
    vin: '3948573948'
}
function myCar(a) {
    console.log(a.make, a.model)
}
myCar(car);

//Question 4.
const myArray = ['Brazil', 'USA', 'Canada', 'Mexico', 'Costa Rica'];
function elementOne(a) {
    console.log(a[0])
}
elementOne(myArray)

const testArray = [true, false, false, true, false, false, false, true, true, true, false]
function checkTrue(arr) {
    let tot = 0
    for (let i = 0; i < arr.length; i++) {
        arr[i] ? tot++ : ''
    }
    return tot
}
console.log(checkTrue(testArray))