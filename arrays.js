// let cars = ['Ferrari', 'Lamborghini', 'Audi', 'Aston Martin', 'Ford']

// console.log(cars[1], cars[3]) // Lamborghini Aston Martin 

// console.log(cars[1]) // Lambo

// console.log(cars.length) //5

let ourCars = [{ // object inside an array
    brand: 'Audi',
    year: 2018,
    model: 'A3',
    miles: 25580,
    color: 'Grey'
}, {
    brand: 'Jeep',
    year: 2015,
    model: 'Grand Cherokee',
    color: 'Black',
    miles: 55_000,
}]

console.log(ourCars[1].miles);

const { miles, year} = ourCars[0] // important part 

const age = 2022 - year

const mileage = miles / age

console.log(mileage + ' miles per year')

// if (mileage < 10_000){
//     console.log('This is a LOW mileage car.')
// } else {
//     console.log('This is a NOT a low mileage car.')
// }

// (mileage < 10_000) ? console.log('This is a LOW mileage car.') : console.log('This is a NOT a low mileage car.');

// (mileage < 10_000)
//     ? console.log('This is a LOW mileage car.')
//     : console.log('This is a NOT a low mileage car.');
// This above is a good way to see how a Ternary looks like on multiple lines

const isIt = (mileage < 10000) ? 'is a' : 'is NOT a';
console.log(`This ${isIt} low mileage car.`)
console.log(`This ${(mileage < 10000) ? 'is a' : 'is NOT a'} low mileage car.`);
// These above are the same thing just one is easier to read at first