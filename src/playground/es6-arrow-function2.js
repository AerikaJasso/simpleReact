// arguments object -- no longer bound with arrow functions
const add = function(a, b) {
  console.log("arguments: ", arguments);
  return a + b;
};

console.log(add(55,5,1111));
// this keyword is no longer bound with arrow functions.

// when using arrow functions this will be bound to its parent.

// don't use arrow functions when using methods. 

// const user = {
//   name: 'Jaden',
//   cities: ['Los Angeles', 'New York', 'Dublin'],
//   printPlacesLived: function () {
//     this.cities.forEach((city) => {
//       console.log(this.name + ' has lived in '+ city);
//     })
//   }
// };
// user.printPlacesLived();

const user = {
  name: 'Jaden',
  cities: ['Los Angeles', 'New York', 'Dublin'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [2,4,6,8],
  multiplyBy: 2,

  multiply() {
    return this.numbers.map((x) => this.multiplyBy * x);
  }
}

console.log("this is the multiplier object", multiplier.multiply());