//Запрашиваем инфо
let fullName = prompt (`Введите ФИО`);

//Делим на части
let names = fullName.split(" ");
console.log(names);

//Запихиваем в переменную и приводим в божеский вид
let smallFirstName = names[1].toLowerCase(); //мария
let begFirstName = smallFirstName[0].toUpperCase();//М
let endFirstName = smallFirstName.slice(1);//ария
let userFirstName = begFirstName+endFirstName;//Мария

console.log(userFirstName);

let smallPatronym = names[2].toLowerCase(); //викторовна
let begPatronym = smallPatronym[0].toUpperCase();//В
let endPatronym = smallPatronym.slice(1);//икторовна
let userPatronym = begPatronym+endPatronym;//Викторовна

console.log(userPatronym);

let smallLastName = names[0].toLowerCase(); //петрова
let begLastName = smallLastName[0].toUpperCase();//П
let endLastName = smallLastName.slice(1);//етрова
let userLastName = begLastName+endLastName;//Петрова

console.log(userLastName);

//Выводим результат в инпуты
document.querySelector('#userFirstName').value = userFirstName;
document.querySelector('#userPatronym').value = userPatronym;
document.querySelector('#userLastName').value = userLastName;

//Проблемы для решения: Нет отчества; Много имен; Двойное имя или фамилия через дефис;*/