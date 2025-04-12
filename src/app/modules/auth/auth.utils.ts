import jwt from 'jsonwebtoken';

export const createToken = (
  jwtPalyload: { userId: string; role: string },
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPalyload, secret, {
    expiresIn,
  });
};
