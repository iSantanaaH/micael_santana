import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
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

  navLinks = [
    { id: 'Home', label: 'home' },
    { id: 'Sobre', label: 'about-me' },
    { id: 'Habilidades', label: 'skills' },
    { id: 'Projetos', label: 'projects' },
    { id: 'Trajetoria', label: 'trajectory' },
  ];

  isMobileMenuOpen: boolean = false;

  toggleMobileMenu(event: Event): void {
    event.stopPropagation();
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
