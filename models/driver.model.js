const { model, Schema } = require("mongoose");

const driverSchema = new Schema({
    userID: {type: String,required: true},
    name: { type: String, required: true },
    license_Number: { type: String, required: true,},
    phone: { type: Number, required: true }
  });

module.exports = model("DriverModel", driverSchema);   