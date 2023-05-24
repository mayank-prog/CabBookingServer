const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

exports.PORT = process.env.PORT;
exports.MONGODB_URI = process.env.MONGODB_URI;
exports.JWT_KEY = process.env.JWT_KEY;
exports.JWT_ALGRIOTHM = process.env.JWT_ALGRIOTHM;
