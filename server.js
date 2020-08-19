const express = require('express');
const app = express();
const path  = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const morgan = require('morgan');
const PORT = process.env.PORT || 3030;

const dotenv = require('dotenv');

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=> {
    console.log("Database Connnected!");
}).catch(err => {
    console.log("DB ERROR ", err);
})


const ProductRoute = require('./Routes/ProductRoute');
app.use('/api',ProductRoute);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('cookbook_v1/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname,'cookbook_v1','build','index.html'));

    })
}



app.listen(PORT,() => {
    console.log("Server Running at port : "+ PORT);

})
