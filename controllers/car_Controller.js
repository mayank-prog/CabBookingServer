const Car = require('../models/car.model.js');

// Create a new car with user_id..
exports.useer_add_car = async (req, res) => {
  const { userID } = req.params;
  const car = req.body;
  const newCar= new Car({
     userID,
      ...car
    });
try {
  const data = await newCar.save();
  res.status(201).json(data);
} catch (err) {
   console.log(err); 
  res.status(500).json({ error: 'An error occurred while adding the car data.' });
}
};

// get all car by user_ID..
exports.all_car_ByUserID = async (req, res) => {
  try {
    const { userID } = req.params;
    const data = await Car.find({userID:userID});
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Update an existing address
