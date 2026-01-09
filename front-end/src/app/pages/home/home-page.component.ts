import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgOptimizedImage, TranslateModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css', './home-page-responsive.css'],
})
export default class HomePageComponent {
  constructor(private translate: TranslateService) {
    this.translate.setFallbackLang('pt-BR');
    this.translate.use('pt-BR');
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
    {
      id: 1,
      labelKey: 'menu.home',
      fragment: 'home',
      icon: 'assets/Images/ui-icons/home.svg',
    },
    {
      id: 2,
      labelKey: 'menu.about',
      fragment: 'about',
      icon: 'assets/Images/ui-icons/info.svg',
    },
    {
      id: 3,
      labelKey: 'menu.skills',
      fragment: 'skills',
      icon: 'assets/Images/ui-icons/rocket.svg',
    },
    {
      id: 4,
      labelKey: 'menu.projects',
      fragment: 'projects',
      icon: 'assets/Images/ui-icons/project.svg',
    },
    {
      id: 5,
      labelKey: 'menu.trajectory',
      fragment: 'trajectory',
      icon: 'assets/Images/ui-icons/map.svg',
    },
    {
      id: 6,
      labelKey: 'menu.contact',
      fragment: 'contact',
      icon: 'assets/Images/ui-icons/radio-tower.svg',
    },
  ];

  flags = [
    {
      id: 1,
      lang: 'Português',
      labelKey: 'language.ptBR',
      icon: 'assets/Images/ui-icons/flag-of-brazil.svg',
    },
    {
      id: 2,
      lang: 'Inglês',
      labelKey: 'language.enUS',
      icon: 'assets/Images/ui-icons/flag-of-united-states.svg',
    },
  ];

  isMobileMenuOpen = signal(false);
  isDropdownLanguageOpen = signal(false);

  toggleMobileMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.isMobileMenuOpen.update((isOpen) => !isOpen);
  }

  toggleLanguageDropdown(event: MouseEvent): void {
    event.stopPropagation();
    this.isDropdownLanguageOpen.update((isOpen) => !isOpen);
  }

  changeLanguagePage(lang: string): void {
    this.translate.use(lang);
  }
}
