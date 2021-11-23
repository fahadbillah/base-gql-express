export const errors = {
  MismatchConfirmPassword: 'Confirm password doesn\'t match',
  WrongPassword: 'Wrong password!',
  EmailNotFound: 'Email not found!',
};

export const config = {
  dbName: './data/homelike.db',
  saltRounds: 5,
  jwtExpiresIn: '1800s',
};
