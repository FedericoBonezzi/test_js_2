'use strict';
const fs = require('fs');
const student = require('./students.json');

const text = student.name + ' ' + student.surname + ' ' + student.age;
const path = './text.txt';

fs.writeFile(path, text, error => {
    console.log('file creato con successo');
});

console.log('sto creando il file...');