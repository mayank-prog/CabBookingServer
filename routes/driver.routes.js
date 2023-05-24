const express = require('express');
const router = express.Router();
const driver_Controller = require('../controllers/driver_Controller');

//Route for get all Driver by id ..
router.get('/all/:userID',driver_Controller.all_driver_ByUserID);

//Route for post Driver..
router.post('/:userID',driver_Controller.add_driver);

// Route for get by id car..
// router.get("/:user_id" ,car_Controller.carByUserId);


//Route for put car for admin use...
// router.put("/:carid" ,car_Controller.update_service_request);


module.exports = router;