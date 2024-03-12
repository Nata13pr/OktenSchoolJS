// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// const helloWorld = 'hello world';
//
// console.log(helloWorld.length);
//
// const loremIpsum = 'lorem ipsum';
//
// console.log(loremIpsum.length);
//
// const javascriptIsCool = 'javascript is cool';
//
// console.log(javascriptIsCool.length);
//
// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// const helloWorldToUpperCase = helloWorld.toUpperCase();
//
// console.log(helloWorldToUpperCase);
//
// const loremIpsumToUpperCase = loremIpsum.toUpperCase();
//
// console.log(loremIpsumToUpperCase);
//
// const javascriptIsCoolToUpperCase = javascriptIsCool.toUpperCase();
//
// console.log(javascriptIsCoolToUpperCase);
//
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// const helloWorldToLowerCase = helloWorldToUpperCase.toLowerCase();
//
// console.log(helloWorldToLowerCase);
//
// const loremIpsumToLowerCase = loremIpsumToUpperCase.toLowerCase();
//
// console.log(loremIpsumToLowerCase)
//
// const javascriptIsCoolToLowerCase = javascriptIsCoolToUpperCase.toLowerCase();
//
// console.log(javascriptIsCoolToLowerCase)
//
// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let dirtyString = ' dirty string   ';
//
// console.log(dirtyString.trim());
//
//
// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// //     let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str = 'Ревуть воли як ясла повні';
//
// function swingStringToArray(str) {
//     return str.split(' ')
// }
//
// console.log(swingStringToArray(str))
//
// // є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//
// const numberArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
//
// const newMappedArray = numberArray.map(item => item.toString());
//
// console.log(newMappedArray);
//
// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// //     let nums = [11,21,3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11, 21, 3];
//
// function sortNums(arr, direction) {
//     if (direction === 'ascending') {
//         return arr.sort((a, b) => a - b)
//     } else {
//         return arr.sort((a, b) => b - a)
//     }
// }
//
// console.log('Ascending', sortNums(nums, 'ascending'));// [3,11,21]
// console.log('Descending', sortNums(nums, 'descending'))// [21,11,3]
//
// // - є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // -- відсортувати його за спаданням за monthDuration
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// console.log('Unchanged array', coursesAndDurationArray);
//
// // -- відсортувати його за спаданням за monthDuration
//
// const coursesAndDurationArrayDescending = coursesAndDurationArray.sort((item1, item2) => {
//     return item1.monthDuration - item2.monthDuration;
// });
//
// console.log('Sorted array', coursesAndDurationArrayDescending);
//
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// const coursesAndDurationArrayFiltered = coursesAndDurationArray.filter(item => item.monthDuration > 5
// )
//
// console.log('Filtered array', coursesAndDurationArrayFiltered);
//
// // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration};
//
// const coursesAndDurationArrayChangedByMap = coursesAndDurationArray.map((item, index) => {
//     return {id: index + 1, title: item.title, monthDuration: item.monthDuration}
// })
//
// console.log('Mapped array', coursesAndDurationArrayChangedByMap);
//
// // описати колоду карт (від 6 до туза без джокерів)
// // {
// //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
// //     color:'', // 'red','black'
// // }
// const cards = [
//     {
//         cardSuit: 'heart',
//         value: '6',
//         color: 'red',
//     },
//     {
//         cardSuit: 'diamond',
//         value: '6',
//         color: 'red',
//     },
//     {
//         cardSuit: 'spade',
//         value: '6',
//         color: 'black',
//     },
//     {
//         cardSuit: 'clubs',
//         value: '6',
//         color: 'black',
//     },
//     {
//         cardSuit: 'clubs',
//         value: '7',
//         color: 'black',
//     },
//     {
//         cardSuit: 'spade',
//         value: '7',
//         color: 'black',
//     },
//     {
//         cardSuit: 'diamond',
//         value: '7',
//         color: 'red',
//     },
//     {
//         cardSuit: 'heart',
//         value: '7',
//         color: 'red',
//     },
//     {
//         cardSuit: 'clubs',
//         value: '8',
//         color: 'black',
//     },
//     {
//         cardSuit: 'spade',
//         value: '8',
//         color: 'black',
//     },
//     {
//         cardSuit: 'diamond',
//         value: '8',
//         color: 'red',
//     },
//     {
//         cardSuit: 'heart',
//         value: '8',
//         color: 'red',
//     },
//     {
//         cardSuit: 'clubs',
//         value: '9',
//         color: 'black',
//     },
//     {
//         cardSuit: 'spade',
//         value: '9',
//         color: 'black',
//     },
//     {
//         cardSuit: 'diamond',
//         value: '9',
//         color: 'red',
//     },
//     {
//         cardSuit: 'heart',
//         value: '9',
//         color: 'red',
//     },
//     {
//         cardSuit: 'clubs',
//         value: '10',
//         color: 'black',
//     },
//     {
//         cardSuit: 'spade',
//         value: '10',
//         color: 'black',
//     },
//     {
//         cardSuit: 'diamond',
//         value: '10',
//         color: 'red',
//     },
//     {
//         cardSuit: 'heart',
//         value: '10',
//         color: 'red',
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'jack',
//         color: 'black',
//     },
//     {
//         cardSuit: 'spade',
//         value: 'jack',
//         color: 'black',
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'jack',
//         color: 'red',
//     },
//     {
//         cardSuit: 'heart',
//         value: 'jack',
//         color: 'red',
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'queen',
//         color: 'black',
//     },
//     {
//         cardSuit: 'spade',
//         value: 'queen',
//         color: 'black',
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'queen',
//         color: 'red',
//     },
//     {
//         cardSuit: 'heart',
//         value: 'queen',
//         color: 'red',
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'king',
//         color: 'black',
//     },
//     {
//         cardSuit: 'spade',
//         value: 'king',
//         color: 'black',
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'king',
//         color: 'red',
//     },
//     {
//         cardSuit: 'heart',
//         value: 'king',
//         color: 'red',
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'ace',
//         color: 'black',
//     },
//     {
//         cardSuit: 'spade',
//         value: 'ace',
//         color: 'black',
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'ace',
//         color: 'red',
//     },
//     {
//         cardSuit: 'heart',
//         value: 'ace',
//         color: 'red',
//     },
// ]
//
// // - знайти піковий туз
// const findSpadeAce = cards.find(item => item.cardSuit === 'spade' && item.value === 'ace');
//
// console.log('Піковий туз', findSpadeAce)
//
// // всі шістки
//
// const allCardValueSix = cards.filter(item => item.value === '6');
//
// console.log("Всі шістки", allCardValueSix)
//
// // всі червоні карти
//
// const allRedCards = cards.filter(item => item.color === 'red');
//
// console.log('Всі червоні карти', allRedCards)
//
// // всі буби
//
// const allDiamondsCards = cards.filter(item => item.cardSuit === 'diamond')
//
// console.log('Всі буби', allDiamondsCards);
//
// // всі трефи від 9 та більше
//
// const allClubsCardsHigherCardValueNine = cards.filter(item => item.cardSuit === 'clubs' && (item.value === '9' || item.value === '10' || item.value === 'jack' || item.value === 'queen' || item.value === 'king' || item.value === 'ace'));
//
// console.log(allClubsCardsHigherCardValueNine)
//
// // Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// // {
// //     spades:[],
// //         diamonds:[],
// //     hearts:[],
// //     clubs:[]
// // }
//
// const cardsByReducer = cards.reduce((accumulator, item) => {
//     if (item.cardSuit === 'spade') {
//         accumulator.spades.push(item)
//     } else if (item.cardSuit === 'diamond') {
//         accumulator.diamonds.push(item)
//     } else if (item.cardSuit === 'heart') {
//         accumulator.hearts.push(item)
//     } else if (item.cardSuit === 'clubs') {
//         accumulator.clubs.push(item)
//     } else {
//         console.log('no match')
//     }
//     return accumulator;
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// })
//
// console.log(cardsByReducer);
//
// // взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
//
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// // --написати пошук всіх об'єктів, в який в modules є sass
//
// const allObjectWhoHasSass = coursesArray.filter(item => item.modules.includes('sass'));
//
// console.log('обєкти, в який в modules є sass', allObjectWhoHasSass)
//
// // --написати пошук всіх об'єктів, в який в modules є docker
//
// const allObjectsWhoHasDocker = coursesArray.filter(item => item.modules.includes('docker'));
//
// console.log('обєкти, в який в modules є docker', allObjectsWhoHasDocker)


// splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"
function splitAndMerge(string, separator) {
    return string.split(' ').map(word=>word.split('').join(separator)).join(' ')
}
// splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

console.log(splitAndMerge("My name is John", " ") )
console.log(splitAndMerge("My name is John", "-") )
console.log(splitAndMerge("Hello World!", ".") )
console.log(splitAndMerge("Hello World!", ",")  )
