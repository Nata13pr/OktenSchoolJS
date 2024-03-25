// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const form = document.form;

const newDiv = document.createElement('div');
document.body.appendChild(newDiv);

form.onsubmit = function (e) {
    e.preventDefault();
    let obj = {
        name: this.userName.value,
        surname: this.surname.value,
        age: this.age.value
    }
    const newObj = Object.keys(obj);
    for (const key of newObj) {
        const p = document.createElement('p');
        p.innerText = `${key} - ${obj[key]}`;
        newDiv.appendChild(p)
    }
    this.userName.value = ''
    this.surname.value = ''
    this.age.value = ''
}

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let number = '1';

const blockWithNumber = document.createElement('div');


if (!localStorage.getItem('number')) {
    localStorage.setItem('number', number)
} else {
    let newNumber = localStorage.getItem('number');
    localStorage.setItem('number', newNumber + 1);

    const anotherNumber = localStorage.getItem('number')
    number = anotherNumber.length;
}

blockWithNumber.innerText = String(number);
document.body.appendChild(blockWithNumber);

// secondVersion
let number1 = 1;

const blockWithNumber1 = document.createElement('div');


if (!localStorage.getItem('number1')) {
    localStorage.setItem('number1', String(number1))
} else {
    let newNumber = localStorage.getItem('number1');
    number1 = Number(newNumber) + 1;
    localStorage.setItem('number1', String(number1));
}
blockWithNumber1.innerText = String(number1);
document.body.appendChild(blockWithNumber1);

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

// version1
const version1Div = document.createElement('h1');
version1Div.innerText = 'Version 1'
const divWith10Object = document.createElement('div');
const buttonOfPreviousTenObjects = document.createElement('button');
buttonOfPreviousTenObjects.innerText = 'Previous';
const buttonOfNextTenObjects = document.createElement('button');
buttonOfNextTenObjects.innerText = 'Next';
document.body.append(version1Div, divWith10Object, buttonOfPreviousTenObjects, buttonOfNextTenObjects);

const arrayWith100OObjects = [];

for (let i = 0; i < 100; i += 1) {
    let newObj = {
        id: i,
        name: `Nata - ${i}`,
        age: 16 + i
    }
    arrayWith100OObjects.push(newObj)
}

let currentIndex = 0;

function showArray() {
    divWith10Object.textContent = '';
    const endIndex = Math.min(currentIndex + 10, arrayWith100OObjects.length)
    for (let i = currentIndex; i < endIndex; i += 1) {
        const h2 = document.createElement('h2');
        h2.innerText = `Object element with ${arrayWith100OObjects[i].id} id`
        const id = document.createElement('p');
        id.innerText = `ID - ${arrayWith100OObjects[i].id}`;
        const name = document.createElement('p');
        name.innerText = `Name - ${arrayWith100OObjects[i].name}`;
        const age = document.createElement('p');
        age.innerText = `Age - ${arrayWith100OObjects[i].age}`
        divWith10Object.append(h2, id, name, age)
    }
}

showArray()

buttonOfNextTenObjects.addEventListener('click', () => {
    currentIndex += 10;
    showArray()
})

buttonOfPreviousTenObjects.addEventListener('click', () => {
    currentIndex -= 10;
    if (currentIndex < 0) {
        currentIndex = 0
    }
    showArray()
})

// version2
const version2Div = document.createElement('h1');
version2Div.innerText = 'Version 2'
const divWith10Object2 = document.createElement('div');
const buttonOfPreviousTenObjects2 = document.createElement('button');
buttonOfPreviousTenObjects2.innerText = 'Previous';
const buttonOfNextTenObjects2 = document.createElement('button');
buttonOfNextTenObjects2.innerText = 'Next';
document.body.append(version2Div, divWith10Object2, buttonOfPreviousTenObjects2, buttonOfNextTenObjects2);

const arrayWith100OObjects2 = [];

for (let i = 0; i < 100; i += 1) {
    let newObj = {
        id: i,
        name: `Nata - ${i}`,
        age: 16 + i
    }
    arrayWith100OObjects2.push(newObj)
}
let currentIndex2 = 0;
let endIndex2 = 10;


function showArray2() {
    divWith10Object2.textContent = '';
    // const endIndex = Math.min(currentIndex + 10, arrayWith100OObjects.length)
    for (let i = currentIndex2; i < endIndex2; i += 1) {
        const h2 = document.createElement('h2');
        h2.innerText = `Object element with ${arrayWith100OObjects2[i].id} id`
        const id = document.createElement('p');
        id.innerText = `ID - ${arrayWith100OObjects2[i].id}`;
        const name = document.createElement('p');
        name.innerText = `Name - ${arrayWith100OObjects2[i].name}`;
        const age = document.createElement('p');
        age.innerText = `Age - ${arrayWith100OObjects2[i].age}`
        divWith10Object2.append(h2, id, name, age)
    }
}

showArray2()

buttonOfNextTenObjects2.addEventListener('click', () => {
    if (endIndex2 < arrayWith100OObjects2.length - 1) {
        currentIndex2 += 10;
        endIndex2 += 10;
        showArray2()
    }

})

buttonOfPreviousTenObjects2.addEventListener('click', () => {
    if (currentIndex2 > 0) {
        currentIndex2 -= 10;
        endIndex2 -= 10;
        if (currentIndex2 < 0) {
            currentIndex2 = 0
        }
        showArray2()
    }

})

// version3
const version3Div = document.createElement('h1');
version3Div.innerText = 'Version 3'
const divWith10Object3 = document.createElement('div');
const buttonOfPreviousTenObjects3 = document.createElement('button');
buttonOfPreviousTenObjects3.innerText = 'Previous';
const buttonOfNextTenObjects3 = document.createElement('button');
buttonOfNextTenObjects3.innerText = 'Next';
document.body.append(version3Div, divWith10Object3, buttonOfPreviousTenObjects3, buttonOfNextTenObjects3);

const arrayWith100OObjects3 = [];

for (let i = 0; i < 100; i += 1) {
    let newObj = {
        id: i,
        name: `Nata - ${i}`,
        age: 16 + i
    }
    arrayWith100OObjects3.push(newObj)
}
let page = 1;
const pageSize = 10;


function showArray3() {
    let start = (page - 1) * pageSize;
    let end = page * pageSize;

    divWith10Object3.textContent = '';

    const newArrayPerPage = arrayWith100OObjects3.slice(start, end)

    for (let i = 0; i < newArrayPerPage.length; i += 1) {
        const h2 = document.createElement('h2');
        h2.innerText = `Object element with ${newArrayPerPage[i].id} id`

        const id = document.createElement('p');
        id.innerText = `ID - ${newArrayPerPage[i].id}`;

        const name = document.createElement('p');
        name.innerText = `Name - ${newArrayPerPage[i].name}`;

        const age = document.createElement('p');
        age.innerText = `Age - ${newArrayPerPage[i].age}`

        divWith10Object3.append(h2, id, name, age)
    }
}

showArray3()

buttonOfNextTenObjects3.addEventListener('click', () => {
    if (page < arrayWith100OObjects3.length / page) {
        page += 1
        showArray3()
    }
})

buttonOfPreviousTenObjects3.addEventListener('click', () => {
    if (page > 1) {
        page -= 1;
        showArray3()
    }
})

