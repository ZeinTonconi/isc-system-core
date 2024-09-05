import Joi from 'joi';

const EditRolSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Name is required.',
  }),
  //TODO: Asignar descripción cuando se actualicen las migraciones
  // description: Joi.string().required().messages({
  //   'any.required': 'description is required.',
  // })
  //TODO: añadir la edición de habilitación del rol;
  // enabled: Joi.bool().required().messages({
  //   'any.required': 'enabled is equired',
  // }),
});

export default EditRolSchema;
