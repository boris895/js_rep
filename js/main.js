console.log('Sample JavaScript HW#1');

/*
 * #1
 *
 * Создайте переменные со значениями
 */

// имя переменной: myNum, значение: 10
var myNum = 10;
// имя переменной: myStr, значение: 'строка'
var myStr = 'строка'
// имя переменной: myBool, значение: true
var myBool = true
// имя переменной: myArr, значения: 1, 2, 3, 4, 5
var myArr = [1, 2, 3, 4, 5];
// имя переменной myObj, значения: first: 'First Name', last: 'Last Name'
var myObj = {
    first:'First Name',
    last:'Last Name',
}
console.log(myNum,myStr,myBool,myArr, myObj)
/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */
var decimal2 = myNum.toFixed(2)
console.log(decimal2)
// decimal2





/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */

// i
var i = 10;
console.log(--i)
console.log(i)
console.log(++i)
console.log(i)
console.log(i++)
console.log(i)
console.log(i--)
console.log(i)
/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */

// myTest
var myTest = 20;
console.log(myTest)
// +=
myTest += myNum;
console.log(myTest += myNum)
// –=
myTest -= myNum;
console.log(myTest -= myNum)
// *=
myTest *= myNum;
console.log(myTest *= myNum)
// /=
myTest /= myNum;
console.log(myTest /= 10)
// %=
myTest %= 3;
console.log(myTest %= 3)
/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

// константа Pi → myPi
var myPi = (Math . PI);
console.log(myPi);
// округленное значение числа 89.279 → myRound
var myRound = Math.round(89.279);
console.log(myRound);

// случайное число между 0..10 → myRandom
var myRandom = Math . random()*10;
console.log(myRandom);
// 3 в 5 степени → myPow
// var myPow = Math . pow(3,5);
// console.log(myPow);
/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */

// Мама мыла раму, рама мыла маму
var strObj = {
    str: ' Мама мыла раму, рама мыла маму'
};
strObj.length = strObj.str.length;
console.log(strObj);


// strObj

/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

// isRamaPos
var isRamaPos = strObj.str.indexOf(' рама');
console.log(isRamaPos);
/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */
var strReplace
strReplace = strObj.str.replace(' Мама мыла раму, рама мыла маму','Мама моет раму, Рама держит маму')
console.log(strReplace);
// strReplace

/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */
var str = 'хочется выпить'
console.log(str.toUpperCase());
console.log(str.toLowerCase());


console.log('Sample JavaScript #2 HW #16');

/*
 * #1
 *
 * Создайте объект userObj, описывающий человека.
 *
 * Следующие поля обязательны:
 * firstName – любое имя, строка
 * lastName – любая фамилия, строка
 * age – любой возраст, число
 */

userObj = {
   firstName:'Boris',
   lastName:'Ganenko',
   age:35,
    fullName() {
       return`${userObj.firstName} ${userObj.lastName}`;
   }
}
/*
* #2
*
* Для объекта из п.1 создайте метод fullName, который будет возвращать полное имя,
* состоящее из firstName и lastName, склеенных в строку через пробел.
*
* Например:
* userObj.firstName ← 'Имя
* userObj.lastName ← Фамилия'
* userObj.fullName() → 'Имя Фамилия'.
*/
console.log(userObj);
console.log(userObj.fullName());


/*
 * #3
 *
 * Дана функция defUpperStr('My text'), которая возвращает текст, преобразованный в верхний регистр, т.е:
 * defUpperStr('My text') → 'MY TEXT'.
 *
 * Если функция вызывается без параметра defUpperStr(), она не должна возвращать undefined,
 * в этом случае требуется вернуть строку текста по умолчанию в верхнем регистре, т.е:
 * defUpperStr() → 'DEFAULT TEXT'.
 *
 * При выполнении задачи не используйте оператор if, требуется решение с логическим оператором ||.
 */
function defUpperStr (str) {
    return (str || 'Default text').toUpperCase();
}
console.log(defUpperStr ('My text'));
console.log(defUpperStr());
/* eslint-disable capitalized-comments */
// console.log(defUpperStr('My text')); // MY TEXT

// console.log(defUpperStr()); // DEFAULT TEXT





/*
 * #4
 *
 * Создайте функцию evenFn(n), которая принимает параметром число – количество итераций цикла,
 * т.е. for 0..n. Функция должна вернуть массив, состоящий только из четных значений, генерируемых в цикле.
 *
 * Причем:
 * 0 не должен попадать в результирующий массив
 * цикл должен работать до n включительно
 * разрешен только оператор for
 *
 * Например:
 * evenFn(10) → [2, 4, 6, 8, 10]
 * evenFn(15) → [2, 4, 6, 8, 10, 12, 14]
 * evenFn(20) → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
 */
function evenFn(num) {
    let arr = []
    for (i = 1; i <=num; i++) if (i% 2 === 0) arr.push(i);
    return arr;
}

console.log(evenFn(9));
console.log(evenFn(13));
console.log(evenFn(21));





// console.log(evenFn(10)); // [2, 4, 6, 8, 10]

// console.log(evenFn(15)); // [2, 4, 6, 8, 10, 12, 14]

// console.log(evenFn(20)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

/*
 * #5
 *
 * Создайте функцию weekFn(n), которая принимает номер дня недели, а возвращает его название.
 * Если вводится строка, любое дробное число или число вне диапазона 1..7 – функция должна вернуть null.
 *
 * Например:
 * 1 → 'Понедельник'
 * 2 → 'Вторник'
 * ...
 * 7 → 'Воскресенье'
 *
 * В реализации функции обязательно должны быть использованы операторы switch / case / default.
 */
function weekFn(day) {

    let str = ' ';

    switch (day) {
        case 1:
            str = 'Понедельник';
            break;
        case 2:
            str = 'Вторник';
            break;
        case 3:
            str = 'Среда';
            break;  
        case 4:
             str = 'Четверг';
            break;
        case 5:
            str = 'Пятница';
        break;
            case 6:
            str = 'Суббота';
            break;
        case 7:
            str = 'Воскресенье';
            break;                  
            default:
                str = null;
            }
            return str;
}
// console.log(weekFn(1)); // 'Понедельник'
console.log(weekFn(1));
// console.log(weekFn(3)); // 'Среда'
console.log(weekFn(3));
// console.log(weekFn(7)); // 'Воскресенье'
console.log(weekFn(7));
// console.log(weekFn(9)); // null
console.log(weekFn(9));
// console.log(weekFn(1.5)); // null
console.log(weekFn(1.5));
// console.log(weekFn('2')); // null
console.log(weekFn('2'));
/*
 * #6
 *
 * создайте функцию ageClassification(n), которая будет в качестве параметра принимать любые числа
 * и возвращать строку согласно следующим условиям, n:
 *           менее 0 – null
 *             0..24 – 'детский возраст'
 *           24+..44 – 'молодой возраст'
 *           44+..65 – 'средний возраст'
 *           65+..75 – 'пожилой возраст'
 *           75+..90 – 'старческий возраст'
 *          90+..122 – 'долгожители'
 *         более 122 – null
 *
 * При выполнении задания допускается использовать только тернарный оператор ?.
 * Использование операторов if, switch – запрещено.
 */
// let age = 25;
// let string = '';
// if(age < 45) {
//   string = 'молодой человек';
// } else {
//     string = 'пожилой человек';
// }
// console.log(string);
function ageClassification(num) {
    return num > 0
      ? num > 24
        ? num > 44
          ? num > 65
            ? num > 75
              ? num > 90
                ? num > 122
                  ? null
                  : 'долгожители'
                : 'старческий возраст'
              : 'пожилой возраст'
            : 'средний возраст'
          : 'молодой возраст'
        : 'детский возраст'
      : null;
  }

// function ageClassification(n) {
//   return n < 0 ? null :
//   n < 24 ? 'детский возраст' :
//   n < 44 ? 'молодой возраст' :
//   n < 65 ? 'средний возраст' :
//   n < 75 ? 'пожилой возраст' :
//   n < 90 ? 'старческий возраст':
//   n < 122 ? 'долгожители' : 
//   null ;
// }

console.log(' 11:', ageClassification(11));
console.log('25 :', ageClassification(25));
console.log('45 :', ageClassification(45));
console.log('66 :', ageClassification(66));
console.log('76 :', ageClassification(76));
console.log('91 :', ageClassification(91));
console.log('123 :', ageClassification(123));
console.log('-1:',ageClassification(-1));

console.log('-1 :', ageClassification(-1)); // -1 : null

console.log('5 :', ageClassification(5)); // 5 : детский возраст

console.log('34 :', ageClassification(34)); // 34 : молодой возраст

console.log('50 :', ageClassification(50)); // 50 : средний возраст

console.log('65.1 :', ageClassification(65.1)); // 65.1 : пожилой возраст

console.log('80 :', ageClassification(80)); // 80 : старческий возраст

console.log('110 :', ageClassification(110)); // 110 : долгожители

console.log('130 :', ageClassification(130)); // 130 : null

/*
 * Блок тестирования:
 * console.log(1, ageClassification(-1) === null);
 * console.log(2, ageClassification(1) === 'детский возраст');
 * console.log(3, ageClassification(24) === 'детский возраст');
 * console.log(4, ageClassification(24.01) === 'молодой возраст');
 * console.log(5, ageClassification(44) === 'молодой возраст');
 * console.log(6, ageClassification(44.01) === 'средний возраст');
 * console.log(7, ageClassification(65) === 'средний возраст');
 * console.log(8, ageClassification(65.01) === 'пожилой возраст');
 * console.log(9, ageClassification(75) === 'пожилой возраст');
 * console.log(10, ageClassification(75.01) === 'старческий возраст');
 * console.log(11, ageClassification(90) === 'старческий возраст');
 * console.log(12, ageClassification(90.01) === 'долгожители');
 * console.log(13, ageClassification(122) === 'долгожители');
 * console.log(14, ageClassification(122.01) === null);
 * console.log(15, ageClassification(150) === null);
//  */

/*
 * #7
 *
 * Создайте функцию oddFn(n), которая принимает параметром число – количество итераций цикла.
 * Функция должна вернуть массив, состоящий только из нечетных значений, генерируемых в цикле.
 *
 * Причем:
 * 0 не должен попадать в результирующий массив
 * цикл должен работать до n включительно
 * разрешен только оператор while
 *
 * Например:
 * oddFn(10) → [1, 3, 5, 7, 9]
 * oddFn(15) → [1, 3, 5, 7, 9, 11, 13, 15]
 * oddFn(20) → [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
 */
function oddFn(numb) {
    let arr = []
    let i = 0;
    while (i++ < numb) if (i % 2 !== 0) arr.push(i); 
        console.log(i++)
        return arr;
}

 console.log(oddFn(11));
 console.log(oddFn(15));
 console.log(oddFn(21));

// console.log(oddFn(10)); // [1, 3, 5, 7, 9]

// console.log(oddFn(15)); // [1, 3, 5, 7, 9, 11, 13, 15]

// console.log(oddFn(20)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

/*
 * #8
 *
 * Создайте основную функцию mainFunc(a, b, func), которая принимает три параметра:
 * a – число
 * b - число
 * func –  обрабатывающая параметры a и b, возвратная (callback) функция
 *
 * Реализуйте проверку: если третьим параметром передается не функция, нужно вернуть false.
 *
 */
function mainFunc(a, b, func ) {
    if (func && typeof func === 'function') return func(a ,b) ;
    return false;
}
/*
 * реализуйте следующие функции, которые будут осуществлять механизм callback в основной функции,
 * возвращая ей результат собственного вычисления...
 * для возведения в степень и получения произвольного значения можете воспользоваться методами объекта Math.
 */

// cbRandom(a, b) – вычисляет и возвращает произвольное целое число в диапазоне между a и b включительно.
function cbRandom(min , max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}
// cbPow(a, b) – вычисляет и возвращает результат возведения числа a в степень b.
function cbPow (num , pow) {
return Math.pow(num, pow);
}
// cbAdd(a, b) – вычисляет и возвращает сумму двух чисел a и b.
function cbAdd (a ,b) {
return a + b;
}
/*
 * mainFunc() должна возвращать результат работы переданной ей возвратной функции, например:
 * mainFunc(2, 5, cbRandom) → случайно от 2 до 5 включительно
 * mainFunc(10, 30, cbRandom) → случайно 10..30 включительно
 * mainFunc(2, 5, cbPow) → 32
 * mainFunc(2, 5, cbAdd) → 7
 * mainFunc(2, 5, 'not a func') → false
 */

console.log(mainFunc(2, 5, cbRandom)); // целые числа в диапазоне 2..5

console.log(mainFunc(2, 5, cbPow)); // 32

console.log(mainFunc(2, 5, cbAdd)); // 7

console.log(mainFunc(2, 5, 'not a func')); // false

// let login;
// let messege = (logIn == 'сотрудник') ? 'Привет' : (logIn == 'директор') ? 'здравствуйте' : (logIn == '') ? 'нет логтна' : '';
// alert(messege);
// alert(logIn);
// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';
//   alert(message)

 
console.log('Sample JavaScript 3 HW #17');

/*
 * #1
 *
 * Создайте функцию counter(), которая должна реализовать счетчик с помощью замыкания:
 * функция может принимать число в качестве аргумента counter(n)
 * если число передано в функцию – счет начинается с указанного числа
 * если нет – то счет продолжается
 */
let counter = (function(){
let count = 0;
return function(num) {
    count = num === undefined ? count : num;
    return count ++;
};
}());

console.log(counter()); // 0

console.log(counter()); // 1

console.log(counter(100)); // 100

console.log(counter()); // 101

console.log(counter(500)); // 500

console.log(counter()); // 501

console.log(counter(0)); // 0

console.log(counter()); // 1

/*
 * #2
 *
 * Создайте функцию counting, которая должна реализовать три метода с помощью замыкания:
 * первоначальное значение счетчика – 0
 * counting.value() – возвращает значение счетчика
 * counting.value(n) – устанавливает значение счетчика, возвращает новое значение
 * counting.increment() – увеличивает значение счетчика на 1
 * counting.decrement() – уменьшает значение счетчика на 1
 */
 let counting = (function() {
     let count = 0;
    return {
        value(num) {
            if(num !== undefined)
            count = num;
            return count;
        },
        decrement(){
            count --;
        },
        increment() {
            count ++;
        }
    }
 }());
// console.log(counting.value()); // 0

// counting.increment();

// counting.increment();

// counting.increment();

// console.log(counting.value()); // 3

// counting.decrement();

// counting.decrement();

// console.log(counting.value()); // 1

// console.log(counting.value(100)); // 100

// counting.decrement();

// console.log(counting.value()); // 99

// console.log(counting.value(200)); // 200

// counting.increment();

// console.log(counting.value()); // 201

/*
 * #3
 *
 * Создайте функцию myPow(a, b, myPrint). Внутри реализуйте рекурсию для подсчета результата возведения числа a в степень b.
 * функция myPrint(a, b, res) – глобальная функция, которая должна генерировать из параметров a, b, res строку вида 'a^b=res' и возвращать ее
 * myPrint() должна быть передана в myPow() как параметр и вызвана внутри как callback-функция
 * функция myPow() в качестве возвращаемого значения принимает результат myPrint()
 * Например:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 */
let myPrint = (a,b,res) => `${a}^${b}=${res}`;

let myPow = (a ,b, callback) => {
    let pow = (x, n) => {
        if(n !==1) return x *= pow(x,n-1);

        return x;
    };
    return callback (a ,b, pow(a,b));
};
 console.log(myPow(3, 4, myPrint)); // 3^4=81

console.log(myPow(2, 3, myPrint)); // 2^3=8

/*
 * #4
 *
 * Создайте несколько однотипных объектов для описания автомобиля. Соблюдайте следующие правила, используйте следующие поля:
 * имя объекта car – обязательно и необходимое для тестирования, дальнейшее именование объектов – на ваше усмотрение
 * car.engine – объем двигателя, числовое поле
 * car.model – модель авто, строка
 * car.name – бренд авто, строка
 * car.year – год выпуска, число
 * car.used – строка для описания состояния авто, допускаются значения 'used' и 'new'
 *
 * #5
 *
 * Для созданных ранее объектов определите метод info(), используя ключевое слово this.
 * данный метод должен формировать и возвращать строку с полной информацией об автомобиле, например:
 * Chevrolet Lacetti, 2000cc, year 2010, used
 * Infinite FX50 AWD, 5000cc, year 2019, new
 * пробелы, запятые, символы cc и текст – имеют значение и проверяются при тестировании кода
 *
 * #6
 *
 * Для созданных ранее объектов измените свойство used, используя аксессоры (геттер и сеттер).
 * - используйте текущий год либо непосредственно в своем коде, либо с помощью глобальной переменной, например, yearNow
 * - если год выпуска автомобиля отличается от текущего года, геттер used должен выводить текст 'used'
 * - если год выпуска автомобиля совпадает с текущим годом, геттер used должен выводить текст 'new'
 * - если сеттеру used присвоено значение 'new', при этом года выпуска автомобиля отличается от текущего года,
 * - необходимо изменить год выпуска автомобиля, установив в качестве значения текущий год
 * - если сеттеру used присвоено значение 'used', ничего делать не нужно
 */

// let yearNow = new Date().getFullYear(); // получить текущий год как число

// console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2010, used

// car.used = 'new';

// console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- год изменен

// car.used = 'used';

// console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- изменения не выполняются

// console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new

// car.used = 'used';

// console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new -- изменения не выполняются

/*
 * #7
 * Создайте функцию myMax(arr), которая в качестве параметра принимает
 * произвольный числовой массив и возвращает максимальное число из переданного ей массива.
 * В реализации функции должен быть применен метод Math.max() и apply().
 */

// let list = [12, 23, 100, 34, 56, 9, 233];

// console.log(myMax(list)); // 233

/*
 * #8
 *
 * Создайте функцию myMul(a, b), которая будет умножать числа а и b, возвращая результат.
 */

/*
 * создайте функции myDouble(n), которая принимает один параметр и  удваивает его.
 * Использовать умножение или другие математические операции внутри функции – запрещено, только bind() и myMul().
 * Функция возвращает результат вычисления.
 */

// console.log(myDouble(3)); // = myMul(2, 3) = 6

// console.log(myDouble(4)); // = myMul(2, 4) = 8

// console.log(myDouble(5)); // = myMul(2, 5) = 10

// аналогичным образом создайте функцию myTriple(n), которая утраивает принимающий параметр, возвращая результат.

// console.log(myTriple(3)); // = myMul(3, 3) = 9

// console.log(myTriple(4)); // = myMul(3, 4) = 12

// console.log(myTriple(5)); // = myMul(3, 5) = 15

/*
 * #9
 *
 * Постройте функцию myUniq(arr), которая будет принимать произвольный массив
 * повторяющихся примитивных значений (например, имена пользователей или числа ).
 * Функция должна вернуть коллекцию уникальных значений.
 * В реализации разрешено использование set.
 * Любые условные операторы – запрещены и объекты.
 */

// let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];

// let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];

// console.log(myUniq(notUniqNums));

// console.log(myUniq(notUniqStrings));
// ПРИМЕРЫ
//  function create1(n) {
//     return function() {
//         console.log(100 * n)
//     } 
//  }
//  let calc1 = create1(5);
//  calc1();

//  function create2(n) {
//      return function(num) {
//          return n + num;
//      }
//  }
//  let addOne = create2(5);
//  console.log(addOne(10));
 
// function greet () {
    
//     return `${'Hi'} ${this.name}`;
// };

// let person = {
//     name: 'Boris',
//     greet
// };
// let person1 = {
//     name: 'Alex',
//     greet
// }
// let person2 = {
//     name: 'John',
//     greet
// };
// console.log(person.greet());
// console.log(person1.greet());
// console.log(person2.greet());

// const pow = Math.pow.bind(null);
// const double = Math.pow.bind(null,2);
// console.log(double(10));


// let userName1 = prompt ('Кто там?','');
// if (userName1 == 'Админ') {
//     let pass = prompt ('пароль', '')
//     if (pass == 'я главный') {
//         alert ('здравствуйте');
//     }else if (pass == ''|| pass == null) {
//         alert ('Отменено');
//     } else {
//         alert('не верный пароль');
// } 

// } else if (userName1 == '' || userName1 == null) {
//     alert ('Отменено');
// } else {
//     alert ('я вас не знаю');
// }

// const Person = {
//     constructor(name, age,gender) {
//         this.name = name
//         this.age = age
//         this.gender = gender
       
//         return this
//     },
//     greet(msg) {
//         return `${msg}! ${this.name}.your age is ${this.age} ${this.gender}`;
//     }
// };
// const person = Object.create(Person).constructor('John',25 , 'male');
// const person1 = Object.create(Person).constructor('Bob',20 , 'male');
// const person2 = Object.create(Person).constructor('Mary',18 , 'female');
// // console.log(person);
// // console.log(person1);
// // console.log(person2);
// console.log(person.greet('Hi'));
// console.log(person1.greet('Hi'));
// console.log(person2.greet('Hi'));


// const person = {
//     name: 'John',
//     age: 25,
//     gender:'male',
//     greet(msg) {
//         return `${msg}! ${this.name}`;
//     }
// };
// const person1 = {
//     name: 'Bob',
//     age: '20',
//     gender:'male',
//     greet(msg) {
//         return `${msg}! ${this.name}`;
//     }
// };
// const person2 = {
//     name: 'Mary',
//     age: '18',
//     gender:'female',
//     greet(msg) {
//         return `${msg}! ${this.name}`;
//     }
// };
