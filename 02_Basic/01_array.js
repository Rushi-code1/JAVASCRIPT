const myArray = [1,2,3,4,5]
const myArray2 = ["Hello", "Rushikesh"]

const myArray3= new Array(1,2,3,4,)
// console.log(myArray3[1]);

// Array methods

// myArray3.push(12)
// myArray3.push(7)
// myArray3.pop()

myArray3.unshift(9)
myArray3.shift() 

// console.log(myArray3.includes(9));
// console.log(myArray3.indexOf(9)); 

// const newArr = myArray3.join()
// console.log(typeof newArr);

// console.log(myArray3)

// slice, splice

// console.log("A",myArray)

const myn1 = myArray.slice(1,3)

// console.log(myn1);

// console.log("B",myArray3);

// const myn2 = myArray3.splice(1,3)
// console.log(myn2);
// console.log(myn1);
// console.log(myArray3);


//  Array Part 2

const marvel_heros = ["thor","Ironman","spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel_heros.push(dc)
// console.log(marvel_heros);

// const ALL_heros = marvel_heros.concat(dc)
// console.log(ALL_heros);

// const all_new_heros = [...marvel_heros,...dc]
// console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5,6]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); 

console.log(Array.isArray("Rushikesh"));
console.log(Array.from("rushikesh"));

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1,score2,score3,score4))