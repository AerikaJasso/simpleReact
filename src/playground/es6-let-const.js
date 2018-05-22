var nameVar = 'Aerika';
nameVar = "mike";
console.log('nameVar', nameVar);

let nameLet = "AJ";
nameLet = 'Oslo';
console.log('nameLet:', nameLet);

const nameConst = 'Frankie';
console.log('nameConst:', nameConst);

// Block Scoping

const fullName = 'Andrew Mead';
let firstName;
if(fullName){
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log('First Name outside the block:', firstName);