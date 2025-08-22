import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css', 'about-me-responsive.css'],
})
export default class AboutMeComponent {}
