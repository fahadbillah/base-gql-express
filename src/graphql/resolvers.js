import Booking from '../controller/booking';

const booking = new Booking();

const resolvers = {
  Query: {
    getBooking: (root, { filter }) => booking.search(filter),
  },
  Mutation: {
    createBooking: async (root, { input }) => booking.create(input),
  },
};

export default resolvers;
