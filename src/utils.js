import bcrypt from 'bcrypt';
import { ApolloError } from 'apollo-server-errors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { config, errors } from './constant';

dotenv.config();

export async function passwordHash(password) {
  const { saltRounds } = config;
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@', saltRounds);
  return bcrypt.hash(password, saltRounds);
}

export async function passwordCompare(password, hash) {
  return bcrypt.compare(password, hash);
}

export function generateAccessToken(username) {
  const { jwtExpiresIn: expiresIn } = config;
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn });
}

export class CustomApolloError extends ApolloError {
  constructor(error) {
    if (!(error instanceof Error)) {
      // eslint-disable-next-line no-param-reassign
      error = new Error(error);
    }

    if (errors[error.message] === undefined) {
      super(error.message, 'UnknownError');
    } else {
      super(errors[error.message], error.message);
    }
  }
}
