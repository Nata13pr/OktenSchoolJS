// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 1; i <= 10; i += 1) {
    document.write("<div>Out with the old, in with the new!</div>");
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 1; i <= 10; i += 1) {
    document.write(`<div>Індекс - ${i} <br> Out with the old, in with the new! </div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i=1;

while (i<=20) {
    document.write('<h1>Out with the old, in with the new! </h1>');
    i+=1;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let j=1;

while (j<=20){
    document.write(`<h1>Індекс - ${j} <br> Out with the old, in with the new! </h1>`);
    j+=1;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>

// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
for (let m=0;m<=listOfItems.length-1;m+=1){
    document.write(`<ul>${listOfItems[m]}</ul>`)
}
document.write(`</ul>`)


// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for(const product in products){
    document.write(`<div class="product-card">
    <h3 class="product-title">${products[product].title}. Price - ${products[product].price}</h3>
 <img src="${products[product].image}" alt="" class="product-image">
 </div>`)
}

// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// за допомоги циклу вивести:
//     - користувачів зі статусом true
for(const user in users){
    if(users[user].status)
    console.log('Користувач зі статусом true',users[user].name)
}

// за допомоги циклу вивести:
// - користувачів зі статусом false
for (const user in users){
    if(!users[user].status){
        console.log('Користувач зі статусом false',users[user].name)
    }
}

// за допомоги циклу вивести:
// - користувачів які старші за 30 років
for (const user in users){
    if(users[user].age>30){
        console.log('Користувач старше за 30 років',users[user].name)
    }
}

// Additional

// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

const numberArray=[23,45,67,8,99];
console.log(numberArray);

const stringArray=['Nina','Kolja','Misha','Slava','Lesja'];
console.log(stringArray);

const mixedArray=[76,'dad',true,65,'mom'];
console.log(mixedArray);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
const emptyArray=[];


emptyArray[0]='brother';
emptyArray[1]=78;
emptyArray[2]='sister';
emptyArray[3]=true;
emptyArray[4]=105;
console.log(emptyArray)


// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
const arrayWithNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let a = 0;
while (a <= arrayWithNumbers.length - 1) {
    console.log('цикл while', arrayWithNumbers[a])
    a += 1;
}

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
//     2. перебрати його циклом for
for (let i = 0; i <= arrayWithNumbers.length - 1; i += 1) {
    console.log('цикл for', arrayWithNumbers[i])
}

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let b = 0;
while (b <= arrayWithNumbers.length - 1) {
    if (!b % 2 === 0) {
        console.log('Числа тільки з непарним індексом,циклом while', arrayWithNumbers[b])
    }
    b += 1;
}

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < arrayWithNumbers.length; i += 1) {
    if (!i % 2 === 0) {
        console.log('Числа тільки з непарним індексом,циклом for', arrayWithNumbers[i])
    }
}

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 5. перебрати циклом while та вивести  числа тільки парні  значення

let w = 0;
while (w < arrayWithNumbers.length - 1) {
    if (arrayWithNumbers[w] % 2 === 0) {
        console.log('Парне  значення,цикл while', arrayWithNumbers[w])
    }
    w += 1;
}

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < arrayWithNumbers.length; i += 1) {
    if (arrayWithNumbers[i] % 2 === 0) {
        console.log('Парне  значення,цикл for', arrayWithNumbers[i])
    }
}

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < arrayWithNumbers.length; i += 1) {
    console.log(arrayWithNumbers[i])
    if (arrayWithNumbers[i] % 3 === 0) {
        arrayWithNumbers[i] = "okten"
    }
}
console.log(arrayWithNumbers);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 8. вивести масив в зворотньому порядку.
console.log(arrayWithNumbers.length - 1)
for (let i = arrayWithNumbers.length - 1; i >= 0; i -= 1) {

    console.log('масив в зворотньому порядку', arrayWithNumbers[i])
}

const secondArrayWithNumbers=[2,17,13,6,22,31,45,66,100,-18]

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед);
// 1. перебрати його циклом while
let c = secondArrayWithNumbers.length - 1;
while (c >= 0) {
    console.log('цикл while,с заду на перед', secondArrayWithNumbers[c])
    c -= 1;
}

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед);
//     2. перебрати його циклом for
for (let i = secondArrayWithNumbers.length - 1; i >= 0; i -= 1) {
    console.log('цикл for,с заду на перед', secondArrayWithNumbers[i])
}

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед);
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let d = secondArrayWithNumbers.length - 1;
while (d >= 0) {
    if (!d % 2 === 0) {
        console.log('Числа тільки з непарним індексом,циклом while,с заду на перед', secondArrayWithNumbers[d])
    }
    d -= 1;
}

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед);
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = secondArrayWithNumbers.length -1; i > 0; i -= 1) {
    if (!i % 2 === 0) {
        console.log('Числа тільки з непарним індексом,циклом for,с заду на перед', secondArrayWithNumbers[i])
    }
}

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед);
// 5. перебрати циклом while та вивести  числа тільки парні  значення

let v = secondArrayWithNumbers.length - 1;
while (v >= 0) {
    if (secondArrayWithNumbers[v] % 2 === 0) {
        console.log('Парне  значення,цикл while,с заду на перед', secondArrayWithNumbers[v])
    }
    v -= 1;
}

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед);
// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = secondArrayWithNumbers.length - 1; i >= 0; i -= 1) {
    if (secondArrayWithNumbers[i] % 2 === 0) {
        console.log('Парне  значення,цикл for,с заду на перед', secondArrayWithNumbers[i])
    }
}

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед);
// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = secondArrayWithNumbers.length - 1; i >0; i -= 1) {
    console.log(secondArrayWithNumbers[i])
    if (secondArrayWithNumbers[i] % 3 === 0) {
        secondArrayWithNumbers[i] = "okten"
    }
}
console.log(secondArrayWithNumbers);



// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
const firstArray=[4,5,6,7,8,7,6,5,4,3];

for (let i=0;i<=firstArray.length- 1;i+=1){
    console.log(`${i}-ий елемент в циклі firstArray`,firstArray[i])
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
const secondArray=['potato','orange','kiwi','bread','egg','water','onion','cabbage','soup','meat'];

for (i=0;i<=secondArray.length - 1;i+=1){
    console.log(`${i}-ий елемент в циклі secondArray`,secondArray[i])
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
const thirdArray  =[true,'mom',89,false,'dad',44,'brother',77,false,22];

for(let i=0;i<=thirdArray.length - 1;i+=1){
    console.log(`${i}-ий елемент в циклі thirdArray`,thirdArray[i])
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
const fourthArray=[true,false,5555,'goat',true,'camel',666,'turtle',false,'bedroom'];

for (let i=0;i<=fourthArray.length - 1;i+=1){
    if(typeof fourthArray[i]==="boolean"){
        console.log('Тільки булеві елементи',fourthArray[i])
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
const fifthArray=[90,false,33,'bye',11,false,'socks','car',45,true];

for (let i=0;i<=fifthArray.length - 1;i+=1){
    if(typeof fifthArray[i]==='number'){
        console.log('Тільки числові елементи',fifthArray[i])
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
const sixthArray=[9,'potato',false,'orange',13,'cocos',11,true,'pineapple',999];

for(let i=0;i<=sixthArray.length-1;i+=1){
    if(typeof sixthArray[i]==='string'){
        console.log('Тільки рядкові елементи',sixthArray[i])
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
const firstEmptyArray=[];

firstEmptyArray[0]='potato';
firstEmptyArray[1]=true;
firstEmptyArray[2]=99;
firstEmptyArray[3]=false;
firstEmptyArray[4]='mom';
firstEmptyArray[5]=44;
firstEmptyArray[6]=11;
firstEmptyArray[7]='string';
firstEmptyArray[8]=true;
firstEmptyArray[9]='home';

console.log(firstEmptyArray);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i=0;i<10;i+=1){
    console.log('з кроком 1',i);
    document.write(i)
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for(let i=0;i<100;i+=2){
    console.log('з кроком 2',i);
    document.write(i)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i=0;i<100;i+=1){
    if(i%2===0){
        console.log('тільки парні кроки',i);
        document.write(i)
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for(let i=0;i<100;i+=1){
    if(!(i%2===0)){
        console.log('тільки непарні кроки',i);
        document.write(i)
    }
}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

const booksArray=[{name:'Flowers',pages:78,authors:['Vasja','Kolja']}]