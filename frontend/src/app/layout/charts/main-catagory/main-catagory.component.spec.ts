import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCatagoryComponent } from './main-catagory.component';

describe('MainCatagoryComponent', () => {
  let component: MainCatagoryComponent;
  let fixture: ComponentFixture<MainCatagoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCatagoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
