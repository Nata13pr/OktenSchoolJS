// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 1; i <= 10; i += 1) {
//     document.write("<div>Out with the old, in with the new!</div>");
// }
//
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 1; i <= 10; i += 1) {
//     document.write(`<div>Індекс - ${i} <br> Out with the old, in with the new! </div>`)
// }
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let i=1;
//
// while (i<=20) {
//     document.write('<h1>Out with the old, in with the new! </h1>');
//     i+=1;
// }
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let j=1;
//
// while (j<=20){
//     document.write(`<h1>Індекс - ${j} <br> Out with the old, in with the new! </h1>`);
//     j+=1;
// }
//
// // - Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру по шаблону
// // Масив:
// //
// //     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// //
// // ШАБЛОН:
// //     <ul>
// //         <li>ITEM OF ARRAY</li>
// //         <!--
// //             і тд інші об'єкти масиву
// //              ...
// //              ...
// //              ...
// //         -->
// //     </ul>
//
// // замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
// for (let m=0;m<=listOfItems.length-1;m+=1){
//     document.write(`<ul>${listOfItems[m]}</ul>`)
// }
// document.write(`</ul>`)
//
//
// // Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру по шаблону
// // Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// // let products = [
// //     {
// //         title: 'milk',
// //         price: 22,
// //         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
// //     },
// //     {
// //         title: 'juice',
// //         price: 27,
// //         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
// //     },
// //     {
// //         title: 'tomato',
// //         price: 47,
// //         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
// //     },
// //     {
// //         title: 'tea',
// //         price: 15,
// //         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
// //     },
// // ];
// //
// // ШАБЛОН
// // <div class="product-card">
// //     <h3 class="product-title">TITLE. Price - PRICE</h3>
// // <img src="IMAGE" alt="" class="product-image">
// // </div>
// // Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
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
// for(const product in products){
//     document.write(`<div class="product-card">
//     <h3 class="product-title">${products[product].title}. Price - ${products[product].price}</h3>
//  <img src="${products[product].image}" alt="" class="product-image">
//  </div>`)
// }
//
// // є масив
// // let users = [
// //     {name: 'vasya', age: 31, status: false},
// //     {name: 'petya', age: 30, status: true},
// //     {name: 'kolya', age: 29, status: true},
// //     {name: 'olya', age: 28, status: false},
// //     {name: 'max', age: 30, status: true},
// //     {name: 'anya', age: 31, status: false},
// //     {name: 'oleg', age: 28, status: false},
// //     {name: 'andrey', age: 29, status: true},
// //     {name: 'masha', age: 30, status: true},
// //     {name: 'olya', age: 31, status: false},
// //     {name: 'max', age: 31, status: true}
// // ];
// // за допомоги циклу вивести:
// //     - користувачів зі статусом true
// // - користувачів зі статусом false
// // - користувачів які старші за 30 років
//
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
//
// // за допомоги циклу вивести:
// //     - користувачів зі статусом true
// for(const user in users){
//     if(users[user].status)
//     console.log('Користувач зі статусом true',users[user].name)
// }
//
// // за допомоги циклу вивести:
// // - користувачів зі статусом false
// for (const user in users){
//     if(!users[user].status){
//         console.log('Користувач зі статусом false',users[user].name)
//     }
// }
//
// // за допомоги циклу вивести:
// // - користувачів які старші за 30 років
// for (const user in users){
//     if(users[user].age>30){
//         console.log('Користувач старше за 30 років',users[user].name)
//     }
// }
//
// // --створити масив з:
// //     - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль
//
// const numberArray=[23,45,67,8,99];
// console.log(numberArray);
//
// const stringArray=['Nina','Kolja','Misha','Slava','Lesja'];
// console.log(stringArray);
//
// const mixedArray=[76,'dad',true,65,'mom'];
// console.log(mixedArray);
//
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// const emptyArray=[];
//
//
// emptyArray[0]='brother';
// emptyArray[1]=78;
// emptyArray[2]='sister';
// emptyArray[3]=true;
// emptyArray[4]=105;
// console.log(emptyArray)
//  -------
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед);


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
while (w < arrayWithNumbers.length) {
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
for (let i=arrayWithNumbers.length-1;i<=0;i-=1){
    console.log('ggg')
    // console.log('масив в зворотньому порядку',arrayWithNumbers[i])
}

