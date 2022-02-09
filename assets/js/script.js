//Запрашиваем инфо и обрезаем пробелы в начале и конце
const fullName = prompt(`Введите ФИО`).trim();

//Делим на части
const namesSpaces = fullName.split(" ");

function deleteSpaces(value) {//Удаляем пустые элементы = пробелы внутри ФИО
    return value != '';
};

const names = namesSpaces.filter(deleteSpaces);

if (names.length>2){//Стандартная ситуация: есть 1 фамилия, 1 имя и 1 отчество

    //Запихиваем в переменную и приводим в божеский вид
    const smallFirstName = names[1].toLowerCase(); //мария
    const userFirstName = smallFirstName[0].toUpperCase()+smallFirstName.slice(1);//Мария

    //Выводим результат в инпут
    document.querySelector('#userFirstName').value = userFirstName;

    const smallPatronym = names[2].toLowerCase(); //викторовна
    const userPatronym = smallPatronym[0].toUpperCase()+smallPatronym.slice(1);//Викторовна

    //Выводим результат в инпуты
    document.querySelector('#userPatronym').value = userPatronym;

    const smallLastName = names[0].toLowerCase(); //петрова
    const lastName = smallLastName[0].toUpperCase()+smallLastName.slice(1);//Петрова

    const doubleLastName = lastName.split("-");//На случай двойной фамилии

            if (doubleLastName.length !=2){//Стандартная ситуация: одинарная фамилия
                let userLastName= lastName;

                //Выводим результат в инпут
                document.querySelector('#userLastName').value = userLastName;//Петрова

            } else {//Нестандартная ситуация: двойная фамилия через дефис
                const secondLastName = doubleLastName[1];//водкина
                const userSecondLastName = secondLastName[0].toUpperCase()+doubleLastName[1].slice(1);//Водкина

                userLastName = doubleLastName[0] + "-" + userSecondLastName;

                //Выводим результат в инпут
                document.querySelector('#userLastName').value = userLastName;//Петрова-Водкина
            }

    } else {//Нестандартная ситуация: есть только 1 фамилия и 1 имя, отчества нет

        //Запихиваем в переменную и приводим в божеский вид
        const smallFirstName = names[1].toLowerCase(); //мария
        const userFirstName = smallFirstName[0].toUpperCase()+smallFirstName.slice(1);//Мария

        //Выводим результат в инпуты
        document.querySelector('#userFirstName').value = userFirstName;
        document.querySelector('#userPatronym').value = "";

        const smallLastName = names[0].toLowerCase(); //петрова
        const lastName = smallLastName[0].toUpperCase()+smallLastName.slice(1);//Петрова

        const doubleLastName = lastName.split("-");//На случай двойной фамилии

            if (doubleLastName.length !=2){//Стандартная ситуация: одинарная фамилия
                let userLastName= lastName;

                //Выводим результат в инпут
                document.querySelector('#userLastName').value = userLastName;//Петрова

            } else {//Нестандартная ситуация: двойная фамилия через дефис
                const secondLastName = doubleLastName[1];//водкина
                const userSecondLastName = secondLastName[0].toUpperCase()+doubleLastName[1].slice(1);//Водкина

                userLastName = doubleLastName[0] + "-" + userSecondLastName;

                //Выводим результат в инпут
                document.querySelector('#userLastName').value = userLastName;//Петрова-Водкина
            }
    }

    document.querySelector("#confirm").addEventListener("click", function(event) {
        event.preventDefault();

        console.log(userFirstName.value, userPatronym.value, userLastName.value);//Просто проверить сохраняются ли исправленные значения

        document.querySelector('#userFirstName').value = ''; //Очищаем форму после отправки
        document.querySelector('#userPatronym').value = '';
        document.querySelector('#userLastName').value = '';

        document.getElementById('successMessage').innerHTML = 'Спасибо. Ваши данные отправлены.';

    });
