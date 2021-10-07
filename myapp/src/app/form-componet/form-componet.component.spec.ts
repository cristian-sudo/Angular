import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponetComponent } from './form-componet.component';

describe('FormComponetComponent', () => {
  let component: FormComponetComponent;
  let fixture: ComponentFixture<FormComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
