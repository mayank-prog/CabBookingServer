const { model, Schema } = require("mongoose");

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true,},
    phone: { type: String, required: true, unique: true },
    phoneOtp:{type:Number,required:true}
  });

module.exports = model("Usercab", userSchema);  