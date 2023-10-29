let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 6700;

//default route
app.get('/',(req,res) => {
    res.send("Hiii From Express made by shubham agarwal");
});

app.get('/test', (req, res) => {
    res.send('Test Route');
});

app.listen(port,(err) => {
    if(err) throw err;
    else {
        console.log(`Server is running on port ${port}`);
    }
});