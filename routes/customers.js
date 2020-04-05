const moongose = require("mongoose");
const express = require("express");
const Joi = require("joi");
const router = express.Router();

//model database
const Customer = moongose.model(
  "Customer",
  new moongose.Schema({
    name: { type: String, required: true, minlength: 5, maxlength: 255 },
    isGold: { type: Boolean, required: false },
    phone: { type: Number, required: true, minlength: 11, maxlength: 11 },
  })
);

//get request to read all customers
router.get("/", async (req, res) => {
  const customer = await Customer.find().sort("name");
  res.send(customer);
});
//post request to create customer
router.post("/", async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let customer = new Customer({
    name: req.body.name,
    phone: req.body.phone,
    isGold: req.body.isGold,
  });
  customer = await customer.save();
  res.send(customer);
});
// //put request to update customer
// router.put("/:id", async (req, res) => {
//   const { error } = validateCustomer(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   const customer = await Customer.findByIdAndUpdate(
//     req.params.id,
//     { name: req.body.name },

//     { new: true }
//   );
//   if (!customer) return res.status(404).send("customer  not found");

//   res.send(customer);
// });

//delete request to remove customer
router.delete("/:id", async (req, res) => {
  const customer = await Customer.findByIdAndRemove(req.params.id);
  if (!customer) return res.status(400).send("Customer not found");
  res.send(customer);
});

//joi validation
validateCustomer = (customer) => {
  const schema = {
    name: Joi.string().min(3).max(255).required(),
    phone: Joi.string().min(11).max(11).required(),
    isGold: Joi.boolean(),
  };
  return Joi.validate(customer, schema);
};

module.exports = router;
