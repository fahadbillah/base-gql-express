export const errors = {
  WrongTimeSlot: {
    httpCode: 400,
    message: 'Wrong time slot!',
  },
  InvalidDate: {
    httpCode: 400,
    message: 'Invalid date!',
  },
  FullyBooked: {
    httpCode: 400,
    message: 'This slot is fully booked. Please choose another time.',
  },
};

export const bookingConfig = {
  startHour: 9,
  endHour: 17, // 24 hour format
  duration: 2,
  maxConsecutiveBooking: 2,
};

export const config = {
  dbName: './data/volvo.db',
  autoload: true,
  autosave: true,
  autosaveInterval: 1000,
};
