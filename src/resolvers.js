const resolvers = {
  Query: {
    search: () => 'test',
  },
  Mutation: {
    registration: () => ({
      id: 1,
      name: 'Dummy User',
      email: 'johndoe@gmail.com',
      joined: new Date().toISOString(),
    }),
    login: () => 'login.jwt.token',
  },
};

export default resolvers;
