import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read().then(json).then(resolve).catch(reject);
    });
  }
}
