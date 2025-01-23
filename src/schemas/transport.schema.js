const Joi = require("joi");

const createTransportSchema = Joi.object({
  transport_number: Joi.number().required(),
  vehicle_number: Joi.string().max(50).required(),
  route: Joi.string().max(100).required(), 
  driver_name: Joi.string().max(100).required(),
});

module.exports = { createTransportSchema };
