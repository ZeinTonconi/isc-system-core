import bcrypt from 'bcryptjs';

export const verifyPassword = async (
  inputPassword: string,
  storedPassword: string
): Promise<boolean> => {
  try {
    return await bcrypt.compare(inputPassword, storedPassword);
  } catch (error) {
    console.error('Error al verificar la contraseña:', error);
    throw error;
  }
};
