exports.index =(req, res)=>{
    let obj = {
        'pagetitle':'home'
    };
    
    res.render('home', obj);
}