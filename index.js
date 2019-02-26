var express = require('express'),
    app = express(),
    connection = require('./js/connections'),
    clientqueries = require('./js/clientqueries'),
    bodyParser = require('body-parser');
app.engine('html',require('ejs').renderFile)
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json({limit:'10mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}))
app.get('/categorycount/:clientcategory',(req,res) => {
    console.log('clients invoked bro')
    connection.doQuery(clientqueries.categoryCount(req.params),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.get('/categorygets/:clientcategory',(req,res) => {
    console.log('clients invoked bro')
    connection.doQuery(clientqueries.categoryGets(req.params),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.get('/clients/:segment/:offset',(req,res) => {
    console.log('clients invoked bro')
    connection.doQuery(clientqueries.gets(req.params),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.get('/clientgetbyname/:name',(req,res) => {
    console.log('clients invoked bro')
    connection.doQuery(clientqueries.getByName(req.params),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.post('/clientupdate',(req,res) => {
    console.log('clientupdate invoked bro')
    connection.doQuery(clientqueries.update(req.body),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.post('/clientcreate',(req,res) => {
    console.log('clientcreate invoked bro')
    connection.doQuery(clientqueries.create(req.body),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.listen(process.env.PORT||2119)