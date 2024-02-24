// Логічні розгалуження:


// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 13;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}

let a = 1;

if (a !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

a = 0;

if (a !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

a = -3;
if (a !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time;

time = 54;

if (time >= 0 && time <= 15) {
    console.log(` Число ${time} попадає в першу частину години`)
} else if (time > 15 && time <= 30) {
    console.log(` Число ${time} попадає в другу частину години`)
} else if (time > 30 && time <= 45) {
    console.log(` Число ${time} попадає в третю частину години`)
} else if (time > 45 && time <= 60) {
    console.log(` Число ${time} попадає в четверту частину години`)
} else {
    console.log(`Число ${time} не входить в проміжок між 0 і 60`);
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day;

day = 4

if (day >= 1 && day <= 10) {
    console.log(`Число ${day} потрапляє в першу половину(декаду) місяця`)
} else if (day > 10 && day <= 20) {
    console.log(`Число ${day} потрапляє в другу половину(декаду) місяця`)
} else if (day < 20 && day <= 31) {
    console.log(`Число ${day} потрапляє в третю половину(декаду) місяця`)
} else {
    console.log(`Число ${day} не потрапляє в проміжок між 1 і 31 числом`)
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayOfTheWeek = Number(prompt('День тижня?'))

switch (dayOfTheWeek) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5 :
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log(` The number ${dayOfTheWeek} does not match any of the specified ranges.`)
}

// - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let firstNumber = Number(prompt('Введи перше число'));

let secondNumber = Number(prompt('Введи друге число'));

if (firstNumber > secondNumber) {
    console.log(`${firstNumber} більше ніж ${secondNumber}`)
} else if (firstNumber < secondNumber) {
    console.log(`${firstNumber} менше ніж ${secondNumber}`)
} else if (firstNumber === secondNumber) {
    console.log(`${secondNumber} дорівнює ${firstNumber}`)
} else {
    console.log("Потрібно ввести цифри,а не букви")
}