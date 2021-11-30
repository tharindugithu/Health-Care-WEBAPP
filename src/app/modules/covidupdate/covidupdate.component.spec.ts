import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidupdateComponent } from './covidupdate.component';

describe('CovidupdateComponent', () => {
  let component: CovidupdateComponent;
  let fixture: ComponentFixture<CovidupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
