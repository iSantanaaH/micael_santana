import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [NgOptimizedImage],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css', './home-page-responsive.css'],
})
export default class HomePageComponent {}
