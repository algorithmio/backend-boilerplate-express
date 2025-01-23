const Joi = require("joi");

const classSchema = Joi.object({
  class_name: Joi.string().max(255).required(),
  section_name: Joi.string().max(255).required(),
  teacher_name: Joi.string().max(255).allow(null).optional(),
});

module.exports = { classSchema };
