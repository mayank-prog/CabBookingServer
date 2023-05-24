const KYC_model = require('../models/KYC.model');


// useer_KYC_postByID  data added.
exports.useer_KYC_postByID = async (req, res) => {
    const { user_id } = req.params;
    const KYCData = req.body;
    const newKYCData = new KYC_model({
        user_id,
        ...KYCData
      });
  try {
    const data = await newKYCData.save();
    res.status(201).json(data);
  } catch (err) {
     console.log(err); 
    res.status(500).json({ error: 'An error occurred while adding the KYC data.' });
  }
};

// get kyc data by user_ID..
exports.useer_KYC_gatByID = async (req, res) => {
  try {
    const { user_id } = req.params;
    const data = await KYC_model.findOne({user_id:user_id});
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred gatting kyc data.' });
  }
};

// Update an existing address
