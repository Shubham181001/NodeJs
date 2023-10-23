let http = require('http');
let fs = require('fs');

//req > what we send to server(params, queryparams, body)
//res > what server sends in return is known as response.

// let data = fs.readFileSync('city.json', {encoding: 'utf-8', flag: 'r'});

let server = http.createServer((req, res) => {
    res.write(`This is Shubham's nodejs server code app`);
    res.end();
});

server.listen(7600);