import user from './user';

const resolvers = {
  Query: {
    search: () => 'test',
  },
  Mutation: {
    registration: async (root, { input }) => user.createUser(input),
    login: async (root, { input }) => user.authenticateUser(input),
  },
};

export default resolvers;
