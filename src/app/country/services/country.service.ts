import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpPrams(): HttpParams {
    return new HttpParams().set('fields', 'name,flags,capital,population,cca2');
  }

  constructor(private http: HttpClient) {}

  searchCountry(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${query}`;
    return this.http.get<Country[]>(url, { params: this.httpPrams });
  }
  searchByCapital(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${query}`;
    return this.http.get<Country[]>(url, { params: this.httpPrams });
  }
  searchByCode(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${query}`;
    return this.http.get<Country[]>(url);
  }

  searchByRegion(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${query}`;
    return this.http.get<Country[]>(url, { params: this.httpPrams });
  }
}
