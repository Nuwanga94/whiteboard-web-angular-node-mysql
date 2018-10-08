import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperUserComponent } from './super-user.component';

describe('SuperUserComponent', () => {
  let component: SuperUserComponent;
  let fixture: ComponentFixture<SuperUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
