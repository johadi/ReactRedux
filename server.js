const express=require('express');
const path=require('path');
const http=require('http');
const logger=require('morgan');
const config=require('config');
const bodyParser=require('body-parser');
const cors=require('cors');

const mongooseSetting=require('./server/utils/mongoose_setting');
const router=require('./server/routes/index');

//mongoose configuration
mongooseSetting();

let app=express();

//app.use(cors());
app.set('port',process.env.PORT || config.get('app.port'));
// app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(logger('dev'));


//router configuration
router(app);

app.listen(app.get('port'),(err)=>{
    if(err) return console.log(err);
    console.log('app running on port '+app.get('port'));
});


