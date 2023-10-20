
function createObject(prof1, prof2, value1, value2) {
    return {
        [prof1]: value1,
        [prof2]: value2,
        Print(){
            return `${prof1}: ${value1}, ${prof2}: ${value2} <br>`;
        }
    }

}


var Persons = [
    new createObject('Имя', 'Возраст', 'Анатолий', 18),
    new createObject('Имя', 'Возраст', 'Макс', 19),
    new createObject('Имя', 'Возраст', 'Илья', 19)
];

var Cars = [
    new createObject('Марка', 'ДатаВыпуска', 'Lamborghini Aventador', 2011),
    new createObject('Марка','ДатаВыпуска', 'Koenigsegg Jesko Absolut', 2020),
    new createObject('Марка','ДатаВыпуска', 'Toyota AE86', 1983)
];

var Book = [
    new createObject('НазваниеКниги', 'ДатаПубликации', 'The Witcher. The Last Wish', 1986),
    new createObject('НазваниеКниги', 'ДатаПубликации', 'The Hobbit', 1937),
    new createObject('НазваниеКниги', 'ДатаПубликации', 'Дом в котором', 2000)
];
document.writeln('Люди' + '<br>');
for(var i = 0; i < Persons.length; i++){
    document.writeln(Persons[i].Print() + '<br>');
}
document.writeln('Машины' + '<br>');
for(var i = 0; i < Cars.length; i++){
    document.writeln(Cars[i].Print() + '<br>');
}
document.writeln('Книги' + '<br>');
for(var i = 0; i < Book .length; i++){
    document.writeln(Book[i].Print() + '<br>');
}






