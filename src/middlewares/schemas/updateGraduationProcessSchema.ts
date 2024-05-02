import Joi from 'joi';

const updateGraduationProcessSchema = Joi.object({
  student_id: Joi.number().integer().optional().messages({
    'number.base': 'Modality ID must be an integer',
  }),
  modality_id: Joi.number().integer().optional().messages({
    'number.base': 'Modality ID must be an integer',
  }),
  project_name: Joi.string().optional(),
  period: Joi.string().optional(),
})
  .min(1)
  .messages({
    'object.min': 'At least one field must be provided',
  });

export { updateGraduationProcessSchema };
