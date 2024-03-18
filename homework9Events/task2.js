// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const textDiv = document.createElement('div');
textDiv.setAttribute(`id`, 'text');
textDiv.style.width = '100px';
textDiv.style.height = '100px'
textDiv.style.backgroundColor = 'turquoise'
const button = document.createElement('button');
button.innerText = 'Toggle';
document.body.append(textDiv, button);

button.addEventListener('click', () => {
    textDiv.style.display === 'none' ? textDiv.style.display = 'block' : textDiv.style.display = 'none'
})

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const ageForm = document.createElement('form');
document.body.appendChild(ageForm);
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'age')
const submitButton = document.createElement('button');
submitButton.innerText = 'Submit'
ageForm.append(input, submitButton);

let h2 = document.createElement('h2');
document.body.appendChild(h2)
ageForm.addEventListener('submit', function (e) {
    e.preventDefault();
    h2.innerText = '';
    if (Number(input.value) >= 18 && Number(input.value) <= 120) {
        h2.innerText = `Age is ${input.value},you are adult`;
    } else if (Number(input.value) < 18) {
        h2.innerText = `Age is ${input.value},it is  less than  18 years old `
    } else {
        h2.innerText = 'You have to write numbers or age below 120 '
    }
})
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

const formWithThreeInputs = document.createElement('form');
document.body.appendChild(formWithThreeInputs);
const amountOfRows = document.createElement('input');
amountOfRows.setAttribute('type', 'text');
amountOfRows.setAttribute('placeholder', 'Write number')
const amountOfCells = document.createElement('input');
amountOfCells.setAttribute('type', 'text');
amountOfCells.setAttribute('placeholder', 'write number')
const cellContents = document.createElement('input');
cellContents.setAttribute('type', 'text');
cellContents.setAttribute('placeholder', 'number or string')
const submitButtonForFormWithThreeInputs = document.createElement('button');
submitButtonForFormWithThreeInputs.innerText = 'Submit'
formWithThreeInputs.append(amountOfRows, amountOfCells, cellContents, submitButtonForFormWithThreeInputs);

let table = document.createElement('table');

formWithThreeInputs.addEventListener('submit', function (e) {
    e.preventDefault();
    table.textContent = '';
    const rows = Number(amountOfRows.value);
    const cell = Number(amountOfCells.value);
    const cellContent = cellContents.value;
    if (!rows || !cell) {
        let h3 = document.createElement('h3');
        h3.innerText = 'Please write just numbers into 2 first fields'
        document.body.appendChild(h3)
    }
    for (let i = 0; i < rows; i += 1) {
        const tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < cell; j += 1) {
            const td = document.createElement('td');
            td.innerText = `${cellContent}`;
            tr.appendChild(td)
        }
    }
})

document.body.appendChild(table)

//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

const oneHundred = document.createElement('div');

let dateInSeconds = Date.now() / 1000;

let dateFromStorage = localStorage.getItem('dateNowInSeconds') || 0;

if (!localStorage.getItem('money')) {
    localStorage.setItem('money', `100грн`)
    oneHundred.innerText = localStorage.getItem('money');

    localStorage.setItem('dateNowInSeconds', String(dateInSeconds))
} else if (dateInSeconds - dateFromStorage < 10) {
    oneHundred.innerText = localStorage.getItem('money');
} else {
    let numberInLocalStorage = parseInt(localStorage.getItem('money'))
    numberInLocalStorage += 10
    localStorage.setItem('money', `${String(numberInLocalStorage)}грн`)
    oneHundred.innerText = numberInLocalStorage + 'грн';
    localStorage.setItem('dateNowInSeconds', String(dateInSeconds))
}

document.body.appendChild(oneHundred);

