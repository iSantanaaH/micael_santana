import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperSlideHomeComponent } from './swiper-slide-home.component';

describe('SwiperSlideHomeComponent', () => {
  let component: SwiperSlideHomeComponent;
  let fixture: ComponentFixture<SwiperSlideHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperSlideHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwiperSlideHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
