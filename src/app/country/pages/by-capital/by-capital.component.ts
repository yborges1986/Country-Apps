import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css'],
})
export class ByCapitalComponent {
  query: string = '';
  haveError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(query: string) {
    this.query = query;
    this.haveError = false;
    this.countryService.searchByCapital(this.query).subscribe(
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
    this.haveError = true;
    //TODO:Hacer sugerencias
  }
}
