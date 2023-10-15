var prof1 = document.getElementById('prof1').value;
var prof2 = document.getElementById('prof2').value;
var value1 = document.getElementById('value1').value;
var value2 = document.getElementById('value2').value;



function createObject(prof1, prof2, value1, value2) {
    return {
        [prof1]: value1,
        [prof2]: value2,
    }

}

var Car1 = createObject(prof1, prof2, value1, value2);


function Person(obj) {

    Persons.push(obj);

}

var Persons = [];
var Cars = [];
var Book = [];

document.writeln(Persons);



