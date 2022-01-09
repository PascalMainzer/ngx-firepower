import { TestBed } from '@angular/core/testing';

import { NgxFirepowerService } from './ngx-firepower.service';

describe('NgxFirepowerService', () => {
  let service: NgxFirepowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFirepowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
