let num1 = parseFloat (prompt("Введіть перше число:"));
let num2 = parseFloat (prompt("Введіть друге число:"));
let num3 = parseFloat (prompt("Введіть третє число:"));

let average = (num1 + num2 + num3) / 3;
console.log("Середнє арифметичне" , average);

console.log("Модуль першого числа:" , Math.abs(num1));
console.log("Модуль другого числа:" , Math.abs(num2));
console.log("Модуль третього числа:" , Math.abs(num3));

console.log("Округлення a в більшу сторону:", Math.ceil(num1));
console.log("Округлення b в більшу сторону:", Math.ceil(num2));
console.log("Округлення c в більшу сторону:", Math.ceil(num3));

console.log("Округлення a в меншу сторону:", Math.floor(num1));
console.log("Округлення b в меншу сторону:", Math.floor(num2));
console.log("Округлення c в меншу сторону:", Math.floor(num3));

console.log("num1^2 =", num1 ** 2);
console.log("num2^2 =", num2 ** 2);
console.log("num3^2 =", num3 ** 2);

if  (num1 / 5 === 0)
    console.log("отримані результати діляться без залишку");
else console.log("отримані результати діляться з залишком");

if (num2 / 5 === 0)
    console.log("отримані результати діляться без залишку");
else console.log("отримані результати діляться з залишком");

if (num3 / 5 === 0)
    console.log("отримані результати діляться без залишку");
else console.log("отримані результати діляться з залишком");

if (num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1) {
    console.log("Трикутник може існувати");
} else {
    console.log("Трикутник не може існувати");
}