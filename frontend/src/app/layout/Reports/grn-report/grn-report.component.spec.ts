import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnReportComponent } from './grn-report.component';

describe('GrnReportComponent', () => {
  let component: GrnReportComponent;
  let fixture: ComponentFixture<GrnReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
