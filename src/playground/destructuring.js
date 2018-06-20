// ---- Object Destructuring ----

// const person = {
//   name: 'AJ',
//   age: 29,
//   location: {
//     city: 'Seattle',
//     temp: 61
//   }
// };

// // const name = person.name;
// // const age = person.age;
// // Object destructuring
// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}. `);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

// --- Array Destructuring --- 

const address = [
  '1299 S Juniper st', 
  'Philadelphia', 
  'Pennsylvania', 
  '19147'];


  const [,city, state = 'New York', zip]= address;

  console.log(`You are in ${city} ${state}.`);

  const  item = [
    'Coffee (hot)',
    '$2.00',
    '$2.50',
    '$2.75'
  ];

  const [itemName, small, medium, large]= item;

  console.log(`A medium ${itemName} costs ${medium}`);