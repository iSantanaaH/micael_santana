import { Component } from '@angular/core';
import { HeaderHomeComponent } from '../header-home/header-home.component';
import { FooterHomeComponent } from '../footer-home/footer-home.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderHomeComponent, FooterHomeComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export default class HomePageComponent {}
