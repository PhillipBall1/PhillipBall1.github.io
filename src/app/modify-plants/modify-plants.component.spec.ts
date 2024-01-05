import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPlantsComponent } from './modify-plants.component';

describe('ModifyPlantsComponent', () => {
  let component: ModifyPlantsComponent;
  let fixture: ComponentFixture<ModifyPlantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyPlantsComponent]
    });
    fixture = TestBed.createComponent(ModifyPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
