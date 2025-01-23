const Joi = require("joi");

const createStudentSchema = Joi.object({
  // Personal Information
  first_name: Joi.string().max(50).required(),
  last_name: Joi.string().max(50).required(),
  avatar_url: Joi.string().max(255).uri().allow(null, "").optional(),
  gender: Joi.string().valid("MALE", "FEMALE").required(),
  date_of_birth: Joi.date().max("now").min("1900-01-01").required(),
  religion: Joi.string().max(50).required(),
  class_id: Joi.number().integer().required(),
  nationality: Joi.string().max(50).allow(null, "").optional(),
  blood_group: Joi.string().max(5).allow(null, "").optional(),
  speaks_urdu: Joi.boolean().allow(null, "").optional(),
  knowledge_of_english: Joi.boolean().allow(null, "").optional(),
  handedness: Joi.string()
    .valid("LEFT", "RIGHT", "AMBIDEXTROUS")
    .allow(null, "")
    .optional(),
  physical_condition: Joi.boolean().required(),
  disability_description: Joi.when("physical_condition", {
    is: true,
    then: Joi.string().max(255).required(),
    otherwise: Joi.string().allow(null, ""),
  }),
  address: Joi.string().required(),

  // Parents/Guardian Details
  father_name: Joi.string().max(100).required(),
  mother_name: Joi.string().max(100).required(),
  father_education: Joi.string().max(100).allow(null, "").optional(),
  mother_education: Joi.string().max(100).allow(null, "").optional(),
  father_occupation: Joi.string().max(100).allow(null, "").optional(),
  mother_occupation: Joi.string().max(100).allow(null, "").optional(),
  landline_number: Joi.string().max(15).allow(null, "").optional(),
  cell_phone_number: Joi.string().max(15).required(),

  // Sibling Information
  number_of_children: Joi.number().integer().allow(null, "").optional(),
  child_position: Joi.number().integer().allow(null, "").optional(),
  siblings_in_school: Joi.array()
    .items(Joi.string().max(255))
    .allow(null, "")
    .optional(),

  // Admission Details
  admission_no: Joi.string().max(50).required(),
  date_of_admission: Joi.date().min(Joi.ref("date_of_birth")).required(),
  transport_id: Joi.when("school_transport_required", {
    is: true,
    then: Joi.number().integer().required(),
    otherwise: Joi.number().integer().allow(null, ""),
  }),
  admitted_in_class: Joi.string().max(50).required(),
  previous_school_name: Joi.string().required(),
  school_leaving_certificate: Joi.boolean().required(),
  principal_remarks: Joi.string().allow(null, "").optional(),

  // Fee Details
  admission_fee: Joi.string().max(50).required(),
  tuition_fee: Joi.string().max(50).required(),
  school_transport_required: Joi.boolean().required(),
  transport_fee: Joi.when("school_transport_required", {
    is: true,
    then: Joi.string().max(50).required(),
    otherwise: Joi.string().max(50).allow(null, "").required(),
  }),
  security_fee: Joi.string().max(50).allow(null, "").optional(),
  medical_fee: Joi.string().max(50).allow(null, "").optional(),
  student_card: Joi.string().max(50).allow(null, "").optional(),
});

const studentfiltersSchema = Joi.object({
  search: Joi.string().allow("").optional(),
  class_id: Joi.number().integer().optional(),
  transport_id: Joi.number().integer().optional(),
  paid_until: Joi.date().iso().optional(),
  fees_status: Joi.string().valid("CURRENT", "WARNING", "DEFAULTER").optional(),
});

const updateStudentSchema = Joi.object({
  // Personal Information
  first_name: Joi.string().max(50).optional(),
  last_name: Joi.string().max(50).optional(),
  avatar_url: Joi.string().max(255).uri().allow(null, "").optional(),
  gender: Joi.string().valid("MALE", "FEMALE").optional(),
  date_of_birth: Joi.date().max("now").min("1900-01-01").optional(),
  religion: Joi.string().max(50).optional(),
  class_id: Joi.number().integer().optional(),
  nationality: Joi.string().max(50).allow(null, "").optional(),
  blood_group: Joi.string().max(5).allow(null, "").optional(),
  speaks_urdu: Joi.boolean().allow(null, "").optional(),
  knowledge_of_english: Joi.boolean().allow(null, "").optional(),
  handedness: Joi.string()
    .valid("LEFT", "RIGHT", "AMBIDEXTROUS")
    .allow(null, "")
    .optional(),
  physical_condition: Joi.boolean().optional(),
  disability_description: Joi.when("physical_condition", {
    is: true,
    then: Joi.string().max(255).optional(),
    otherwise: Joi.string().allow(null, "").optional(),
  }),
  address: Joi.string().optional(),

  // Parents/Guardian Details
  father_name: Joi.string().max(100).optional(),
  mother_name: Joi.string().max(100).optional(),
  father_education: Joi.string().max(100).allow(null, "").optional(),
  mother_education: Joi.string().max(100).allow(null, "").optional(),
  father_occupation: Joi.string().max(100).allow(null, "").optional(),
  mother_occupation: Joi.string().max(100).allow(null, "").optional(),
  landline_number: Joi.string().max(15).allow(null, "").optional(),
  cell_phone_number: Joi.string().max(15).optional(),

  // Sibling Information
  number_of_children: Joi.number().integer().allow(null, "").optional(),
  child_position: Joi.number().integer().allow(null, "").optional(),
  siblings_in_school: Joi.array()
    .items(Joi.string().max(255))
    .allow(null, "")
    .optional(),

  // Admission Details
  admission_no: Joi.string().max(50).optional(),
  date_of_admission: Joi.date().min(Joi.ref("date_of_birth")).optional(),
  transport_id: Joi.when("school_transport_required", {
    is: true,
    then: Joi.number().integer().optional(),
    otherwise: Joi.number().integer().allow(null, "").optional(),
  }),
  admitted_in_class: Joi.string().max(50).optional(),
  previous_school_name: Joi.string().optional(),
  school_leaving_certificate: Joi.boolean().optional(),
  principal_remarks: Joi.string().allow(null, "").optional(),

  // Fee Details
  admission_fee: Joi.string().max(50).optional(),
  tuition_fee: Joi.string().max(50).optional(),
  school_transport_required: Joi.boolean().optional(),
  transport_fee: Joi.when("school_transport_required", {
    is: true,
    then: Joi.string().max(50).optional(),
    otherwise: Joi.string().max(50).allow(null, "").optional(),
  }),
  security_fee: Joi.string().max(50).allow(null, "").optional(),
  medical_fee: Joi.string().max(50).allow(null, "").optional(),
  student_card: Joi.string().max(50).allow(null, "").optional(),
}).min(1);

module.exports = {
  createStudentSchema,
  studentfiltersSchema,
  updateStudentSchema,
};
