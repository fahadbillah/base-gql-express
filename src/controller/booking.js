import { v4 as uuid } from 'uuid';

import { bookingConfig } from '../constant';
import { CustomApolloError, isValidDate, formatDateTime } from '../utils';

import BookingModel from '../models/booking';

export default class Booking {
  constructor() {
    this.bookingModel = new BookingModel();

    let { startHour } = bookingConfig;
    const { endHour, duration } = bookingConfig;

    const totalBookingSlotPerDay = Math.floor((endHour - startHour) / duration);

    this.bookingSlots = Array.from({
      length: totalBookingSlotPerDay,
    }, (e, i) => {
      if (i === 0) {
        return startHour;
      }
      startHour += duration;
      return startHour;
    });
  }

  checkBookingAvailability(dateTime) {
    const result = this.bookingModel.getBookingByDateTime(dateTime);
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^', result);
    if (result.length >= bookingConfig.maxConsecutiveBooking) return false;
    return true;
  }

  create(input) {
    const nInput = { ...input };
    const { booking: { date, time }, vehicle, customer } = nInput;
    delete nInput.booking;

    if (!this.bookingSlots.includes(time)) {
      throw new CustomApolloError('WrongTimeSlot', `Select from these time slots ${this.bookingSlots.join(',')}.`);
    }

    const dateTime = formatDateTime(date, time);

    console.log('******', isValidDate(dateTime), dateTime);
    if (!isValidDate(dateTime)) {
      throw new CustomApolloError('InvalidDate', 'Date format should be `YYYY-MM-DD`');
    }

    const bookingDetails = {
      id: uuid(),
      dateTime,
      vehicle,
      customer,
      testId: 'testing',
    };

    if (!this.checkBookingAvailability(dateTime)) {
      throw new CustomApolloError('FullyBooked');
    }

    const result = this.bookingModel.create(bookingDetails);
    return result;
  }
}
