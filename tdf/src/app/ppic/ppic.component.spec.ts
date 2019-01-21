import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpicComponent } from './ppic.component';

describe('PpicComponent', () => {
  let component: PpicComponent;
  let fixture: ComponentFixture<PpicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
