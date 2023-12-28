import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeaturedDisplayComponent } from './home-featured-display.component';

describe('HomeFeaturedDisplayComponent', () => {
  let component: HomeFeaturedDisplayComponent;
  let fixture: ComponentFixture<HomeFeaturedDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFeaturedDisplayComponent]
    });
    fixture = TestBed.createComponent(HomeFeaturedDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
