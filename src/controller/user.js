import { v4 as uuid } from 'uuid';

import {
  passwordHash,
  passwordCompare,
  generateAccessToken,
  CustomApolloError,
} from '../utils';

import User from '../models/user';

const users = new User();

export default {
  async create(user) {
    const newUser = { ...user };

    try {
      if (newUser.password !== newUser.confirmPassword) throw new Error('MismatchConfirmPassword');

      delete newUser.confirmPassword;
      newUser.password = await passwordHash(newUser.password);
      newUser.joined = new Date().toISOString();
      newUser.id = uuid();

      users.create(newUser);
    } catch (error) {
      throw new CustomApolloError(error);
    }

    return newUser;
  },
  async authenticate(login) {
    const { email, password } = login;
    const user = users.find({ email });
    if (user === null) {
      throw new CustomApolloError('EmailNotFound');
    }
    const compare = await passwordCompare(password, user.password);
    if (!compare) {
      throw new CustomApolloError('WrongPassword');
    }
    return generateAccessToken({ id: user.id });
  },
};
