import Loki from 'lokijs';
import { config } from '../constant';

const { dbName } = config;

export default class Favorite {
  constructor() {
    this.db = new Loki(dbName, {
      autoloadCallback: () => this.databaseInitialize.call(this),
      autoload: true,
      autosave: true,
      autosaveInterval: 2000,
    });
  }

  databaseInitialize() {
    this.favorites = this.db.getCollection('favorites');
    if (this.favorites === null) {
      this.favorites = this.db.addCollection('favorites');
    }
  }

  toggle(favorite) {
    let message = '';
    const fav = this.favorites.find(favorite);
    if (fav.length === 0) {
      this.favorites.insert(favorite);
      message = 'added to favorite';
    } else {
      this.favorites.chain().find(favorite).remove().data();
      message = 'removed from favorite';
    }

    return message;
  }

  find(filter) {
    return this.favorites.find(filter);
  }
}
