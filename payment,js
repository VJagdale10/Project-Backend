var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('PAYMENT'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/payment",(req,res)=>{
    var cno = req.body.cno;
    var cname = req.body.cname;
    var date = req.body.date;
    var cvv = req.body.cvv

    var data = {
        "cno": cno,
        "cnane" : cname,
        "date":date,
        "cvv":cvv
    }

    db.collection('payment').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });
    
    return res.redirect('pay.html')

})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('pay.html');
}).listen(3000);
