import { TestBed, inject } from '@angular/core/testing';

import { GoogleBaseChartsService } from './google-base-charts.service';

describe('GoogleBaseChartsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleBaseChartsService]
    });
  });

  it('should be created', inject([GoogleBaseChartsService], (service: GoogleBaseChartsService) => {
    expect(service).toBeTruthy();
  }));
});
