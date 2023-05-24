const express = require('express');
const router = express.Router();
const car_Controller = require('../controllers/car_Controller');

//Route for get all car by id ..
router.get('/all/:userID',car_Controller.all_car_ByUserID);

//Route for post car..
router.post('/:userID',car_Controller.useer_add_car);

// Route for get by id car..
// router.get("/:user_id" ,car_Controller.carByUserId);


//Route for put car for admin use...
// router.put("/:carid" ,car_Controller.update_service_request);


module.exports = router;