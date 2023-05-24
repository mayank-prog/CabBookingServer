const express = require('express');
const router = express.Router();
const admin_Controller = require('../controllers/admin.controller');

//Route for get all car by id ..
router.get('/allCarPanding',admin_Controller.get_Car_Pending_Request);

//Route for post car..
router.get('/allKYCPanding',admin_Controller.get_Kyc_Pending_Request);

// Route for change status by id car.. 
router.post("/car_status/:user_id" ,admin_Controller.car_Status_Change);


// Route for change status by id kyc.. 
router.post("/KYC_status/:user_id" ,admin_Controller.KYC_Status_Change);



module.exports = router;