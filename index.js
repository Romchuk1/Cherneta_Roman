let a = 3;
let b = 4.4;
let c = "Roman";
let d = true;
let e = false;

console.log("Початкові типи:");
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);

a = "10";
b = "15.7";
c = 25;
d = 1;
e = 0;

console.log("Типи після зміни:");
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);

let sum = Number(a) + c;
let t1 = Number(true);
let t2 = Number("50");
let t3 = String(25);

console.log("Перетворення:");
console.log(sum);
console.log(t1);
console.log(t2);
console.log(t3);

let obj = {
    number: a,
    float: b,
    text: "Hello",
    status: true
};

console.log(JSON.stringify(obj));
