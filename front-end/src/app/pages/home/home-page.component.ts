import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [NgOptimizedImage],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css', './home-page-responsive.css'],
})
export default class HomePageComponent {
  calcMyAge(): number {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const birthdate = '16/02/2001';
    const [day, month, year] = birthdate.split('/').map(Number);

    let age = currentYear - year;

    const birthThisYear = new Date(currentYear, month - 1, day);
    if (currentDate < birthThisYear) {
      age--;
    }

    return age;
  }
}
