const moongose = require("mongoose");
const Joi = require("joi");
//model database
const Customer = moongose.model(
  "Customer",
  new moongose.Schema({
    name: { type: String, required: true, minlength: 5, maxlength: 255 },
    isGold: { type: Boolean, required: false },
    phone: { type: Number, required: true, minlength: 11, maxlength: 11 },
  })
);

//joi validation
validateCustomer = (customer) => {
  const schema = {
    name: Joi.string().min(3).max(255).required(),
    phone: Joi.string().min(11).max(11).required(),
    isGold: Joi.boolean(),
  };
  return Joi.validate(customer, schema);
};
exports.Customer = Customer;
exports.validate = validateCustomer;
