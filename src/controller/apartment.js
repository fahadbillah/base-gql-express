import { v4 as uuid } from 'uuid';

import geodist from 'geodist';

import {
  authCheck,
  getUserIdFromContext,
} from '../utils';

import Apartment from '../models/apartment';

const apartments = new Apartment();

export default {
  async create(apartment, context) {
    await authCheck(context);

    const userId = getUserIdFromContext(context);

    const {
      rooms,
      city,
      country,
      location,
    } = apartment;

    const newApartment = apartments.create({
      id: uuid(),
      rooms,
      city,
      country,
      userId,
      location,
    });
    return newApartment;
  },
  search(args) {
    const { location, filter } = args;
    let result = apartments.find(filter);

    if (location) {
      result = result
        .map((item) => {
          const apartment = { ...item };
          const { distanceLimit, ...targetPoint } = location;

          const distance = geodist(targetPoint, apartment.location);

          if (distance <= distanceLimit) {
            apartment.distance = distance;
            return apartment;
          }

          return null;
        })
        .filter((apartment) => apartment);
    }

    return result;
  },
  async remove(id, context) {
    await authCheck(context);
    return apartments.remove(id);
  },
  list(ids) {
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^', ids);
    return apartments.find({ id: { $in: ids } });
  },
};
