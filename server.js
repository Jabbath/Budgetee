const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Handle JSON requests
app.use(bodyParser.json());

//Handle web URL requests
app.use(bodyParser.urlencoded({ extended: true }));

//Start a basic route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Budgetee API" });
});

//Start listening on port 3000
app.listen(3000, () => {
    console.log("Listening on port 3000");
});