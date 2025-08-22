import { Component } from '@angular/core';
import { FooterPostComponent } from '../footer-post/footer-post.component';
import { HeaderPostComponent } from '../header-post/header-post.component';

@Component({
  selector: 'app-content-post',
  standalone: true,
  imports: [FooterPostComponent, HeaderPostComponent],
  templateUrl: './content-post.component.html',
  styleUrl: './content-post.component.css',
})
export default class ContentPostComponent {}
