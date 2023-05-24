const express = require('express');
const router = express.Router();
const user_KYC_Controller = require('../controllers/user_KYC_Controller');

//Route for get KYC data by id ..
router.get('/:user_id',user_KYC_Controller.useer_KYC_gatByID);

//Route for post KYC data..
router.post('/:user_id',user_KYC_Controller.useer_KYC_postByID);

module.exports = router;