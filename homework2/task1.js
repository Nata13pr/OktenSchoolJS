// Масиви та об'єкти:

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const array = ['Natali', 'Nina', 'Mykola', 'Slava', false, 'Mychailo', 'Andrij', true, 'Lesja', 13];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const firstBook = {
    title: 'firstBook',
    pageCount: 395,
    genre: 'novel'
}

console.log(firstBook);

const secondBook = {
    title: 'secondBook',
    pageCount: 450,
    genre: 'detective'
}

console.log(secondBook)

const thirdBook = {
    title: 'thirdBook',
    pageCount: 150,
    genre: 'poem'
}

console.log(thirdBook)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

const novelBook = {
    title: 'novelBook',
    pageCount: 395,
    genre: 'novel',
    authors: [{name: 'Arthur', age: 70}]
}

console.log(novelBook)

const detectiveBook = {
    title: 'detectiveBook',
    pageCount: 450,
    genre: 'detective',
    authors: [{name: 'Mykola', age: 57}]
}

console.log(detectiveBook)

const poemBook = {
    title: 'poemBook',
    pageCount: 150,
    genre: 'poem',
    authors: [{name: 'Nazar', age: 78}]
}

console.log(poemBook)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

const arrayOfObjects = [
    {name: 'Nata', username: 'nata', password: '1111'},
    {name: 'Masha', username: 'masha', password: '2222'},
    {name: 'Dasha', username: 'dasha', password: '3333'},
    {name: 'Misha', username: 'misha', password: '4444'},
    {name: 'Nina', username: 'nina', password: '5555'},
    {name: 'Kolja', username: 'kolja', password: '6666'},
    {name: 'Andrij', username: 'andrij', password: '7777'},
    {name: 'Nazar', username: 'nazar', password: '8888'},
    {name: 'Maryna', username: 'maryna', password: '9999'},
    {name: 'Karina', username: 'Karina', password: '1010'}

];
console.log(arrayOfObjects[0]["password"]);
console.log(arrayOfObjects[1]["password"]);
console.log(arrayOfObjects[2]["password"]);
console.log(arrayOfObjects[3]["password"]);
console.log(arrayOfObjects[4]["password"]);
console.log(arrayOfObjects[5]["password"]);
console.log(arrayOfObjects[6]["password"]);
console.log(arrayOfObjects[7]["password"]);
console.log(arrayOfObjects[8]["password"]);
console.log(arrayOfObjects[9]["password"]);
