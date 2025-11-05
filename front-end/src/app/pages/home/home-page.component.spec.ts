import { ComponentFixture, TestBed } from '@angular/core/testing';

import HomePageComponent from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with menu closed', () => {
    expect(component.isMobileMenuOpen()).toBeFalse();
  });

  it('should block scroll when menu open', () => {
    const buttonOpenMenuMobile =
      fixture.nativeElement.querySelector('.icon-burguer');

    buttonOpenMenuMobile.click();
    fixture.detectChanges();

    expect(component.isMobileMenuOpen()).toBeTrue();
    expect(document.body.style.overflow).toBe('hidden');
  });
});
