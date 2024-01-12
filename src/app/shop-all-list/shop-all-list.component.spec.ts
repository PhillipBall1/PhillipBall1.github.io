import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAllListComponent } from './shop-all-list.component';

describe('ShopAllListComponent', () => {
  let component: ShopAllListComponent;
  let fixture: ComponentFixture<ShopAllListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopAllListComponent]
    });
    fixture = TestBed.createComponent(ShopAllListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
