import { Component } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent {
  query: string = '';
  haveError: boolean = false;
  countries: Country[] = [];
  suggestCountries: Country[] = [];
  showSuggest: boolean = false;

  constructor(private countryService: CountryService) {}

  search(query: string) {
    this.showSuggest = false;
    this.query = query;
    this.haveError = false;
    this.countryService.searchCountry(this.query).subscribe(
      (countriesRes) => {
        console.log(countriesRes);
        this.countries = countriesRes;
      },
      (err) => {
        console.log(err);
        this.haveError = true;
        this.countries = [];
      }
    );
  }
  suggestions(query: string) {
    this.haveError = false;
    //TODO:Hacer sugerencias
    console.log('yordiiiiiiiiiiiiiiiiiiii');
    this.showSuggest = true;
    this.query = query;

    this.countryService
      .searchCountry(query)
      .pipe(tap(console.log))
      .subscribe(
        (countries) => (this.suggestCountries = countries.splice(0, 5)),
        (error) => (this.suggestCountries = [])
      );
  }

  searchSuggest(query: string) {
    this.search(query);
    this.showSuggest = false;
  }
}
