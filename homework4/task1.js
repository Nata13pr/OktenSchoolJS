// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function sumOf(a, b) {
    return a * b
}

sumOf(2, 2)
console.log(sumOf(2, 2))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const p = 3.14;

function radiusOfCircle(r) {
    return p * (r * 2)
}

console.log(radiusOfCircle(7));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function sumOfCilynder(h, r) {
    return (2 * p) * r * h;
}

console.log(sumOfCilynder(5, 5))

// - створити функцію яка приймає масив та виводить кожен його елемент


function functionOfArray(array) {
    for (let i = 0; i <= array.length - 1; i += 1) {
        console.log(array[i])
    }
}

functionOfArray([1, 2, 4, 6, 8, 9, 'true', false, 'mom']);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraphWithText(text) {
    document.write(`<div>${text}</div>`)
}

paragraphWithText('Cow gives milk');

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


function listOfSameText(text) {
    document.write(`<ul>
                      <li>${text}</li>
                      <li>${text}</li>
                      <li>${text}</li>
                    </ul>`)


}


listOfSameText('fruit')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listOfSameTextWithCycle(text, number) {
    document.write(`<ul>`)
    for (let i = 1; i <= number; i += 1) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}


listOfSameTextWithCycle('vegetable', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function listOfArray(array) {
    document.write(`<ul>`)
    for (let i = 0; i < array.length; i += 1) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`)
}

listOfArray(['brother', false, 66, 'mom', true, 'sister', 77]);

// -створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function arrayOfObject(array) {

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

function smallestNumberFromArray(array) {
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

function sum(arr) {
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

function swap(arr, index1, index2) {
    const firstSwapElement = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = firstSwapElement;

    console.log(arr)
}

swap(swapArray, 4, 3)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let exchanged = 0;

    for (let i = 0; i <= currencyValues.length - 1; i += 1) {
        if (currencyValues[i].currency === exchangeCurrency) {
            exchanged = sumUAH / currencyValues[i].value;
        }
    }
    console.log(exchanged)
}

exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD')

// Additional по масивам

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

const arrayOfBooks = [
    {
        name: 'Wolf',
        pages: 56,
        authors: ['Mykola', 'Nina'],
        genres: ['detective', 'poem', 'novel']
    },
    {
        name: 'Monkey',
        pages: 98,
        authors: ['Andrew', 'Misha', 'Petro', 'Vasja'],
        genres: ['detective', 'horror']
    },
    {
        name: 'Dog',
        pages: 33,
        authors: ['Mykola', 'Michail', 'Kostja', 'Morkvas', 'Deputat'],
        genres: ['detective']
    },
    {
        name: 'Cat',
        pages: 56,
        authors: ['Mykola', 'Nina', 'Vasja', 'Sveta'],
        genres: ['detective', 'poem', 'novel', 'thriller']
    },
    {
        name: 'Rabbit',
        pages: 78,
        authors: ['Nina'],
        genres: ['detective', 'poem', 'novel']
    },
    {
        name: 'Cow',
        pages: 65,
        authors: ['Mykola', 'Sveta'],
        genres: ['detective', 'poem', 'novel']
    },
    {
        name: 'Sheep',
        pages: 13,
        authors: ['Sveta'],
        genres: ['detective', 'poem', 'novel', 'thriller']
    },
];

// -знайти наібльшу книжку.

let biggestBook = 0;

for (let i = 0; i <= arrayOfBooks.length - 1; i += 1) {

    if (arrayOfBooks[i].pages > biggestBook) {
        biggestBook = arrayOfBooks[i].pages
    }
}

console.log('Найбльша книжка', biggestBook);

// - знайти книжку/ки з найбільшою кількістю жанрів
let richesWithGenres = [];
console.log(richesWithGenres)
for (let i = 0; i <= arrayOfBooks.length - 1; i += 1) {
    richesWithGenres[richesWithGenres.length] = arrayOfBooks[i].name;
}
console.log(richesWithGenres)


// ===========

let bookRichestWithGenres = 0;
let autherBookRichestWithGenres = '';

console.log(bookRichestWithGenres)

for (let i = 0; i <= arrayOfBooks.length - 1; i += 1) {
    if (arrayOfBooks[i].genres.length > bookRichestWithGenres) {
        bookRichestWithGenres = arrayOfBooks[i].genres.length;
        autherBookRichestWithGenres = arrayOfBooks[i].name
    }
}
console.log(autherBookRichestWithGenres)

// - знайти книжку/ки з найдовшою назвою

let longestName = arrayOfBooks[0].name;
console.log(longestName)

for (let i = 0; i <= arrayOfBooks.length - 1; i += 1) {
    if (arrayOfBooks[i].name.length > longestName.length) {
        longestName = arrayOfBooks[i].name;
    }
}
console.log('книжка з найдовшою назвою', longestName);

// =========

const arrayOfBooksWIthLongestName = [];

for (let i = 0; i <= arrayOfBooks.length - 1; i += 1) {
    if (arrayOfBooks[i].name.length > 0) {
        arrayOfBooksWIthLongestName[arrayOfBooksWIthLongestName.length] = arrayOfBooks[i].name
    }
}

console.log(arrayOfBooksWIthLongestName);

// - знайти книжку/ки які писали 2 автори
const arrayWithBooksWrittenByTwoAuthors=[];

for (let i=0;i<=arrayOfBooks.length-1;i+=1){

    if (arrayOfBooks[i].authors.length===2){
        arrayWithBooksWrittenByTwoAuthors[arrayWithBooksWrittenByTwoAuthors.length]=arrayOfBooks[i]
    }
}

console.log('книжки які писали 2 автори',arrayWithBooksWrittenByTwoAuthors)

// - знайти книжку/ки які писав 1 автор
const booksArrayWrittenByOneAuthor=[];

for(let i=0;i<=arrayOfBooks.length-1;i+=1){
    if(arrayOfBooks[i].authors.length===1){
        booksArrayWrittenByOneAuthor[booksArrayWrittenByOneAuthor.length]=arrayOfBooks[i]
    }
}

console.log('книжки які писав 1 автор',booksArrayWrittenByOneAuthor)