import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css'],
})
export class ByRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  haveError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  activateRegion(region: string) {
    if (region === this.activeRegion) {
      return;
    }
    this.activeRegion = region;
    this.countries = [];
    this.countryService.searchByRegion(region).subscribe(
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

  getClassCss(region: string): string {
    return region === this.activeRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
