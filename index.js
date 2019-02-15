var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
app.engine('html',require('ejs').renderFile)
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json({limit:'10mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}))
app.get('/clients',(req,res) => {
    res.send({'test':'hi'})
})
app.listen(process.env.PORT||2119)