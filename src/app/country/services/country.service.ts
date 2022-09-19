import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountry(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${query}`;
    return this.http.get<Country[]>(url);
  }
  searchByCapital(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${query}`;
    return this.http.get<Country[]>(url);
  }
  searchByCode(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${query}`;
    return this.http.get<Country[]>(url);
  }
}
