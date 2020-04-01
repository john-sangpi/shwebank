const express = require('express');
const app = express();



app.set('view engine','ejs');
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    console.log(req.cookies);
    res.render('index');
})
app.post('/detail',(req,res)=>{
    console.log(req.body)
    res.render('details');
})

app.post('/sendMoney',(req,res)=>{
    console.log(req.body);
    let delivery = req.body.delivery;
    let receiver = req.body.receiver;
    if(receiver == 'new'){
        res.render('sendmoney', {delivery:delivery});
    }else{
        res.render('send',{name:receiver})
    }
   
})

app.get('/step',(req,res)=>{
    res.render('transition');
})

app.post('/sucesstransaction', (req,res)=>{
    res.render('sucesstran.ejs')
})


const port = process.env.PORT || 1337;
app.listen(port,()=>{console.log(`server is listening at ${port}`)});