const Driver = require('../models/driver.model');

// Create/add driver with user_id..
exports.add_driver = async (req, res) => {
  const { userID } = req.params;
  const driver = req.body;
  const newDriver= new Driver({
     userID,
      ...driver
    });
try {
  const data = await newDriver.save();
  res.status(201).json(newDriver);
} catch (err) {
   console.log(err); 
  res.status(500).json({ error: 'An error occurred while adding the Driver data' });
}
};

// get all driver by user_ID..
exports.all_driver_ByUserID = async (req, res) => {
  try {
    const { userID } = req.params;
    const data = await Driver.find({userID:userID});
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
