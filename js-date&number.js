// use javascript date method to display the currend date and day of the week

const now = new Date();
console.log(now);
console.log(now.getDate());
const d = new Date(2024, 7, 23);
console.log(d.toDateString())

// use the toprecise() method to format the number 123.456789 to four digits

const myfloat2 = 123.456789
console.log(myfloat2.toPrecision(4));

// tofixed()method to round the number 7.45678 to two decimal place

const myfloat3 = 7.45678
console.log(myfloat3.toFixed(2));