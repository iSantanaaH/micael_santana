import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyOfPrivacityComponent } from './policy-of-privacity.component';

describe('PolicyOfPrivacityComponent', () => {
  let component: PolicyOfPrivacityComponent;
  let fixture: ComponentFixture<PolicyOfPrivacityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyOfPrivacityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolicyOfPrivacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
