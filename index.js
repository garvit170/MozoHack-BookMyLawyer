const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Mongo Connected!!!')
}).catch(err => {
    console.log(err)
});

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    barno: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: Number,
        required: true,
        required: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    }
})

const User = mongoose.model("User", userSchema);


app.use(express.static("assets"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post('/apply', (req, res) => {
    console.log(req.body)s
    User.create(
        {
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            barno: req.body.barno,
            phone: req.body.phone,
        },
        function(err, newUser) {
            if(err){
                res.redirect("/")
            }else{
                res.redirect("/")
            }
        }
    )
})

app.listen(3000, function() {
  console.log("server started on port 3000");
});
