const connectToMongo=require('./db');

const express = require('express')
const app = express()
const port = 5000
const cors=require('cors');
require('dotenv').config()
connectToMongo();

app.use(express.json());// it's called mildleware
app.use(cors())
app.use('/static',express.static('upload'))


app.get('/',(req,res)=>{
    res.send("hii what about you");
})
app.use('/api/auth',require('./routes/auth'));
app.use('/image',require('./routes/Imag'));
app.use('/api/doctor',require('./routes/doctor'));
app.use('/api/admin',require('./routes/admin'));
app.use('/api/connection',require('./routes/Connection'));
app.use('/api/doctorconnection',require('./routes/DoctorConnection'));
app.use('/api/adminconnection',require('./routes/adminconnection'));
app.use('/unknownuser', require('./routes/QuestionAnswer'));




app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${port}`)
  })