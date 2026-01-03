import { NgOptimizedImage } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css', './home-page-responsive.css'],
})
export default class HomePageComponent {
  constructor() {
    effect(() => {
      document.body.style.overflow = this.isMobileMenuOpen() ? 'hidden' : '';
    });
  }

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
    { id: 'Home', label: 'home', icon: 'assets/Images/ui-icons/home.svg' },
    { id: 'Sobre', label: 'about-me', icon: 'assets/Images/ui-icons/info.svg' },
    {
      id: 'Habilidades',
      label: 'skills',
      icon: 'assets/Images/ui-icons/rocket.svg',
    },
    {
      id: 'Projetos',
      label: 'projects',
      icon: 'assets/Images/ui-icons/project.svg',
    },
    {
      id: 'Trajetoria',
      label: 'trajectory',
      icon: 'assets/Images/ui-icons/map.svg',
    },
    {
      id: 'Redes sociais',
      label: 'social-networks',
      icon: 'assets/Images/ui-icons/radio-tower.svg',
    },
  ];

  isMobileMenuOpen = signal(false);

  toggleMobileMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.isMobileMenuOpen.update((isOpen) => !isOpen);
  }
}
