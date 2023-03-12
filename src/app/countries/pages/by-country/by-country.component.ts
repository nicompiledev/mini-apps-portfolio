import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  term: string = '';
  error404: boolean = false;


  constructor(private countryService: CountryService) {}

  search() {
    this.error404 = false;
    console.log(this.term);
    this.countryService.getCountryByName(this.term).subscribe({
      next: (resp) => {
        console.log(resp);
        // this.countries = resp;
      },
      error: (err) => {
        this.error404 = true;
        console.log('Error');
        console.info(err);
      },
    });
  }
}
