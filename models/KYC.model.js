const mongoose = require('mongoose');

const KYCSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  account_no: {
    type: String,
    required: true
  },
  upi_id: {
    type: String,
    required: true
  },
  Addhar: {
    addhar_no: String,
    addhar_url: String
  },
  Pan: {
    pan_no: String,
    pan_url: String
  },
  status: {
    type: String,
    default: "Pending",
},
});

module.exports = mongoose.model('KYC_model', KYCSchema);
