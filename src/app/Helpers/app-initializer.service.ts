import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class AppInitializerService {
  private isInitialized: boolean = false;
  private appSettings: any;

  constructor(private http: HttpClient) {}

  initialize() {

    console.log("App initialised")
    if (!this.isInitialized) {

      this.isInitialized = true;
      return this.http.get('assets/app-setting.json').pipe(
        tap((res) => {
          this.appSettings = res;
        })
      );
    }
    return;
  }

  get settings() {
    return this.appSettings;
  }
}