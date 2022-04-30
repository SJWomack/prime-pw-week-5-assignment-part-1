console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Stephen',
  lastName: 'Womack',
  hasSiblings: false,
  shoeCount: 5,
  faveThreeFoods: ['pizza', 'dumplings', 'tacos']
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
fullName = me.firstName + ` ` + me.lastName;
console.log(fullName);



/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log(`my first favorite food is: ${me.faveThreeFoods[0]}`);
console.log(`my final favorite food is: ${me.faveThreeFoods.slice(-1)}`);  //found a couple of ways to do this, this way seemed the most elegant? -Stephen

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log(`my shoe count is: ${me.shoeCount}`)
me.shoeCount += 1
console.log(`my updated shoe count is: ${me.shoeCount}`)
/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/