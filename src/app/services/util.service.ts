export enum TypeLocalStorage { AUTH }

export class LocalStorage {
  public static setItem(type: TypeLocalStorage, data: {}) {
    localStorage.setItem(type.toString(), JSON.stringify(data));
  }

  public static getItem(type: TypeLocalStorage) {
    const data = JSON.parse(localStorage.getItem(type.toString()));
    if (!data) {
      return false;
    }
    return data;
  }

  public static removeItem(type: TypeLocalStorage) {
    localStorage.removeItem(type.toString());
  }
}