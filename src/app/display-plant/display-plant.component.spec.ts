import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPlantComponent } from './display-plant.component';

describe('DisplayPlantComponent', () => {
  let component: DisplayPlantComponent;
  let fixture: ComponentFixture<DisplayPlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayPlantComponent]
    });
    fixture = TestBed.createComponent(DisplayPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
