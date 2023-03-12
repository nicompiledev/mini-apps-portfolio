import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {
  term: string = '';

  search(term: string) {
    this.term = term;
    console.log(this.term);
  }

}
