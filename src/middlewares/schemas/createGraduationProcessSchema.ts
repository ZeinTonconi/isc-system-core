import Joi from 'joi';

const createGraduationProcessSchema = Joi.object({
  student_code: Joi.number().integer().required().messages({
    'number.base': 'Student ID must be an integer',
    'any.required': 'Modality ID is required',
  }),
  modality_id: Joi.number().integer().required().messages({
    'number.base': 'Modality ID must be an integer',
    'any.required': 'Modality ID is required',
  }),
  project_name: Joi.string().required().messages({
    'any.required': 'Project name is required',
  }),
  period: Joi.string().required().messages({
    'any.required': 'Period is required',
  }),
});

export { createGraduationProcessSchema };
