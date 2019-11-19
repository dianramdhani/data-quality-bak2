import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;
  constructor(private http: HttpClient) { }

  load(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.get('./assets/config.json')
        .subscribe(
          config => {
            this.config = config;
            resolve(true);
          },
          e => {
            console.error(e)
            reject(false);
          }
        );
    });
  }

  getConfig() {
    return this.config;
  }
}

export function ConfigLoader(config: ConfigService) {
  return () => config.load();
}
