import bcrypt from 'bcrypt';
import { ApolloError } from 'apollo-server-errors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { config, errors } from './constant';

dotenv.config();

export class CustomApolloError extends ApolloError {
  constructor(error) {
    if (!(error instanceof Error)) {
      // eslint-disable-next-line no-param-reassign
      error = new Error(error);
    }
    if (errors[error.message] === undefined) {
      super(error.message, 'UnknownError', {
        httpCode: 400,
      });
    } else {
      const { httpCode, message } = errors[error.message];
      super(message, error.message, {
        httpCode,
      });
    }
  }
}

export async function passwordHash(password) {
  const { saltRounds } = config;
  return bcrypt.hash(password, saltRounds);
}

export async function passwordCompare(password, hash) {
  return bcrypt.compare(password, hash);
}

export function generateAccessToken(username) {
  const { jwtExpiresIn: expiresIn } = config;
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn });
}

export async function authCheck(context) {
  const { authToken } = context;

  if (!authToken) {
    throw new CustomApolloError('NotAuthenticated');
  }

  try {
    await jwt.verify(authToken, process.env.TOKEN_SECRET);
  } catch (error) {
    throw new CustomApolloError('NotAuthenticated');
  }
}

export function getUserIdFromContext(context) {
  const { authToken } = context;
  const { id } = jwt.decode(authToken);
  return id;
}
