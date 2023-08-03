import read from './reader';
import json from './parser';
import GameSaving from './game-saving';

export default class GameSavingLoader {
  static load() {
    return read().then(json).then(JSON.parse).then(GameSaving.fromObject);
  }
}
