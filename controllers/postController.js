const mongoose = require ('moongoose');
const Post = mongoose.model('Post');

exports.add = (req, res)=>{
    res.render('postAdd');
};

exports.addAction = (req, res) =>{
      
};