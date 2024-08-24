let MyDate = new Date()

console.log(MyDate);

console.log(MyDate.toDateString())
console.log(MyDate.toISOString())
console.log(MyDate.toJSON())
console.log(MyDate.toLocaleDateString())
console.log(MyDate.toLocaleTimeString())

// let MyCreateDate = new Date(2024,7,23)
// let MyCreateDate = new Date("2024-08-23")
let MyCreateDate = new Date()
// console.log(MyCreateDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
// console.log(MyCreateDate.getTime())

console.log(Math.floor(Date.now()/1000))


console.log(myTimeStamp.toLocaleString('default',{
    weekday: "long"
})
);



