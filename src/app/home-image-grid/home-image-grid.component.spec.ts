import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImageGridComponent } from './home-image-grid.component';

describe('HomeImageGridComponent', () => {
  let component: HomeImageGridComponent;
  let fixture: ComponentFixture<HomeImageGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeImageGridComponent]
    });
    fixture = TestBed.createComponent(HomeImageGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
