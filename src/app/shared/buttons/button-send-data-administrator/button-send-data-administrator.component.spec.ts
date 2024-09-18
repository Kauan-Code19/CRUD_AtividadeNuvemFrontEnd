import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSendDataAdministratorComponent } from './button-send-data-administrator.component';

describe('ButtonSendDataAdministratorComponent', () => {
  let component: ButtonSendDataAdministratorComponent;
  let fixture: ComponentFixture<ButtonSendDataAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSendDataAdministratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonSendDataAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
