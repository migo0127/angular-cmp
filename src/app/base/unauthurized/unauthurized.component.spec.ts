import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthurizedComponent } from './unauthurized.component';

describe('UnauthurizedComponent', () => {
  let component: UnauthurizedComponent;
  let fixture: ComponentFixture<UnauthurizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthurizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthurizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
