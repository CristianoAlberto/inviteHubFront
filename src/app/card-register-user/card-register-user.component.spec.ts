import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRegisterUserComponent } from './card-register-user.component';

describe('CardRegisterUserComponent', () => {
  let component: CardRegisterUserComponent;
  let fixture: ComponentFixture<CardRegisterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardRegisterUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardRegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
