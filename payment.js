var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(bodyParser.json())
//app.use(express.static('PAYMENT'))
//app.use(bodyParser.urlencoded({
//  extended: true
//}))

mongoose.connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"))

app.post("/payment", (req, res) => {
    var cno = req.body.cno;
    var cname = req.body.cname;
    var date = req.body.date;
    var cvv = req.body.cvv;
    var addr = req.body.addr;
    var pcode = req.body.pcode;

    var data = {
        "cno": cno,
        "cname": cname,
        "date": date,
        "cvv": cvv,
        "addr": addr,
        "pcode": pcode
    }

    db.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('index.html')

})

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3000);
