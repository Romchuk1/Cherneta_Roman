const name = prompt("Як вас звати?");
const birthYear = parseInt(prompt("Вкажіть ваш рік народження:"));
const city = prompt("З якого ви міста?");

const currentYear = new Date().getFullYear(); 
const age = currentYear - birthYear;

let ageGroup = "";

if (age < 13) {
    ageGroup = "дитина";
} else if (age < 18) {
    ageGroup = "підліток";
} else if (age < 65) {
    ageGroup = "дорослий";
} else {
    ageGroup = "літня людина";
}

const capital = "Київ";
let cityMessage = (city === capital) 
    ? "Ви живете у столиці України!" 
    : `Ви живете у місті ${city}.`;

console.log(`Привіт, ${name}!`);
console.log(`Вам зараз ${age} р., ви — ${ageGroup}.`);
console.log(cityMessage);