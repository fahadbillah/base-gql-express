export const errors = {
  MismatchConfirmPassword: {
    httpCode: 400,
    message: 'Confirm password doesn\'t match',
  },
  WrongPassword: {
    httpCode: 400,
    message: 'Wrong password!',
  },
  EmailNotFound: {
    httpCode: 400,
    message: 'Email not found!',
  },
  NotAuthenticated: {
    httpCode: 401,
    message: 'User not authenticated',
  },
};

export const config = {
  dbName: './data/homelike.db',
  saltRounds: 5,
  jwtExpiresIn: '1800s',
};
