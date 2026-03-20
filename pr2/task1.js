let age = prompt("Введіть ваш вік:");

age = Number(age);

if (age < 18) {
    alert("Вам заборонено вхід");

} else if (age >= 18 && age <= 65) {
    alert("Ласкаво просимо!");

} else if (age > 65) {
    alert("Будь ласка, будьте обережні!");
    
} else {
    alert("Будь ласка, введіть коректний вік");
}