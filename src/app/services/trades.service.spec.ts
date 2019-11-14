import { TestBed } from '@angular/core/testing';

import { TradesService } from './trades.service';

describe('TradesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TradesService = TestBed.get(TradesService);
    expect(service).toBeTruthy();
  });
});
