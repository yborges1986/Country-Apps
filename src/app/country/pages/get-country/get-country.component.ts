import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-get-country',
  templateUrl: './get-country.component.html',
  styleUrls: ['./get-country.component.css'],
})
export class GetCountryComponent implements OnInit {
  country!: Country;
  constructor(
    private activateRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ codeCountry }) =>
          this.countryService.searchByCode(codeCountry)
        ),
        tap(console.log)
      )
      .subscribe((resp: Country[]) => {
        this.country = resp[0];
      });
  }
}
