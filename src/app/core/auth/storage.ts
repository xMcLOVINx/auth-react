// Models
import { StorageModel } from './models/storage';

export const AuthStorage: StorageModel & any = {
  get instance() {
    return localStorage;
  },

  read(key: string) {
    return this.instance.getItem(key);
  },

  write(key: string, value: any): void {
    this.instance.setItem(key, value);
  },

  remove(key: string): void {
    this.instance.removeItem(key);
  },

  clear(): void {
    this.instance.clear();
  },
};
