let fs = require('fs');

// fs.writeFile('mycode.txt', 'This is my data of node \n',(err)=>{
//     if(err) throw err;
//     else console.log('Task Done');
// });

// Callback gets executed only after the task is done or there is any kind of error and due to which the task can not be completed.

// if you try to use the writeFile again then it overwrites the previous written text in the provided file.

// fs.writeFile('mycode.txt', 'We are using express', (err) => {
//     if(err) throw err;
//     else console.log('task done !!');
// });

// It will overwrite the previous written text and the new text would be "We are using expressode". That ode was extra in the previous written code that is why it did not got overwritten.

// fs.appendFile('mycode.txt', 'Code from Node FS \n', (err) => {
//     if(err) throw err;
//     else console.log('file appended');
// });

// fs.readFile('city.json', 'utf-8', (err, data) => {
//     if(err) throw err;
//     else console.log(data);
// });

// fs.readFile('lorem.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     else console.log(data);
// });

// let data = fs.readFileSync('city.json', {encoding: 'utf-8', flag: 'r'});
// console.log(data);

// let data1 = fs.readFileSync('lorem.txt', {encoding: 'utf-8', flag: 'r'});
// console.log(data1);

// fs.unlink('mycode1.txt', (err) => {
//     if(err) throw err;
//     console.log('file deleted');
// });

fs.rename('myText.txt', 'myFile.xml', (err) => {
    if(err) throw err;
    console.log('file renamed');
});