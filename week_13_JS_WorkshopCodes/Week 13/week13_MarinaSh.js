//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.

let currentDate = new Date();
console.log(currentDate); 


//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.

let currentYear = currentDate.getFullYear();
console.log(currentYear); 


//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.

let currentMonth = currentDate.getMonth();
console.log(currentMonth + 1);


//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.

let currentDay = currentDate.getDate();
console.log(currentDay);


//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.

let birthday = new Date("2023-11-04");
console.log(birthday);


//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.

let futureDate = new Date("2023-09-23");
console.log(futureDate);


//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate

let diffBetweenDates = birthday - futureDate;
const daysPassed = Math.floor(diffBetweenDates / (1000 * 60 * 60 * 24));
console.log(daysPassed);


//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.

let pastDate = new Date(2023, 6, 31);
console.log(pastDate);


//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate

let diffBetweenDates2 = currentDate - pastDate;
const daysPassed2 = Math.floor(diffBetweenDates2 / (1000 * 60 * 60 * 24));
console.log(daysPassed2);


//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.

let nextWeek = new Date(2023, 7, 11);
console.log(nextWeek);


//Задание 11
// Выведите в консоль день недели для nextWeek

console.log(nextWeek.getDay());


//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.

let futureYear = currentYear + 5;
console.log(futureYear);


//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.

let futureDateInFutureYear = new Date(2024, 10, 4);
console.log(futureDateInFutureYear);


//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом

console.log(futureYear - currentYear);


//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.

let strDate = new Date(Date.parse('2023-06-15T08:30:00.000Z'));
console.log(strDate);


//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.

console.log(Date.parse(strDate));


//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else

const date = '2023/06/15';
let wrongDate = new Date(Date.parse(date));

if (wrongDate == NaN) {
    console.log('Неправильный формат даты');
} else {
    console.log('Правильный формат даты');
}


//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.

const number = 231;
 if (number >= 0) {
    console.log('+');
 } else {
    console.log('-');
 }


//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.

const number2 = 200;
 if (number2 % 2 == 0) {
    console.log('Четное число');
 } else {
    console.log(false);
 }

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.

const number3 = 300;
 if (number3 % 3 == 0) {
    console.log('Число кратно 3');
 } else {
    console.log(false);
 }


//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.

const number4 = 4;

if (number4 > 0 && number4 < 10) {
    console.log('Число однозначное');
} else {
    console.log(false);
}


//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.

const number5 = 55;

if (number5 >= 10 && number5 < 100) {
    console.log('Число двузначное');
} else {
    console.log(false);
}


//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.

const number6 = 0;

if (number6 >= 0) {
    console.log('Число положительное');
} else {
    console.log(false);
}


//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.

const number7 = 28;

if (number7 % 5 == 0 || number7 % 7 == 0) {
    console.log('Число кратно 5 или 7');
} else {
    console.log(false);
}

const number8 = 25;

if (number8 % 5 == 0) {
    console.log('Число кратно 5');
} else if (number8 % 7 == 0) {
    console.log('Число кратно 5');
} else {
    console.log(false);
}

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.

const number9 = -9;

if (number9 <= 0) {
    console.log('Число отрицательное или 0');
} else {
    console.log(false);
}


//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.

const number10 = 159;

if (number10 >= 100 && number10 < 1000) {
    console.log('Число трехзначное');
} else {
    console.log(false);
}

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).

// (dayNumber == Number && dayNumber > 0 && dayNumber <=7) {  

let dayNumber = 5;

switch (dayNumber) { 
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вторник')
        break;
    case 3:
        console.log('Среда')
        break;
    case 4:
        console.log('Четверг')
        break;
    case 5:
        console.log('Пятница')
        break;
    case 6:
        console.log('Суббота')
        break;
    case 7:
        console.log('Воскресенье')
        break;
    default:
        console.log('Неизвестный день недели')
}


//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';
let fullName;

switch (direction) {
    case "N":
        console.log('Север');
        break;
    case "S":
        console.log('Юг')
        break;
    case "E":
        console.log('Восток')
        break;
    case "W":
        console.log('Запад')
        break;

    default:
        console.log('Неизвестный')
}
