import Loki from 'lokijs';
import { config } from '../constant';

const {
  dbName,
  autoload,
  autosave,
  autosaveInterval,
} = config;

export default class BookingModel {
  constructor() {
    this.db = new Loki(dbName, {
      autoloadCallback: () => this.databaseInitialize.call(this),
      autoload,
      autosave,
      autosaveInterval,
    });
  }

  databaseInitialize() {
    this.booking = this.db.getCollection('booking');
    if (this.booking === null) {
      this.booking = this.db.addCollection('booking');
    }

    const entryCount = this.db.getCollection('booking').count();
    console.log(`number of entries in database : ${entryCount}`);
  }

  create(bookingDetails) {
    const { id } = this.booking.insert(bookingDetails);
    const result = this.booking.find({ id });
    // console.log('$$$$$$$$$$$$$$$$$$$$$$$$$', result);
    return result[0];
  }

  getBookingByDateTime(dateTime) {
    const result = this.booking.find({ dateTime: { $dteq: dateTime } });
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@', result, dateTime, dateTime.toISOString());
    return result;
  }

  getBookingByDate(date) {
    return this.booking.find({ date });
  }

  find(user) {
    return this.booking.findOne(user);
  }
}
