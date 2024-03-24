// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

const sessions = JSON.parse(localStorage.getItem('sessions')) || [];

const h1 = document.createElement('h1');
h1.innerText = 'Дата і час відвідування index.js сторінки'
const list = document.createElement('ol');
document.body.append(h1, list)
sessions.map(item => {
    const date = document.createElement('li');
    const sessionDate = new Date(item);
    date.innerText = `${sessionDate}`;
    list.appendChild(date);
})

//Робив Сергій на занятті
const div=document.createElement('div');
document.body.appendChild(div);
div.classList.add('target');

function readSessions(){
    let ul=document.createElement('ul');
    document.body.appendChild(ul);
    let sessionArray=JSON.parse(localStorage.getItem('sessions'));
    for(const session of sessionArray){
        let li=document.createElement('li');
        li.innerText=session.day+' '+ session.hour+' '+session.minutes+''+ session.seconds;

        ul.appendChild(li)
    }
}

readSessions(document.getElementsByClassName('target')[0])