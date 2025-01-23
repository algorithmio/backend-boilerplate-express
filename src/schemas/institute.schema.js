const Joi = require("joi");
const { instituteType, fundingType } = require("../enums/institute.enum");

const updateInstituteSchema = Joi.object({
  // Basic Information
  institute_code: Joi.string().max(255).optional(),
  institute_name: Joi.string().max(255).optional(),
  institute_type: Joi.string().valid(...Object.values(instituteType)).optional(),

  // Branding and Media
  logo_url: Joi.string().uri().allow(null).optional(),
  rect_logo_url: Joi.string().uri().allow(null).optional(),
  banner_image_url: Joi.string().uri().allow(null).optional(),
  color_primary: Joi.string()
    .max(7)
    .pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
    .optional(),
  color_secondary: Joi.string()
    .max(7)
    .pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
    .optional(),

  // Contact Information
  address: Joi.string().allow(null).optional(),
  city: Joi.string().max(255).allow(null).optional(),
  state: Joi.string().max(255).allow(null).optional(),
  country: Joi.string().max(255).allow(null).optional(),
  postal_code: Joi.string().max(20).allow(null).optional(),
  phone_numbers: Joi.array().items(Joi.string().max(20)).allow(null).optional(),
  email: Joi.string().email().max(255).allow(null).optional(),
  website_url: Joi.string().uri().allow(null).optional(),
  social_media_links: Joi.object().allow(null).optional(),

  // Operational Details
  founded_year: Joi.number()
    .integer()
    .min(1800)
    .max(new Date().getFullYear())
    .allow(null)
    .optional(),
  number_of_students: Joi.number().integer().min(0).allow(null).optional(),
  faculty_count: Joi.number().integer().min(0).allow(null).optional(),

  // Additional Information
  mission_statement: Joi.string().allow(null).optional(),
  vision_statement: Joi.string().allow(null).optional(),
  core_values: Joi.string().allow(null).optional(),
  funding_type: Joi.string()
    .valid(...Object.values(fundingType))
    .allow(null)
    .optional(),

  // Administrative Details
  status: Joi.string().max(50).valid("ACTIVE", "INACTIVE").optional(),
}).min(1);

module.exports = {
  updateInstituteSchema,
};
