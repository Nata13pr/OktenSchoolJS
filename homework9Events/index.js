// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію


let newDate = new Date();
console.log(newDate.toISOString())
console.log(newDate)
let sessions = [];

if (!localStorage.getItem('sessions')) {
    let sessions = [];
    sessions.push(newDate)
    localStorage.setItem('sessions', JSON.stringify(sessions))
} else {
    const oneSession = JSON.parse(localStorage.getItem('sessions'))
    oneSession.push(newDate)
    sessions = oneSession;
    localStorage.setItem('sessions', JSON.stringify(sessions))
}

//Показував Сергій на додатковому
function saveVisit() {
    let sessions = localStorage.getItem('sessions');
    let arrayOfSessions = JSON.parse(sessions) || [];
    console.log(arrayOfSessions)

    let date = new Date();
    arrayOfSessions.push({
            day: date.getDate(),
            hour: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
        }
    )
    localStorage.setItem('sessions', JSON.stringify(arrayOfSessions))
}
saveVisit()