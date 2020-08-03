import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from './app-constants';



@Injectable({
  providedIn: 'root'
})
export class PulldataService {

  constructor(private http: HttpClient) { 
    
  }

  public error = null;

  public getData() {

    return this.http.get(AppConstants.API_ENDPOINT);

  }
}
