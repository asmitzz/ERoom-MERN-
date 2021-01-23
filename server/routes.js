const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

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

const usersSchema = mongoose.Schema({
     firstName:String,
     lastName:String,
     gender:String,
     pic:String,
     uid:String
});

const feedbackScheme = mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    message:String
});

const POSTS = new mongoose.model('Room_detail',postsSchema);
const USERS = new mongoose.model('User_detail',usersSchema);
const FEEDBACKS = new mongoose.model('Feedback',feedbackScheme);
    
router.post('/api/insert/posts',( req, res, next) => {
     
    POSTS({
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
    }).save();

});

router.post('/api/update/post/:id',( req, res, next) => {
     
    POSTS.updateOne({ _id:req.params.id },
    { $set:
        {
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
      } 
    }).then( update => res.send(update) ).catch( err => console.log(err));

});

router.get('/api/get/posts',( req, res, next) => {
    POSTS.find().then( post => res.send(post) );
});

router.get('/api/get/posts/name',( req, res, next) => {
    POSTS.find({},{name:1}).then( post => res.send(post) );
});

router.get('/api/get/posts/:uid',( req, res, next) => {
    POSTS.find({ uid:req.params.uid }).then( post => res.send(post) );
});

router.get('/api/get/post/:id',( req, res, next) => {
    POSTS.find({ _id:req.params.id }).then( post => res.send(post) );
});

router.delete('/api/delete/:id',( req, res, next) => {
    POSTS.findByIdAndRemove(req.params.id).then( remove => res.send(remove) );
});

router.post('/api/insert/users',( req, res, next) => {
    USERS.updateOne({ uid: req.body.uid},{
        $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            pic : req.body.pic,
        },
        
    },{ upsert:true }).then(update => res.send(update) ).catch(err => console.log(err))
})

router.get('/api/get/users/:uid',( req ,res , next) => {
     USERS.find({ uid: req.params.uid }).then( user => res.send(user) );
});

router.post('/api/insert/feedbacks',( req ,res , next) => {

    const result = new FEEDBACKS({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });

    result.save();
});


module.exports = router;