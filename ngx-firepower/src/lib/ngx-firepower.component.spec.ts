import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFirepowerComponent } from './ngx-firepower.component';

describe('NgxFirepowerComponent', () => {
  let component: NgxFirepowerComponent;
  let fixture: ComponentFixture<NgxFirepowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFirepowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFirepowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
