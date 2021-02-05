const startStr = '      This is a ';
const endStr = 'new string method     ';

console.log(startStr.trimStart() + endStr.trimEnd());
console.log((startStr + endStr).trim());

function createWebAddress(socialNetwork) {
  console.log(socialNetwork.padStart(socialNetwork.length + 4, 'www.').padEnd(socialNetwork.length + 8, '.com'));
}

createWebAddress('facebook');