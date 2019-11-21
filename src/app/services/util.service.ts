export enum TypeLocalStorage {
  AUTH
}

export class LocalStorage {
  public static setItem<T>(type: TypeLocalStorage, data: T) {
    localStorage.setItem(type.toString(), JSON.stringify(data));
  }

  public static getItem<T>(type: TypeLocalStorage): T | boolean {
    const data: T = JSON.parse(localStorage.getItem(type.toString()));
    if (!data) {
      return false;
    }
    return data;
  }

  public static removeItem(type: TypeLocalStorage) {
    console.log(type);
    localStorage.removeItem(type.toString());
  }
}