//Запрашиваем инфо и обрезаем пробелы в начале и конце
let fullName = prompt(`Введите ФИО`).trim();
console.log(fullName);

//Делим на части
let names = fullName.split(" ");
console.log(names);

if (names.length>2){//Стандартная ситуация: есть 1 фамилия, 1 имя и 1 отчество

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

    } else {//Нестандартная ситуация: есть только 1 фамилия и 1 имя, отчества нет

        //Запихиваем в переменную и приводим в божеский вид
        let smallFirstName = names[1].toLowerCase(); //мария
        let begFirstName = smallFirstName[0].toUpperCase();//М
        let endFirstName = smallFirstName.slice(1);//ария
        let userFirstName = begFirstName+endFirstName;//Мария

        console.log(userFirstName);

        let smallLastName = names[0].toLowerCase(); //петрова
        let begLastName = smallLastName[0].toUpperCase();//П
        let endLastName = smallLastName.slice(1);//етрова
        let userLastName = begLastName+endLastName;//Петрова

        console.log(userLastName);

        //Выводим результат в инпуты
        document.querySelector('#userFirstName').value = userFirstName;
        document.querySelector('#userPatronym').value = "";
        document.querySelector('#userLastName').value = userLastName;
    }





//Проблемы для решения: Много имен; Двойное имя или фамилия через дефис;*/
