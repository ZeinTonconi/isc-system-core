import Joi from 'joi';

const CreateRolSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Name is required.',
  }),
  //TODO: Asignar descripción cuando se actualicen las migraciones
  // description: Joi.string().optional().messages({
  //   'any.required': 'description is required.',
  // }),
});

export default CreateRolSchema;
