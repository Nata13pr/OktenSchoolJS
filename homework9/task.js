// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const block = document.createElement('div');
block.classList.add('wrap');
block.classList.add('collapse');
block.classList.add('alpha');
block.classList.add('beta');

block.style.backgroundColor = 'lightBlue';
block.style.width = '100px';
block.style.height = '55px';
block.style.marginTop='20px';

document.body.append(block);

const clone=block.cloneNode(true)
document.body.appendChild(clone)


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const arrayAboutDetails = ['Main', 'Products', 'About us', 'Contacts'];

const list = document.createElement('ul');

arrayAboutDetails.map(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.append(li)
});

document.body.append(list)

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [{title: 'JavaScript Complex', monthDuration: 5}, {
    title: 'Java Complex', monthDuration: 6
}, {title: 'Python Complex', monthDuration: 6}, {title: 'QA Complex', monthDuration: 4}, {
    title: 'FullStack', monthDuration: 7
}, {title: 'Frontend', monthDuration: 4}];

for (let i = 0; i <= coursesAndDurationArray.length - 1; i += 1) {
    const info = document.createElement('div');
    document.body.appendChild(info);

    const title = document.createElement('h2');
    title.innerText = `title - ${coursesAndDurationArray[i].title}`;

    const monthDuration = document.createElement('p');
    monthDuration.innerText = `monthDuration - ${coursesAndDurationArray[i].monthDuration}`;
    info.append(title, monthDuration)

}

// ======================================================================
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

coursesAndDurationArray.map(item => {
    const title = document.createElement('div');
    title.classList.add('item');
    document.body.appendChild(title);

    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = `Title - ${item.title}`;
    title.appendChild(h1);

    const p = document.createElement('p');
    p.classList.add('description');
    p.innerText = `Duration - ${item.monthDuration}`;
    title.appendChild(p)
})

// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
// =========================
let simpsons = [{
    name: 'Bart',
    surname: 'Simpson',
    age: 10,
    info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
    photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
}, {
    name: 'Homer',
    surname: 'Simpson',
    age: 40,
    info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
    photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
}, {
    name: 'Marge',
    surname: 'Simpson',
    age: 38,
    info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
}, {
    name: 'Lisa',
    surname: 'Simpson',
    age: 9,
    info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
}, {
    name: 'Maggie',
    surname: 'Simpson',
    age: 1,
    info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
},];

const simpsonsSection = document.createElement('section');
document.body.appendChild(simpsonsSection);

const h1 = document.createElement('h1');
h1.innerText = 'Simpsons';
simpsonsSection.appendChild(h1)

simpsons.map(item => {
    const member = document.createElement('div');
    member.classList.add('member');
    document.body.appendChild(member);

    const name = document.createElement('h2');
    name.innerText = `Name - ${item.name}`;

    const surname = document.createElement('h3');
    surname.innerText = `Surname - ${item.surname}`;

    const age = document.createElement('h4');
    age.innerText = `Age - ${item.age}`;

    const info = document.createElement('p');
    info.innerText = `Info - ${item.info}`;

    const img = document.createElement('img');
    img.classList.add('src');
    img.src = `${item.photo}`
    img.classList.add('alt');
    img.setAttribute('alt', item.name);

    member.append(name, surname, age, info, img)
})

// ==========================================================
// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

let coursesArray = [{
    title: 'JavaScript Complex',
    monthDuration: 5,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
}, {
    title: 'Java Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
}, {
    title: 'Python Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
}, {
    title: 'QA Complex',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
}, {
    title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
}, {
    title: 'Frontend',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
}];

const coursesSection = document.createElement('section');
coursesSection.innerText = `Courses`;
document.body.appendChild(coursesSection);

for (let i = 0; i <= coursesArray.length - 1; i += 1) {
    const title = document.createElement('div');
    title.classList.add('borderForAllComponents')
    title.style.textAlign = 'center';
    title.innerText = `Title - ${coursesArray[i].title}`;
    coursesSection.appendChild(title);

    const flexContainer = document.createElement('div');
    flexContainer.style.display = 'flex';
    flexContainer.classList.add('location');
    flexContainer.style.justifyContent = 'space-around'

    const monthDuration = document.createElement('div');
    monthDuration.classList.add('borderForAllComponents');
    monthDuration.classList
    monthDuration.style.flexGrow = '1';
    monthDuration.style.flexBasis = '50%';
    monthDuration.classList.add('location');
    monthDuration.innerText = `MonthDuration - ${coursesArray[i].monthDuration}`;
    flexContainer.appendChild(monthDuration);

    const hourDuration = document.createElement('div');
    hourDuration.classList.add('borderForAllComponents')
    hourDuration.style.flexGrow = '1';
    hourDuration.style.flexBasis = '50%';
    hourDuration.classList.add('location');
    hourDuration.innerText = `HourDuration - ${coursesArray[i].hourDuration}`;
    flexContainer.appendChild(hourDuration);

    coursesSection.appendChild(flexContainer)

    const modules = document.createElement('div');
    modules.classList.add('borderForAllComponents')
    modules.innerText = `Modules`
    coursesSection.appendChild(modules);

    const moduleUl = document.createElement('ul');

    for (let j = 0; j <= coursesArray[i].modules.length - 1; j += 1) {
        const li = document.createElement('li');
        li.classList.add('borderForAllComponents')
        li.innerText = `${coursesArray[i].modules[j]}`;
        moduleUl.appendChild(li)
    }

    modules.appendChild(moduleUl);
}
