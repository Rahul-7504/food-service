import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTemplateComponent } from './food-template.component';

describe('FoodTemplateComponent', () => {
  let component: FoodTemplateComponent;
  let fixture: ComponentFixture<FoodTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodTemplateComponent]
    });
    fixture = TestBed.createComponent(FoodTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
