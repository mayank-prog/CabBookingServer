const mongoose = require("mongoose");
const { MONGODB_URI } = require('../config.js');


mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(()=> {
    console.log("successful")
 }).catch((err)=> console.log("error"))
