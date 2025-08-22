import { Component } from '@angular/core';
import { SwiperSlideHomeComponent } from '../../components/swiper-slide/swiper-home/swiper-slide-home.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SwiperSlideHomeComponent, NgOptimizedImage],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css', './home-page-responsive.css'],
})
export default class HomePageComponent {}
