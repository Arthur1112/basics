
import fetch from 'node-fetch';

// async function getDataAsync() {
//   try {
//     const response = await fetch("https://api.sampleapis.com/beers/ale"); // GET -> Promise
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }
// getDataAsync();

//--------------------------------- Code on top is the same as code bellow

// fetch('https://api.sampleapis.com/beers/ale')
//  .then((response) => {
//      return response.json()
//      // do something
//  })
//  .then(data => {
//      console.log(data[87].name)
//  })
//  .catch((err) => {
//      console.error(err)
//  })

// //---------------------------------
// fetch('https://api.sampleapis.com/beers/ale')
//  .then((response) => { return response.json()})
// //  .then((response) => response.json()) ////this is the exact same as the code right above, return is implied, only for one line of code
//  .then(data => console.log(data[87])) // do all the stuff we want to happen AFTER the fetch...
//  .catch(err => console.error(err))

// simple clean verson 
fetch('https://api.sampleapis.com/beers/ale')
    .then(response => response.json())
    .then(data => console.log(data[87])) // data can be called whatever you want 
    .catch(err => console.error(err))