// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


const arrayWithUsers = [];

for (let i = 0; i < 10; i += 1) {
    let newUser = new User(i, `Nata${i}`, `${i}Nata@gmail.com`, `+38095938565${i}`)
    arrayWithUsers.push(newUser)
}


console.log(arrayWithUsers)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const pairedId = arrayWithUsers.filter(item => item.id % 2 === 0);

console.log(pairedId);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const ascendingId = pairedId.sort((a, b) => a.id - b.id);

console.log(ascendingId)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clientArray = [];
let order = []

for (let i = 0; i < 10; i += 1) {
    let order = Array(i + 1).fill('item');
    let newClientExample = new Client(`${i}`, `Nata${i}`, 'Vard', `Nata${i}@gmail.com`, `+38095748534${i}`, order)

    clientArray.push(newClientExample)
}

console.log(clientArray)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const ascendingClientArray = clientArray.sort((a, b) => a.order.length - b.order.length);

console.log(ascendingClientArray)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(brand, producer, year, maxSpeed, engineCapacity) {
    this.brand = brand;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        console.log(`brand ${this.brand}`);
        console.log(`producer ${this.producer}`);
        console.log(`year ${this.year}`);
        console.log(`maxSpeed ${this.maxSpeed}`);
        console.log(`engineCapacity ${this.engineCapacity}`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        return this.maxSpeed * newSpeed
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }
}

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarClass {

    constructor(brand, producer, year, maxSpeed, engineCapacity) {
        this.brand = brand;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info = function () {
        console.log(`brand ${this.brand}`);
        console.log(`producer ${this.producer}`);
        console.log(`year ${this.year}`);
        console.log(`maxSpeed ${this.maxSpeed}`);
        console.log(`engineCapacity ${this.engineCapacity}`)
    };
    increaseMaxSpeed = function (newSpeed) {
        return this.maxSpeed * newSpeed
    };
    changeYear = function (newValue) {
        this.year = newValue;
    }
    addDriver = function (driver) {
        this.driver = driver
    }
}

