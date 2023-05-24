const Car = require('../models/car.model.js');
const Driver = require('../models/driver.model');
const KYC_model = require('../models/KYC.model');
const Usercab = require('../models/user.model');

// get
exports.get_Car_Pending_Request = async (req, res) => {
try {
  const users = await Usercab.find();

  // Retrieve pending cars for each user
  const formattedData = await Promise.all(
    users.map(async (user) => {
      const pendingCars = await Car.find({
        userID: user._id,
        status: 'Pending',
      });
      if (pendingCars.length === 0) {
          return null;
        }
      return {
        name: user.name,
        email: user.email,
        phone: user.phone,
        cars: pendingCars,
      };
    })
  );
  const filteredData = formattedData.filter(Boolean);

  res.status(201).json(filteredData);
} catch (err) {
   console.log(err); 
  res.status(500).json({ error: 'An error occurred while gating the car data.' });
}
};


exports.get_Kyc_Pending_Request = async (req, res) => {
try {
  const users = await Usercab.find();

  // Retrieve pending cars for each user
  const formattedData = await Promise.all(
    users.map(async (user) => {
      const pending_KYC = await KYC_model.find({
        user_id: user._id,
        status: 'Pending',
      });
      if (pending_KYC.length === 0) {
          return null;
        }
      return {
        name: user.name,
        email: user.email,
        phone: user.phone,
        KYC : pending_KYC,
      };
    })
  );
  const filteredData = formattedData.filter(Boolean);

  res.status(201).json(filteredData);
} catch (err) {
   console.log(err); 
  res.status(500).json({ error: 'An error occurred while gating the car data.' });
}
};


exports.car_Status_Change = async (req, res) => {
  try{
    const { user_id } = req.params;
    const {status} = req.body;
    const request = await Car.findByIdAndUpdate(user_id, {status : status} );
    res.status(201).json({status_change :"Done"});

  }catch (err) {
   console.log(err); 
  res.status(500).json({ error: 'An error occurred while changing car status.' });
}
};

exports.KYC_Status_Change = async (req, res) => {
  try{
    const { user_id } = req.params;
    const {status} = req.body;
    const request = await KYC_model.findByIdAndUpdate(user_id, {status : status} );
    res.status(201).json({status_change :"Done"});

  }catch (err) {
   console.log(err); 
  res.status(500).json({ error: 'An error occurred while changing KYC status.' });
}

};
