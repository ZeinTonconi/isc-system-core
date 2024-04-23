import jwt from 'jsonwebtoken';
//TODO: use envs
const JWT_SECRET = 'yourSecretKey';

const generateToken = (userId: number) => {
  const payload = {
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // Token expiry set to 24 hours
    id: userId,
  };

  return jwt.sign(payload, JWT_SECRET);
};

export default generateToken;
