const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) =>{
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) =>{
    const w = parseFloat(req.body.weight);
    const h = parseFloat(req.body.height);
    const r =  w/(h*h);

    res.send(`Your BMI is ${r}`);
});

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
});