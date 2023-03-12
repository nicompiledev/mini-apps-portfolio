import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  // API URL
  private basseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  // Get all countries
  getCountries() {
    return this.http.get(`${this.basseUrl}/all`);
  }

  // Get country by code
  getCountryByCode( code: string ) {
    return this.http.get(`${this.basseUrl}/alpha/${code}`);
  }

  // Get country by name
  getCountryByName( name: string ): Observable<any> {
    return this.http.get(`${this.basseUrl}/name/${name}`);
  }
}
