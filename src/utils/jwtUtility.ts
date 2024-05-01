import jwt from 'jsonwebtoken';
import config from '../config/config';
//TODO: use envs
const JWT_SECRET = config.jwt.tokenSecret;

const generateToken = (userId: number) => {
  const payload = {
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // Token expiry set to 24 hours
    id: userId,
  };

  return jwt.sign(payload, JWT_SECRET);
};

export default generateToken;
