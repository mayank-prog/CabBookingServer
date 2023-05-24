var express = require('express');
var app = express();
app.use(express.json());
const { PORT } = require('./config.js');


const cors = require('cors');
app.use(cors({
    origin: '*'
}));

//connecting with db
require('./DBconnection/dbconnect');

// const auth = require('./middlewares/checkAuth.js')

// app.post('/protected', auth, (req, res) => {
//     res.send(`Welcome..`);
//   });

//only for testing purpose...
app.get('/',(req,res)=>{
     res.status(200).send("app is up and reuunig");
});

//user_auth routes require..
const user_signup_login = require('./routes/signup_login');
// Set up for auth routes
app.use('/user', user_signup_login);

//user_kyc routes require..
//set up for user_kyc data..
const user_kyc = require('./routes/user_kyc.routes');
app.use('/user_kyc', user_kyc);


//addCar routes require..
//set up for car opreactions.
const Car = require('./routes/car.routes');
app.use('/car', Car);

//addDriver routes require..
//set up for driver opreactions.
const Driver = require('./routes/driver.routes');
app.use('/driver', Driver);

// admin requests routes require..
//set up for admin opreactions.
const admin_request_Routes = require('./routes/admin.routes');
app.use('/admin_request',admin_request_Routes);



// Start the server
app.listen(PORT,()=>{
    console.log(`SERVER is running port no ${PORT}`)
});
