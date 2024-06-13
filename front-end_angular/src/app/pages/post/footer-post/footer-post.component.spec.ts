import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPostComponent } from './footer-post.component';

describe('FooterPostComponent', () => {
  let component: FooterPostComponent;
  let fixture: ComponentFixture<FooterPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
