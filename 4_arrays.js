const nestedArr = ['a', 'b', 'c', ['d', 'e', ['f', 'g']]];
const tech = ['react js', 'react native', 'react and redux'];

console.log(nestedArr.flat(2));

console.log(tech.flatMap(item => item.split(' ')));