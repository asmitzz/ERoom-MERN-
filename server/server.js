const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 8000;
const mongoose = require('mongoose');

app.use(cors());
app.use( bodyParser.json({ limit:'1024mb' }) );
app.use( bodyParser.urlencoded({ limit:'1024mb', extended:true ,parameterLimit:50000000000}) );

mongoose.connect('mongodb://localhost:27017/roomrental',{ useUnifiedTopology: true,useNewUrlParser: true }).then( () => console.log("connection established") )
.catch( err => console.log(err) );

const postsSchema =  mongoose.Schema({ 
    name:String,
    rent:Number,
    lookingfor:String,
    description:String,
    address:String,
    area:String,
    pincode:Number,
    phone:Number,
    image1:String,
    image2:String,
    image3:String,
    image4:String,
    uid:String
});

const POSTS = new mongoose.model('Room_detail',postsSchema);
 
app.post('/api/insert/posts',( req, res, next) => {
     
    const result = new POSTS({
        name : req.body.name,
        rent : req.body.rent,
        lookingfor : req.body.lookingfor,
        description : req.body.describe,
        address : req.body.address,
        area : req.body.area,
        pincode : req.body.pincode,
        phone : req.body.phone,
        image1 : req.body.image1,
        image2 : req.body.image2,
        image3 : req.body.image3,
        image4 : req.body.image4,
        uid:req.body.uid
    });

    result.save();
})

app.get('/api/get/posts',( req, res, next) => {
    POSTS.find().then( post => res.send(post) );
})

app.get('/api/get/posts/:uid',( req, res, next) => {
    POSTS.find({ uid:req.params.uid }).then( post => res.send(post) );
})

app.delete('/api/delete/:id',( req, res, next) => {
    POSTS.findByIdAndRemove(req.params.id).then( remove => res.send(remove) );
})

app.listen(port,() => console.log(`server is running on : ` ,port))