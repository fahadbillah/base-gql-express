import user from '../controller/user';
import apartment from '../controller/apartment';
import favorite from '../controller/favorite';

const resolvers = {
  FavoriteList: {
    favorites: async (root) => {
      const ids = root.map((el) => el.apartmentId);
      const result = apartment.list(ids);
      return result;
    },
  },
  Query: {
    search: (root, args) => apartment.search(args),

    favoriteList: (root, args, context) => favorite.list(context),
  },
  Mutation: {
    registration: async (root, { input }) => user.create(input),
    login: async (root, { input }) => user.authenticate(input),

    createApartment: async (root, { input }, context) => apartment.create(input, context),
    removeApartment: async (root, { id }, context) => apartment.remove(id, context),

    toggleFavorite: async (root, { id }, context) => favorite.toggle(id, context),
  },
};

export default resolvers;
