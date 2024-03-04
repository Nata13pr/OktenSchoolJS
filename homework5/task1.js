//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const sumOf = (a, b) => a * b;

sumOf(2, 2)

console.log(sumOf(2, 2))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const p = 3.14;

const radiusOfCircle = (r) => p * (r * 2)

console.log(radiusOfCircle(7));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const sumOfCilynder = (h, r) => (2 * p) * r * h;

console.log(sumOfCilynder(5, 5))

// - створити функцію яка приймає масив та виводить кожен його елемент


const functionOfArray = (array) => {
    for (let i = 0; i <= array.length - 1; i += 1) {
        console.log(array[i])
    }
}

functionOfArray([1, 2, 4, 6, 8, 9, 'true', false, 'mom']);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const paragraphWithText = (text) => {
    document.write(`<div>${text}</div>`)
}

paragraphWithText('Cow gives milk');

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


const listOfSameText = (text) => {
    document.write(`<ul>
                      <li>${text}</li>
                      <li>${text}</li>
                      <li>${text}</li>
                    </ul>`)
}


listOfSameText('fruit')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const listOfSameTextWithCycle = (text, number) => {
    document.write(`<ul>`)
    for (let i = 1; i <= number; i += 1) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}


listOfSameTextWithCycle('vegetable', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const listOfArray = (array) => {
    document.write(`<ul>`)
    for (let i = 0; i < array.length; i += 1) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`)
}

listOfArray(['brother', false, 66, 'mom', true, 'sister', 77]);

// -створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const arrayOfObject = (array) => {

    for (let i = 0; i <= array.length - 1; i += 1) {
        document.write(`<div>`)
        document.write(`
                  <div>id - ${array[i].id}</div>
                  <div>name - ${array[i].name}</div>
                  <div>age - ${array[i].age}</div>
`)
        document.write(`</div>`)
    }

}


const people = [
    {id: 1, name: 'Nata', age: 35},
    {id: 2, name: 'Kolja', age: 33},
    {id: 3, name: 'Slava', age: 39}
]
arrayOfObject(people)

// - створити функцію яка повертає найменьше число з масиву

const smallestNumberFromArray = (array) => {
    let smallest = array[0];
    for (let i = 0; i <= array.length - 1; i += 1) {
        if (array[i] < smallest) {
            smallest = array[i];
        }
    }
    console.log('smallest', smallest)
}

const arrayWithNumbers = [2, 5, 7, 59, 5, 3, 44];
smallestNumberFromArray(arrayWithNumbers);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = (arr) => {
    let total = 0;
    for (let i = 0; i <= arr.length - 1; i += 1) {
        total += arr[i];
    }
    console.log('total', total)
}

const arrayForSumOfNumbers = [3, 4, 5, 9, 555];

sum(arrayForSumOfNumbers);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

const swapArray = [3, 4, 7, 8, 9, 0, 4, 3, 2,];
console.log(swapArray);

const swap = (arr, index1, index2) => {
    const firstSwapElement = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = firstSwapElement;

    console.log(arr)
}

swap(swapArray, 4, 3)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let exchanged = 0;

    for (let i = 0; i <= currencyValues.length - 1; i += 1) {
        if (currencyValues[i].currency === exchangeCurrency) {
            exchanged = sumUAH / currencyValues[i].value;
        }
    }
    console.log(exchanged)
}

exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD')
