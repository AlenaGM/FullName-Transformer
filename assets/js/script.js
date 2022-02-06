//Запрашиваем инфо и обрезаем пробелы в начале и конце
let fullName = prompt(`Введите ФИО`).trim();
console.log(fullName);

//Делим на части
let names = fullName.split(" ");
console.log(names);

if (names.length>2){//Стандартная ситуация: есть 1 фамилия, 1 имя и 1 отчество

    //Запихиваем в переменную и приводим в божеский вид
    let smallFirstName = names[1].toLowerCase(); //мария
    let userFirstName = smallFirstName[0].toUpperCase()+smallFirstName.slice(1);//Мария

    console.log(userFirstName);

    //Выводим результат в инпут
    document.querySelector('#userFirstName').value = userFirstName;

    let smallPatronym = names[2].toLowerCase(); //викторовна
    let userPatronym = smallPatronym[0].toUpperCase()+smallPatronym.slice(1);//Викторовна

    console.log(userPatronym);

    //Выводим результат в инпуты
    document.querySelector('#userPatronym').value = userPatronym;

    let smallLastName = names[0].toLowerCase(); //петрова
    let lastName = smallLastName[0].toUpperCase()+smallLastName.slice(1);//Петрова

    let doubleLastName = lastName.split("-");//На случай двойной фамилии

            if (doubleLastName.length !=2){//Стандартная ситуация: одинарная фамилия
                let userLastName= lastName;
                console.log(userLastName);

                //Выводим результат в инпут
                document.querySelector('#userLastName').value = userLastName;//Петрова

            } else {//Нестандартная ситуация: двойная фамилия через дефис
                let secondLastName = doubleLastName[1];//водкина
                let userSecondLastName = secondLastName[0].toUpperCase()+doubleLastName[1].slice(1);//Водкина

                userLastName = doubleLastName[0] + "-" + userSecondLastName;
                console.log(userLastName);

                //Выводим результат в инпут
                document.querySelector('#userLastName').value = userLastName;//Петрова-Водкина
            }

    } else {//Нестандартная ситуация: есть только 1 фамилия и 1 имя, отчества нет

        //Запихиваем в переменную и приводим в божеский вид
        let smallFirstName = names[1].toLowerCase(); //мария
        let userFirstName = smallFirstName[0].toUpperCase()+smallFirstName.slice(1);//Мария

        console.log(userFirstName);

        //Выводим результат в инпуты
        document.querySelector('#userFirstName').value = userFirstName;
        document.querySelector('#userPatronym').value = "";

        let smallLastName = names[0].toLowerCase(); //петрова
        let lastName = smallLastName[0].toUpperCase()+smallLastName.slice(1);//Петрова

        let doubleLastName = lastName.split("-");//На случай двойной фамилии

            if (doubleLastName.length !=2){//Стандартная ситуация: одинарная фамилия
                let userLastName= lastName;
                console.log(userLastName);

                //Выводим результат в инпут
                document.querySelector('#userLastName').value = userLastName;//Петрова

            } else {//Нестандартная ситуация: двойная фамилия через дефис
                let secondLastName = doubleLastName[1];//водкина
                let userSecondLastName = secondLastName[0].toUpperCase()+doubleLastName[1].slice(1);//Водкина

                userLastName = doubleLastName[0] + "-" + userSecondLastName;
                console.log(userLastName);

                //Выводим результат в инпут
                document.querySelector('#userLastName').value = userLastName;//Петрова-Водкина
            }
    }

