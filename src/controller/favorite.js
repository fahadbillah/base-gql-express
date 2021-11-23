import {
  authCheck,
  getUserIdFromContext,
} from '../utils';

import Favorite from '../models/favorite';

const favorite = new Favorite();

export default {
  async toggle(apartmentId, context) {
    await authCheck(context);

    const userId = getUserIdFromContext(context);

    const result = favorite.toggle({
      apartmentId,
      userId,
    });
    return result;
  },

  async list(context) {
    await authCheck(context);
    const userId = getUserIdFromContext(context);
    const result = favorite.find({ userId });
    return result;
  },
};
