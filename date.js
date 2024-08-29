const now = new Date();
 console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getDate());

// convert date to string
const n = new Date(2023, 11, 3);
console.log(n.toDateString());

//indian standard time
const ind =new Date().toLocaleString("en-US",{timeZone : 'Asia/kolkata'});
console.log(ind);

// const now = new Date();
// console.log(now);
// console.log(now.getDate());
// const d = new Date(2024, 7, 23);
// console.log(d.toDateString())


