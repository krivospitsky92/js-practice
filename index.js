// 1. функция которая приветствует пользователя в зависимости от полученного имени
// sayHello('Viktor') Привет Viktor

// const userName = prompt("Введите свое имя");

function sayHello() {
  return "Привет, " + userName + "!";
}
result = sayHello();
console.log(result);

// 2. функция которая вернет правду если полученная параметр строка не пустая
//isNotEmpty('') false
//isNotEmpty('abc') true
//isNotEmpty(' ') true

const str = prompt("Укажите что-то или пустую строку");
function isNOtEmpty() {
  if (str === "" || str === null) {
    return false;
  } else {
    return true;
  }
}

let result = isNOtEmpty();
console.log(result);

// 3. функция которая принимает параметры цену продукта и кол-во, возвращает общую сумму заказа
// calcFullPrice(24, 10) 2
function calcFullPrice(num1, num2) {
  let summ = num1 * num2;
  return summ;
}

const result = calcFullPrice(4, 6);
alert(result);

// 4. функция которая принимает параметры сумму заказа и кол-во денег в кошельке, и возвращает хватает ли денег купить эти товары
// isEnoughMoney(240, 400) true
// isEnoughMoney(240, 140) false

function isEnoughMoney(num1, num2) {
  if (Number(num1) < Number(num2)) {
    return true;
  } else {
    return false;
  }
}
let result = isEnoughMoney(240, 160);
console.log(result);

// 5. функция которая принимает параметр кол-во этажей подьезда (с 4мя квартирами на этаже) и вернет посчитаное общее колво квартир в подьезде

function floor(num) {
  return num * 4;
}

const result = floor(4);
alert(result + " квартир");

// 6.* функция которая проверит что полученное как параметр число находится между 0 и 10, вернет ложь если снаружи диапазона

function checkNumber(num) {
  if (num >= 0 && num <= 10 && typeof num === "number") {
    return true;
  }
  return false;
}

const result = checkNumber();
alert(result);

// ------------------------------------------------------------------------------

// * функция которая вернет модуль (abs) числа (если пришло отрицательное то вернет положительное, если положительное то вернет положительное)

function modul(num) {
  if (isNaN(num) || typeof num === "string") {
    return "ошибка";
  }
  return Number(Math.abs(num));
}

const result = modul();
alert(result);

// * функция которая вернет случайное (random) число от 0 до

function randomNum() {
  return Math.ceil(Math.random() * 10);
}

const result = randomNum();
console.log(result);

// * функция которая вернет квадратный корень числа (sqrt)

function sqRoot(num) {
  if (num === null || isNaN(num)) {
    return "Ошибка!";
  }
  return Math.sqrt(num);
}
const result = sqRoot();
alert(result);

// * функция которая посчитает корни квадратного уравнения (формула есть в интернете)

// на switch или if
// 1. функция которая вернет сезон года в зависимости от полученного номера месяца
// getSeason(2) // 'зима'
// getSeason(9) // 'лето'

let season = 7;

if (season >= 1 && season <= 2) {
  alert("Зима");
} else if (season >= 3 && season <= 5) {
  alert("Весна");
} else if (season >= 6 && season <= 8) {
  alert("Лето");
} else if (season >= 9 && season <= 11) {
  alert("Осень");
} else {
  alert("Зима");
}

// -------------------------------------------------

let season = 2;

switch (season) {
  case 1:
  case 2:
    alert("Зима");
    break;
  case 3:
  case 4:
  case 5:
    alert("Весна");
    break;
  case 6:
  case 7:
  case 8:
    alert("Лето");
    break;
  case 9:
  case 10:
  case 11:
    alert("Осень");
    break;
  case 12:
    alert("Зима");
}

// // 2. функция которая проверит совершеннолетие пользователя в зависимости от указанной страны (достаточно 3х стран с разными возрастами)
// isAdult(18, 'ukraine') // true
// isAdult(18, 'japan') // false

function isAdult(num, str) {
  if (
    (num >= 18 && str === "ukraine") ||
    str === "Ukraine" ||
    str === "UKRAINE"
  ) {
    return true;
  }
  return false;
}

const result = isAdult();
alert(result);
