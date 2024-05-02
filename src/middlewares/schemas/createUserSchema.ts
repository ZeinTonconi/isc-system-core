import Joi from 'joi';

const baseUserSchema = {
  username: Joi.string().required().messages({
    'any.required': 'Username is required.',
  }),
  name: Joi.string().required().messages({
    'any.required': 'Name is required.',
  }),
  lastname: Joi.string().required().messages({
    'any.required': 'Last name is required.',
  }),
  mothername: Joi.string().optional(),
  email: Joi.string().email().required().messages({
    'string.email': 'Please provide a valid email address.',
    'any.required': 'Email is required.',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password must be at least 6 characters long.',
    'any.required': 'Password is required.',
  }),
};

const createAdminSchema = Joi.object({
  ...baseUserSchema,
});

const createStudentSchema = Joi.object({
  ...baseUserSchema,
});

const createProfessorSchema = Joi.object({
  ...baseUserSchema,
});

export { createAdminSchema, createStudentSchema, createProfessorSchema };
