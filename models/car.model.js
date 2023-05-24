const { model, Schema } = require("mongoose");

const carSchema = new Schema({
    
        userID: {
          type: String,
          required: true
        },
        carNumber: {
          type: String,
          required: true
        },
        insuranceNumber: {
          type: String,
          required: true
        },
        chassisNumber: {
          type: String,
          required: true
        },
        permitNumber: {
          type: String,
          required: true
        },
        model: {
          type: String,
          required: true
        },
        carName: {
          type: String,
          required: true
        },
        fuelType: {
          type: String,
          required: true
        },
        numberOfSeats: {
          type: Number,
          required: true
        },
        status: {
            type: String,
            default: "Pending",
        },
  });

module.exports = model("Car", carSchema);  
