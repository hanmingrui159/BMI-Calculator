const express = require("express");

const app = express();
app.use(express.urlencoded({extended: true}))

app.get("/", function(req, res) {
    console.log("retrieved file from root path");
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    console.log(req.body);
    console.log(Number(req.body.num1) + Number(req.body.num2));
    res.send("Thanks for posting that");
});

app.get('/bmicalculator', function (req, res){
    console.log("retrieved BMI calculator page");
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height * height);
    console.log("weight is: " + weight + " and height is: " + height);
    res.send("Your BMI is " + bmi);
});

app.listen(3000, function() {
    console.log(__dirname);
    console.log("Server is running on port 3000");
});