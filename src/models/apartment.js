import Loki from 'lokijs';
import { config } from '../constant';

const { dbName } = config;

export default class Apartment {
  constructor() {
    this.db = new Loki(dbName, {
      autoloadCallback: () => this.databaseInitialize.call(this),
      autoload: true,
      autosave: true,
      autosaveInterval: 2000,
    });
  }

  databaseInitialize() {
    this.apartments = this.db.getCollection('apartments');
    if (this.apartments === null) {
      this.apartments = this.db.addCollection('apartments');
    }
  }

  create(apartment) {
    const newApartment = this.apartments.insert(apartment);

    return newApartment;
  }

  find(filter) {
    return this.apartments.find(filter);
  }

  remove(id) {
    const result = this.apartments.find({ id });
    if (!result.length) {
      return false;
    }

    this.apartments.chain().find({ id }).remove().data();
    return true;
  }
}
