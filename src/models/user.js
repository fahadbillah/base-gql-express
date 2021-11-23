import Loki from 'lokijs';
import { config } from '../constant';

const { dbName } = config;

export default class User {
  constructor() {
    this.db = new Loki(dbName, {
      autoloadCallback: () => this.databaseInitialize.call(this),
      autoload: true,
      autosave: true,
      autosaveInterval: 2000,
    });
  }

  databaseInitialize() {
    this.users = this.db.getCollection('users');
    if (this.users === null) {
      this.users = this.db.addCollection('users');
    }
  }

  create(user) {
    const newUser = this.users.insert(user);

    return newUser;
  }

  find(user) {
    return this.users.findOne(user);
  }
}
