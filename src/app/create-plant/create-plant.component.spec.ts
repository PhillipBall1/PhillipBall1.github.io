import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlantComponent } from './create-plant.component';

describe('CreatePlantComponent', () => {
  let component: CreatePlantComponent;
  let fixture: ComponentFixture<CreatePlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePlantComponent]
    });
    fixture = TestBed.createComponent(CreatePlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
