const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    let data = [
      {name:"amit sharma",age:23,city:"ujjain"},
      {name:"bali vayas",age:24,city:"Ujjain"},
      {name:"rahul mathur",age:25,city:"Jhalawar"}
    ]
    res.render('index',{
      data:data
    });
  });

app.get('/about',function(req,res){
  res.render("about")
})

app.get("/form",function(req,res){
  res.render("form")
})
app.post('/submit',function(req,res){
  const formData = req.body;
  res.render('result',{formData})
})

app.listen(3000,function(){
 console.log("servier is listening on port 3000");
})