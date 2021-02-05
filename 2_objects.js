const person = {
  name: 'Jack',
  age: 30,
  position: 'Developer'
}

// get Object properties => .getOwnPropertyDescriptors()
console.log(Object.getOwnPropertyDescriptors(person));
console.log(Object.getOwnPropertyDescriptor(person, 'position'));

const pet = {
  name: 'Kitty',
  age: 3,
  paws: 4,
}

// Object to Array => .entries()
console.log(Object.entries(pet));
// Array to Object => .fromEntries()
console.log(Object.fromEntries([['name', 'Kitty'], ['age', 3], ['paws', 4]]));

for (const [key, value] of Object.entries(pet)) {
  console.log(`${key} ${value}`);
}