const sql = require('./db.js');

const Login = function (loginObj) {
    this.username = loginObj.username;
    this.password = loginObj.password;
    this.email = loginObj.email;
};