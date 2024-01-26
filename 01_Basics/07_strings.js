const name = 'Surya';
const repoCount = 30;
console.log(name+repoCount+'value');
// console.log(`My name is ${name} and the value of repo is ${repoCount}`);
const gameName = new String('GamerDude');
// console.log(gameName)
// console.log(gameName[0]);
// console.log(gameName.__proto__)
// Methods and properties
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('T'));
// console.log(gameName.includes('A'));
// character up to but not including end character in substring and slice
// In slice we can pass negative value as well -1 indicates last character
// console.log(gameName.substring(1,2));
// let anotherString = gameName.slice(0,4)
// console.log(anotherString)
// anotherString = gameName.slice(4,-2)
// console.log(anotherString)
// anotherString = gameName.slice(-8,4)
// console.log(anotherString)

let newString1 = ' Surya gamer ';
console.log(newString1.trim())

const url = 'https://videogame.com/grand%20gamer';
console.log(url.replace('%20','-'))

console.log(url.includes('video'))

let strArr = new String('Video-Gamer');
strArr = strArr.split('-');
console.log(strArr)