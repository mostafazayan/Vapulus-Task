import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ContactRequestModel } from './../models/contact-request-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(environment.apiUrl + '/data');
  }
  addContact(body: ContactRequestModel) {
    return this.http.post(environment.apiUrl + '/data', body);
  }
}
