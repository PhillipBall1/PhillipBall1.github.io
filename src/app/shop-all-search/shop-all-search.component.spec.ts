import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAllSearchComponent } from './shop-all-search.component';

describe('ShopAllSearchComponent', () => {
  let component: ShopAllSearchComponent;
  let fixture: ComponentFixture<ShopAllSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopAllSearchComponent]
    });
    fixture = TestBed.createComponent(ShopAllSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
