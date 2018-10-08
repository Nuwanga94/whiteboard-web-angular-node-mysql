
const express = require('express');
const bodyParser = require('body-parser');
const user = require('./Controllers/register-controller')
const cors = require('cors');
const login =require('./Controllers/login-controller');
const view =require('./Controllers/get-controller');
//const signup = require( './controllers/register-controller.js')


const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());


app.get('/', function(req,res){
    res.send('Hello from server');
})
app.post('/enroll', user.signup);
app.post('/login', login.login);//call for login page
app.get('/view',view.profile);
app.listen(PORT,function(){
    console.log("Server running on localhost" + PORT);
});





