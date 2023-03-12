import { Component } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  term: string = '';
  error404: boolean = false;
  countries: Country[] = [];
  showTable: boolean = false;

  constructor(private countryService: CountryService) {}

  search() {
    this.error404 = false;
    console.log(this.term);
    this.countryService.getCountryByName(this.term).subscribe({
      next: (countries) => {
        console.log(countries);
        this.countries = countries;
        this.showTable = this.countries.length > 0 ? true : false;


      },
      error: (err) => {
        this.error404 = true;
        this.countries = [];
        console.log('Error');
        console.info(err);
      },
    });

  }
}
