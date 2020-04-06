export class LocalStorageHelper {
  constructor() {}

  static setItem(key: string, payload: any) {
    localStorage.setItem(key, JSON.stringify(payload));
  }

  static getItem(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
